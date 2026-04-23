import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function NeonSphere() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={mesh} args={[1.6, 128, 128]}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      <Sphere args={[1.85, 64, 64]}>
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.15} />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
        <pointLight position={[-10, -5, -5]} intensity={2} color="#a855f7" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#06b6d4" />
        <NeonSphere />
        <Stars radius={50} depth={40} count={2500} factor={4} saturation={0} fade speed={1} />
      </Suspense>
    </Canvas>
  );
}