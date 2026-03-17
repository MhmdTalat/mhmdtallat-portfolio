import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

const SpiderWeb = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  const { nodes, radialLines, spiralLines } = useMemo(() => {
    const nodePositions: THREE.Vector3[] = [];
    const radial: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    const spiral: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    
    const center = new THREE.Vector3(0, 0, -2);
    nodePositions.push(center);
    
    const numRadials = 16;
    const numRings = 6;
    const maxRadius = 5;

    // Create radial lines from center
    for (let r = 0; r < numRadials; r++) {
      const angle = (r / numRadials) * Math.PI * 2;
      const endPoint = new THREE.Vector3(
        Math.cos(angle) * maxRadius,
        Math.sin(angle) * maxRadius,
        -2 + (Math.random() - 0.5) * 0.5
      );
      radial.push({ start: center.clone(), end: endPoint });
      nodePositions.push(endPoint);
    }

    // Create spiral/ring connections
    for (let ring = 1; ring <= numRings; ring++) {
      const radius = (ring / numRings) * maxRadius;
      const wobble = ring * 0.08;
      for (let r = 0; r < numRadials; r++) {
        const angle1 = (r / numRadials) * Math.PI * 2;
        const angle2 = ((r + 1) / numRadials) * Math.PI * 2;
        const sag1 = Math.sin((angle1 + angle2) / 2) * wobble;
        const sag2 = Math.sin((angle2 + angle1) / 2) * wobble;
        const p1 = new THREE.Vector3(
          Math.cos(angle1) * radius,
          Math.sin(angle1) * radius,
          -2 + sag1
        );
        const p2 = new THREE.Vector3(
          Math.cos(angle2) * radius,
          Math.sin(angle2) * radius,
          -2 + sag2
        );
        spiral.push({ start: p1, end: p2 });
        nodePositions.push(p1);
      }
    }

    return { nodes: nodePositions, radialLines: radial, spiralLines: spiral };
  }, []);

  const radialGeometries = useMemo(() => {
    return radialLines.map(line => {
      const points = [line.start, line.end];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      return geo;
    });
  }, [radialLines]);

  const spiralGeometries = useMemo(() => {
    return spiralLines.map(line => {
      const points = [line.start, line.end];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      return geo;
    });
  }, [spiralLines]);

  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
      linesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.08) * 0.03;
    }
  });

  return (
    <group ref={linesRef}>
      {radialGeometries.map((geo, i) => (
        <line key={`radial-${i}`} geometry={geo}>
          <lineBasicMaterial color="#06b6d4" transparent opacity={0.2} />
        </line>
      ))}
      {spiralGeometries.map((geo, i) => (
        <line key={`spiral-${i}`} geometry={geo}>
          <lineBasicMaterial color="#22d3ee" transparent opacity={0.15} />
        </line>
      ))}
      {/* Glow nodes at intersections */}
      {nodes.slice(0, 40).map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

const SpiderParticles = () => {
  const count = 80;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 7;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.015;
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
      <pointsMaterial color="#06b6d4" size={0.03} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
};

const CrawlingSpider = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * 0.3;
      const radius = 2.5;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t) * radius;
      ref.current.position.z = -1.8;
      ref.current.rotation.z = t + Math.PI / 2;
    }
  });

  return (
    <group ref={ref} scale={0.12}>
      {/* Spider body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshBasicMaterial color="#0891b2" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshBasicMaterial color="#0891b2" transparent opacity={0.4} />
      </mesh>
      {/* Legs */}
      {[...Array(8)].map((_, i) => {
        const side = i < 4 ? 1 : -1;
        const idx = i % 4;
        const angles = [-0.4, -0.15, 0.15, 0.4];
        const angle = angles[idx];
        return (
          <mesh key={i} position={[side * 0.8, angle * 2, 0]} rotation={[0, 0, side * 0.8 + angle]}>
            <cylinderGeometry args={[0.03, 0.02, 1.2, 4]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.35} />
          </mesh>
        );
      })}
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <SpiderWeb />
        <SpiderParticles />
        <CrawlingSpider />
      </Canvas>
    </div>
  );
};

export default Background3D;
