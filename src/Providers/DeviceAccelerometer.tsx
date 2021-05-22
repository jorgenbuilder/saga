import React, { createContext, useEffect, useState } from 'react';

interface DeviceAccelerometerState {
    deviceSupport: boolean;
    devicePermission: 'pending' | 'granted' | 'denied' | 'NA';
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
    devicePermission: 'pending',
    acceleration: { x: 0, y: 0, z: 0, beta: 0, gamma: 0, alpha: 0, },
    requestPermission: () => console.warn('requestPermission is not yet initialized'),
    popPermissionToast: () => console.warn('popPermissionToast is not yet initialized'),
};

const DeviceAccelerometerContext = createContext<DeviceAccelerometerState>(InitialValues)

const DeviceAccelerometerProvider:React.FC = ({ children }) => {
    const [deviceSupport, setDeviceSupport] = useState<boolean>(InitialValues.deviceSupport)
    const [devicePermission, setDevicePermission] = useState<DeviceAccelerometerState['devicePermission']>(InitialValues.devicePermission);
    const [acceleration, setAcceleration] = useState<DeviceAccelerometerState['acceleration']>(InitialValues.acceleration)

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

    const deviceHasOrientationEvents = () => window.DeviceMotionEvent !== undefined;
    const deviceRequiresOrientationPermission = () => typeof window.DeviceMotionEvent.requestPermission === 'function';
    const bindOrientationEvents = () => window.addEventListener('devicemotion', ingestMotion, false);
    const unbindOrientationEvents = () => window.removeEventListener('devicemotion', ingestMotion);

    const requestPermission = () => {
        DeviceMotionEvent.requestPermission()
        .then(response => {
            if (response == 'granted') {
                bindOrientationEvents();
                setDevicePermission('granted');
            } else if (response == 'denied') {
                setDevicePermission('denied');
            }
        })
        .catch(console.error);
    };

    const popPermissionToast = () => {
        // Pop a toast ui element up with an onclick =
        requestPermission();
    }

    useEffect(() => {
        setDeviceSupport(deviceHasOrientationEvents())
        if (deviceRequiresOrientationPermission()) {
            // If a user has already granted permission, we can call this without a user interaction.
            requestPermission();
        } else {
            setDevicePermission('NA');
        }
        return unbindOrientationEvents;
    }, []);

    const value = {
        deviceSupport,
        devicePermission,
        acceleration,
        requestPermission,
        popPermissionToast,
    };

    return (
        <>
            <DeviceAccelerometerContext.Provider value={value} children={children} />
        </>
    );
};

export default DeviceAccelerometerProvider;

export {
    DeviceAccelerometerContext,
}
