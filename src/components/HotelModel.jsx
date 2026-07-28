import { useGLTF } from "@react-three/drei";

const MODEL_PATH = "/models/hotel-3star.glb";

// Measured from the source file: bounding size ~15.5 x 27.5 x 18.2,
// footprint centered at x=1.26 z=-0.005, base at y=0.02.
// We normalize the model so its center sits at the local origin and
// its height maps to ~5.6 world units.
const CENTER = [1.26, 13.75, -0.005];
const SCALE = 9.6 / 27.45;

export function HotelModel(props) {
  const { nodes, materials } = useGLTF(MODEL_PATH);

  return (
    <group {...props} dispose={null}>
      <group
        scale={SCALE}
        position={[-CENTER[0] * SCALE, -CENTER[1] * SCALE, -CENTER[2] * SCALE]}
      >
        <mesh geometry={nodes.Cube049.geometry} material={materials.red} />
        <mesh geometry={nodes.Cube049_1.geometry} material={materials.darkyellow} />
        <mesh geometry={nodes.Cube049_2.geometry} material={materials.orange} />
        <mesh geometry={nodes.Cube049_3.geometry} material={materials.glass} />
        <mesh geometry={nodes.Cube049_4.geometry} material={materials.gray} />
        <mesh geometry={nodes.Cube049_5.geometry} material={materials.yellow} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
