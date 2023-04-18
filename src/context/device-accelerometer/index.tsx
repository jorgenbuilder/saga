import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import PermissionToast from './toast';

interface AccelerometerState {
    isSupported: boolean;
    permission: undefined | 'pending' | 'granted' | 'denied' | 'NA';
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
};

interface AccelerometerProviderProps {
    // permissionUI?: React.Component;
    children?: ReactNode;
};

const DefaultState: AccelerometerState = {
    isSupported: false,
    permission: undefined,
    acceleration: { x: 0, y: 0, z: 0, beta: 0, gamma: 0, alpha: 0, },
    requestPermission: () => console.warn('requestPermission is not yet initialized'),
    popPermissionToast: () => console.warn('popPermissionToast is not yet initialized'),
};

export const AccelerometerContext = createContext<AccelerometerState>(DefaultState);

export const useAccelerometer = () => useContext(AccelerometerContext);

export default function AccelerometerProvider ({ children }: AccelerometerProviderProps) {
    const [isSupported, setIsSupported] = useState<boolean>(DefaultState.isSupported);
    const [permission, setPermission] = useState<AccelerometerState['permission']>(DefaultState.permission);
    const [acceleration, setAcceleration] = useState<AccelerometerState['acceleration']>(DefaultState.acceleration);
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

    const bindMotionEvents = useCallback(() => window.addEventListener('devicemotion', ingestMotion, false), []);
    const unbindMotionEvents = useCallback(() => window.removeEventListener('devicemotion', ingestMotion), []);

    const requestPermission = useCallback(() => {
        //@ts-ignore
        DeviceMotionEvent.requestPermission()
        //@ts-ignore
        .then(response => {
            if (response === 'granted') {
                bindMotionEvents();
                setPermission('granted');
                setShowToast(false);
            } else if (response === 'denied') {
                setPermission('denied');
                setShowToast(false);
            }
        })
        .catch(console.error);
    }, [bindMotionEvents]);

    const popPermissionToast = useCallback(() => {
        if (permission === 'pending') {
            setShowToast(true);
        }
    }, [permission]);

    const acceptToast = () => {
        requestPermission();
        setShowToast(false);
    };

    const dismissToast = () => {
        setShowToast(false);
    }

    useEffect(() => {
        setIsSupported(window.DeviceMotionEvent !== undefined);
        // @ts-ignore
        if (typeof window?.DeviceMotionEvent?.requestPermission === 'function') {
            // Some devices provide this permission api, which must be called from a user interaction.
            // If a user has already granted permission, we can call this without a user interaction.
            requestPermission();
            setPermission('pending');
        } else {
            setPermission('NA');
        }
        return unbindMotionEvents;
    }, [setPermission, requestPermission, unbindMotionEvents]);

    const value = {
        isSupported,
        permission,
        acceleration,
        requestPermission,
        popPermissionToast,
    };

    return <AccelerometerContext.Provider
        value={value}
    >
        <PermissionToast accept={acceptToast} dismiss={dismissToast} open={showToast} />
        {children}
    </AccelerometerContext.Provider>;
};
