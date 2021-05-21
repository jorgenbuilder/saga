import { useEffect, useMemo, useState, useRef } from 'react';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useLoader, Vector3 } from '@react-three/fiber';
import { Box3, Color, Object3D, Side, Sphere, MathUtils as M3 } from 'three';


const Svg:React.FC<{url: string, args?: any[], side: Side}> = ({ url, side }) => {
  const { paths } = useLoader(SVGLoader, url)
  const shapes = useMemo(() => paths.flatMap(
    p => p.toShapes(true).map(shape => ({ shape, color: p.color }))
  ), [paths]);

  const [center, setCenter] = useState<Vector3>([0, 0, 0]);
  const ref = useRef<Object3D>();

  useEffect(() => {
    const box = new Box3().setFromObject(ref.current as Object3D);
    const sphere = new Sphere();
    box.getBoundingSphere(sphere);
    setCenter([-sphere.center.x, -sphere.center.y, 0]);
  }, []);

  return (
    <group position={center} ref={ref}>
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