import { useMemo, useRef } from 'react';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useLoader } from '@react-three/fiber';
import { Color, Object3D, Side, MathUtils as M3, Vector3 as V3 } from 'three';


const Svg:React.FC<{url: string, position?: number[], args?: any[], side: Side}> = ({ url, side, position }) => {
  const { paths } = useLoader(SVGLoader, url)
  const shapes = useMemo(() => paths.flatMap(
    p => p.toShapes(true).map(shape => ({ shape, color: p.color }))
  ), [paths]);

  const ref = useRef<Object3D>();

  return (
    //@ts-ignore
    <group scale={new V3(-1, 1, 1)} ref={ref} position={position}>
      {shapes.map(props => {
        const color = new Color(props.color);
        return <mesh key={props.shape.uuid} rotation={[M3.degToRad(0), M3.degToRad(0), M3.degToRad(0)]}>
          <meshPhongMaterial side={side} attach="material" color={color.convertLinearToSRGB()} depthWrite={false} />
          <shapeBufferGeometry attach="geometry" args={[props.shape]} />
        </mesh>
      })}
    </group>
  )
}

export default Svg;