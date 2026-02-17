import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars() {
  const points = useRef();
  const [sphere] = React.useState(() => {
    const temp = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push([x, y, z]);
    }
    return temp;
  });

  useFrame(() => {
    points.current.rotation.y += 0.001;
  });

  return (
    <Points ref={points} positions={sphere.flat()} stride={3} frustumCulled>
      <PointMaterial color="#0ff" size={0.05} sizeAttenuation />
    </Points>
  );
}

export default function CloudNetwork() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <Stars />
    </Canvas>
  );
}
