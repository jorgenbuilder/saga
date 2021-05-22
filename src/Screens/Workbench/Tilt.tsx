import { MouseEventHandler, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import SvgCard from '../../Molecules/ThreeTarotCard';
import { MathUtils } from 'three';
import { useSpring } from '@react-spring/three';

const TiltWorkbench:React.FC = () => {
    const [aX, setAX] = useState<number>(0);
    const [aY, setAY] = useState<number>(0);
    const [aZ, setAZ] = useState<number>(0);
    const [rX, setRX] = useState<number>(0);
    const [rY, setRY] = useState<number>(0);
    const [rZ, setRZ] = useState<number>(0);
    const [permission, setPermission] = useState<'pending'|'granted'|'NA'>('pending');
    
    const handleOrientation = (e: DeviceMotionEvent) => {
        requestAnimationFrame(() => {
            setAX(Math.round(e.acceleration?.x || 0) * 100);
            setAY(Math.round(e.acceleration?.y || 0) * 100);
            setAZ(Math.round(e.acceleration?.z || 0) * 100);
            setRX(Math.round(e.rotationRate?.beta || 0));
            setRY(Math.round(e.rotationRate?.gamma || 0));
            setRZ(Math.round(e.rotationRate?.alpha || 0));
        });
    };

    const bindOrientation = () => {
        window.addEventListener('devicemotion', handleOrientation, false);
    }

    const unbindOrientation = () => {
        window.removeEventListener('devicemotion', handleOrientation);
    }

    const handlePermissions:MouseEventHandler = (e) => {
        DeviceMotionEvent.requestPermission()
        .then(response => {
            if (response == 'granted') {
                bindOrientation()
                return unbindOrientation;
            }
        })
        .catch(console.error)
    };

    useEffect(() => {
        if (window.DeviceMotionEvent) {
            if (typeof window.DeviceMotionEvent.requestPermission !== 'function') {
                setPermission('NA');
                bindOrientation();
                return unbindOrientation();
            }
        }
    }, []);

    const props = useSpring({
        rotation: [
            0, // MathUtils.degToRad(-rZ),
            0, // MathUtils.degToRad(-rX),
            MathUtils.degToRad(-rY + 180),
        ],
        position: [
            MathUtils.degToRad(aX),
            MathUtils.degToRad(aY),
            0
        ],
        config: {
            mass: 300,
            tension: 1500,
            friction: 1500,
        }
    });


    return (
        <>
            <Canvas
                camera={{
                    zoom: .62
                }}
            >
                <ambientLight color='purple' intensity={.62} />
                <Suspense fallback={<></>}>
                    {/* @ts-ignore */}
                    <SvgCard rotation={props.rotation} position={props.position} />
                </Suspense>
            </Canvas>
            <div style={{color: 'white', flexDirection: 'column', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '100%', width: '100%', position: 'absolute'}}>
                <div>aX: {aX}</div>
                <div>aY: {aY}</div>
                <div>aZ: {aZ}</div>
                <div>rX: {rX}</div>
                <div>rY: {rY}</div>
                <div>rZ: {rZ}</div>
                {permission === 'pending' && <a href="#nothing" onClick={handlePermissions}>Grant</a>}
            </div>
        </>
    );
}

export default TiltWorkbench;