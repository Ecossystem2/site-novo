import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

const DataFlow = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow, smooth rotation for elegance
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      {/* Main Stream - Orange */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sparkles 
          count={150} 
          scale={[10, 10, 10]} 
          size={2} 
          speed={0.4} 
          opacity={0.6}
          color="#EA580C"
        />
      </Float>

      {/* Background Depth - White/Grey */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <Sparkles 
          count={100} 
          scale={[15, 15, 15]} 
          size={1} 
          speed={0.2} 
          opacity={0.2} 
          color="#FFFFFF"
        />
      </Float>
    </group>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={['#050505', 5, 20]} />
        <DataFlow />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50"></div>
    </div>
  );
};

export default ThreeScene;