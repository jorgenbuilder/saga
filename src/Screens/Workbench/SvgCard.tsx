import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import CameraController from '../../Atoms/ThreeCameraController';
import SvgCard from '../../Molecules/ThreeTarotCard';

const WorkbenchSvgCard: React.FC = () => {
    return (
        <Canvas
            camera={{
                position: [15, 0, 0],
            }}
        >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <SvgCard />
            </Suspense>
            {/* <gridHelper args={[100, 100, `#888`, `#AAA`]} /> */}
            {/* <axesHelper /> */}
            <CameraController />
        </Canvas>
    );
}

export default WorkbenchSvgCard;
