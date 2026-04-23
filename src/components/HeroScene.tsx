import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function PaperSphere() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.9}>
      <Sphere ref={mesh} args={[1.55, 128, 128]}>
        <MeshDistortMaterial
          color="#c66a45"
          emissive="#e8b577"
          emissiveIntensity={0.15}
          distort={0.38}
          speed={1.4}
          roughness={0.45}
          metalness={0.25}
        />
      </Sphere>
      <Sphere args={[1.82, 48, 48]}>
        <meshBasicMaterial color="#5a7560" wireframe transparent opacity={0.18} />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={1.6} color="#fff1de" />
        <pointLight position={[-8, -4, -4]} intensity={1.2} color="#e8b577" />
        <pointLight position={[0, 6, 4]} intensity={0.8} color="#c66a45" />
        <PaperSphere />
      </Suspense>
    </Canvas>
  );
}