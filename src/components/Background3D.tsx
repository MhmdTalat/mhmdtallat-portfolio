import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const FloatingIcosahedron = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.15;
      ref.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={ref} position={[-3.5, 1.5, -2]} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#06b6d4"
          transparent
          opacity={0.15}
          distort={0.4}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.1;
      ref.current.rotation.z = clock.getElapsedTime() * 0.15;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={[3.5, -1, -3]} scale={0.9}>
        <torusGeometry args={[1, 0.3, 16, 50]} />
        <MeshWobbleMaterial
          color="#0891b2"
          transparent
          opacity={0.12}
          factor={0.3}
          speed={1.5}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.25;
      ref.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={2}>
      <mesh ref={ref} position={[0, 2.5, -4]} scale={0.7}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#22d3ee"
          transparent
          opacity={0.1}
          distort={0.25}
          speed={3}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#06b6d4" size={0.02} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.2} />
        <FloatingIcosahedron />
        <FloatingTorus />
        <FloatingOctahedron />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Background3D;
