import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import { HotelModel } from "./HotelModel";

function ParallaxRig({ children }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const { pointer } = state;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      -1.5 + pointer.x * 0.12,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.05,
      0.04
    );
  });

  return <group ref={group}>{children}</group>;
}

function Scene() {
  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0.4, 9]} zoom={80} near={0.1} far={50} />

      <ambientLight intensity={0.75} />
      <hemisphereLight args={["#ffffff", "#0a1128", 0.6]} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 3, -4]} intensity={0.4} color="#8fa8d6" />

      <ParallaxRig>
        <Float speed={0.1} rotationIntensity={0.1} floatIntensity={0.5}>
          <HotelModel position={[3, -0.1, -5]} />
        </Float>
      </ParallaxRig>

      <ContactShadows
        position={[10, -2.9, 0]}
        opacity={0.4}
        scale={12}
        blur={2.6}
        far={3}
        color="#000814"
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
