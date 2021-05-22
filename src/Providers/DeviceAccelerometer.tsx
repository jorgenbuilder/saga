import React, { createContext, MouseEventHandler, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface DeviceAccelerometerState {
    deviceSupport: boolean;
    devicePermission: undefined | 'pending' | 'granted' | 'denied' | 'NA';
    acceleration: {
        // https://developers.google.com/web/fundamentals/native-hardware/device-orientation#device_motion
        x: number,
        y: number,
        z: number,
        beta: number,
        gamma: number,
        alpha: number,
    },
    requestPermission: () => void,
    popPermissionToast: () => void,
}

const InitialValues: DeviceAccelerometerState = {
    deviceSupport: false,
    devicePermission: undefined,
    acceleration: { x: 0, y: 0, z: 0, beta: 0, gamma: 0, alpha: 0, },
    requestPermission: () => console.warn('requestPermission is not yet initialized'),
    popPermissionToast: () => console.warn('popPermissionToast is not yet initialized'),
};

const DeviceAccelerometerContext = createContext<DeviceAccelerometerState>(InitialValues);

const DeviceAccelerometerProvider:React.FC = ({ children }) => {
    const [deviceSupport, setDeviceSupport] = useState<boolean>(InitialValues.deviceSupport);
    const [devicePermission, setDevicePermission] = useState<DeviceAccelerometerState['devicePermission']>(InitialValues.devicePermission);
    const [acceleration, setAcceleration] = useState<DeviceAccelerometerState['acceleration']>(InitialValues.acceleration)
    const [showToast, setShowToast] = useState<boolean>(false);

    const ingestMotion = (e: DeviceMotionEvent) => {
        requestAnimationFrame(() => {
            setAcceleration({
                x: e.acceleration?.x || 0,
                y: e.acceleration?.y || 0,
                z: e.acceleration?.z || 0,
                beta: e.rotationRate?.beta || 0,
                gamma: e.rotationRate?.gamma || 0,
                alpha: e.rotationRate?.alpha || 0,
            });
        });
    };

    const deviceHasOrientationEvents = useCallback(() => window.DeviceMotionEvent !== undefined, []);
    const deviceRequiresOrientationPermission = useCallback(() => typeof window.DeviceMotionEvent.requestPermission === 'function', []);
    const bindOrientationEvents = useCallback(() => window.addEventListener('devicemotion', ingestMotion, false), []);
    const unbindOrientationEvents = useCallback(() => window.removeEventListener('devicemotion', ingestMotion), []);

    const requestPermission = useCallback(() => {
        DeviceMotionEvent.requestPermission()
        .then(response => {
            if (response === 'granted') {
                bindOrientationEvents();
                setDevicePermission('granted');
                setShowToast(false);
            } else if (response === 'denied') {
                setDevicePermission('denied');
                setShowToast(false);
            }
        })
        .catch(console.error);
    }, [bindOrientationEvents]);

    const popPermissionToast = () => {
        setShowToast(true);
    }

    const acceptToast:MouseEventHandler = (e) => {
        e.preventDefault();
        requestPermission();
        setShowToast(false);
    };

    const dismissToast:MouseEventHandler = (e) => {
        e.preventDefault();
        setShowToast(false);
    }

    useEffect(() => {
        setDeviceSupport(deviceHasOrientationEvents());
        if (deviceRequiresOrientationPermission()) {
            // If a user has already granted permission, we can call this without a user interaction.
            requestPermission();
            setDevicePermission('pending');
        } else {
            setDevicePermission('NA');
        }
        return unbindOrientationEvents;
    }, [setDevicePermission, requestPermission, unbindOrientationEvents, deviceRequiresOrientationPermission, deviceHasOrientationEvents]);

    const value = {
        deviceSupport,
        devicePermission,
        acceleration,
        requestPermission,
        popPermissionToast,
    };

    return <DeviceAccelerometerContext.Provider
        value={value}
    >
        <PermissionToast accept={acceptToast} dismiss={dismissToast} open={showToast} />
        {children}
    </DeviceAccelerometerContext.Provider>;
};

export default DeviceAccelerometerProvider;

export {
    DeviceAccelerometerContext,
}

const PermissionToast:React.FC<{accept: MouseEventHandler, dismiss: MouseEventHandler, open: boolean}> = ({accept, dismiss, open}) => {

    const Toast = styled.div<{open: boolean}>`
    position: absolute;

    transform: translateY(-${props => props.open ? 150 : 0}%);

    display: flex;
    max-width: 90vw;
    padding: 20px;
    box-sizing: border-box;
    
    background-color: hsl(100, 62%, 50%);
    border-radius: 16px;
    cursor: pointer;

    color: white;
    text-align: center;
    `;

    const ToastContainer = styled.div`
    position: fixed;
    top: 100%;
    z-index: 100;

    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    `;

    const Dismiss = styled.div`
    
    `;

    return (
        <ToastContainer>
            <Toast open={open}>
                <div onClick={accept}>Tap to enhance with your phone's accelerometer</div>
                <Dismiss onClick={dismiss}>
                    ❌
                </Dismiss>
            </Toast>
        </ToastContainer>
    );
}
