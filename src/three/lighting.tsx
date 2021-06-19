import { Color, MathUtils as M3 } from 'three';

export default function DefaultLighting () {
    return (
        <>
            <spotLight
                intensity={2}
                position={[-4, 8, 5]}
                rotation={[M3.degToRad(180), 0, 0]}
                color={new Color('hsl(43, 100%, 100%)').convertSRGBToLinear()}
            />
            <ambientLight
                intensity={.1}
                color={new Color('hsl(43, 100%, 100%)').convertSRGBToLinear()}
            />
        </>
    )
}