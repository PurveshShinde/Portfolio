import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Points, PointMaterial, Float, Icosahedron, MeshDistortMaterial, Stars } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { useMagic } from '../../context/MagicContext';
import * as THREE from 'three';

// -----------------------------------------------------------------------------
// 🧙‍♂️ WIZARD MODE: Starfield / Embers
// -----------------------------------------------------------------------------
interface StarFieldProps {
  isWizardMode: boolean;
}

const StarField: React.FC<StarFieldProps> = ({ isWizardMode }) => {
  const ref = useRef<THREE.Points>(null);
  // Generate 6000 random points in a sphere of radius 1.5
  const sphere = useMemo(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotation: Wizard mode rotates strangely, Standard is steady
      ref.current.rotation.x -= delta / (isWizardMode ? 15 : 10);
      ref.current.rotation.y -= delta / (isWizardMode ? 20 : 15);

      // Pulse breathing effect
      const t = state.clock.elapsedTime;
      const pulse = isWizardMode
        ? 1 + Math.sin(t * 0.5) * 0.1
        : 1 + Math.sin(t) * 0.05;

      ref.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isWizardMode ? "#fbbf24" : "#60a5fa"} // Amber-400 vs Blue-400
          size={isWizardMode ? 0.003 : 0.002} // Larger "embers" in wizard mode
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // AdditiveBlending
        />
      </Points>
    </group>
  );
};

// -----------------------------------------------------------------------------
// 💻 STANDARD MODE: Tech Object (Icosahedron)
// -----------------------------------------------------------------------------
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
  const { isWizardMode } = useMagic();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        {isWizardMode ? (
          // WIZARD MODE SCENE
          <>
            <PerspectiveCamera makeDefault position={[0, 0, 1]} />
            <StarField isWizardMode={true} />
          </>
        ) : (
          // STANDARD MODE SCENE
          <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            {/* @ts-ignore */}
            <ambientLight intensity={0.7} />
            {/* @ts-ignore */}
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#60a5fa" />
            {/* @ts-ignore */}
            <pointLight position={[-10, -10, -10]} intensity={1} color="#2563eb" />

            <TechObject />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default HeroScene;