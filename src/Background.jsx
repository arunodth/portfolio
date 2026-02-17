import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function Background() {
  return (
    <Canvas className="fixed top-0 left-0 w-full h-full -z-10">
      <Suspense fallback={null}>
        <Stars
          radius={100}       // Radius of the inner sphere (like sky)
          depth={50}         // Depth of stars
          count={500}        // Number of stars
          factor={4}         // Size factor
          saturation={0}     // Color saturation
          fade={true}        // Smooth fade
        />
      </Suspense>
    </Canvas>
  );
}
