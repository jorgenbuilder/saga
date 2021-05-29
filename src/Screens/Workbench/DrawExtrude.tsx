import { MathUtils as M3, Color } from 'three';
import DrawScreen from '../App/DrawScreen'
import ExtrudeCard from '../../Molecules/ExtrudeTarotCard';

const DrawWorkbench:React.FC = () => {
    const lighting = <>
        <spotLight intensity={2} position={[-4, 8, 5]} rotation={[M3.degToRad(180), 0, 0]} color={new Color('hsl(0, 100%, 100%)').convertSRGBToLinear()} />
        <ambientLight intensity={.1} color={new Color('hsl(0, 100%, 100%)').convertSRGBToLinear()} />
    </>
    return <DrawScreen
        CardComponent={ExtrudeCard}
        lighting={lighting}
    />
}

export default DrawWorkbench;