import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const TechObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Get normalized mouse coordinates (-1 to 1)
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;

      // Smoothly interpolate rotation towards mouse position
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouseY * 0.5 + time * 0.2, 
        0.1
      );
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouseX * 0.5 + time * 0.3,
        0.1
      );
    }
  });

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={1} // XYZ rotation intensity
      floatIntensity={1} // Up/down float intensity
    >
      <Icosahedron ref={meshRef} args={[1, 1]} scale={1.8}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4} // Strength
          speed={2} // Speed
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const HeroScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        {/* @ts-ignore */}
        <ambientLight intensity={0.7} />
        {/* @ts-ignore */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#60a5fa" />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} intensity={1} color="#2563eb" />
        
        <TechObject />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default HeroScene;