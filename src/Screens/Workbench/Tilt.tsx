import { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import SvgCard from '../../Molecules/ThreeTarotCard';
import { MathUtils } from 'three';
import { useSpring } from '@react-spring/three';
import { DeviceAccelerometerContext } from '../../Providers/DeviceAccelerometer';

const TiltWorkbench:React.FC = () => {
    const { acceleration, devicePermission, requestPermission } = useContext(DeviceAccelerometerContext);

    const props = useSpring({
        rotation: [
            MathUtils.degToRad(-acceleration.alpha * .1),
            MathUtils.degToRad(-acceleration.beta * .1),
            MathUtils.degToRad(-acceleration.gamma * .1 + 180),
        ],
        position: [
            MathUtils.degToRad(acceleration.x * 50),
            MathUtils.degToRad(acceleration.y * 50),
            0
        ],
        config: {
            mass: 20,
            tension: 200,
            friction: 50,
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
            <div style={{boxSizing: 'border-box', fontFamily: 'monospace', color: 'white', flexDirection: 'column', display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start', height: '100%', width: '100%', position: 'absolute', padding: '1rem'}}>
                <div>aX: {acceleration.x >= 0 ? '+' : '-'}{Math.abs(acceleration.x).toFixed(2)}</div>
                <div>aY: {acceleration.x >= 0 ? '+' : '-'}{Math.abs(acceleration.y).toFixed(2)}</div>
                <div>aZ: {acceleration.x >= 0 ? '+' : '-'}{Math.abs(acceleration.z).toFixed(2)}</div>
                <div>rX: {acceleration.x >= 0 ? '+' : '-'}{Math.abs(acceleration.beta).toFixed(2)}</div>
                <div>rY: {acceleration.x >= 0 ? '+' : '-'}{Math.abs(acceleration.gamma).toFixed(2)}</div>
                <div>rZ: {acceleration.x >= 0 ? '+' : '-'}{Math.abs(acceleration.alpha).toFixed(2)}</div>
                {devicePermission === 'pending' && <a href="#nothing" onClick={requestPermission}>Grant</a>}
            </div>
        </>
    );
}

export default TiltWorkbench;