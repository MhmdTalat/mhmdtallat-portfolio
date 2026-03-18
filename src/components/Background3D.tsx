import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Line, Text } from '@react-three/drei';
import * as THREE from 'three';

const techLabels = [
  'Angular', 'TypeScript', '.NET 8', 'C#', 'SQL Server',
  'REST API', 'RxJS', 'Entity Framework', 'Azure', 'Docker',
  'Git', 'HTML5', 'CSS3', 'Node.js', 'MongoDB', 'Redis'
];

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

  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
      linesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.08) * 0.03;
    }
  });

  return (
    <group ref={linesRef}>
      {radialLines.map((l, i) => (
        <Line key={`radial-${i}`} points={[l.start.toArray(), l.end.toArray()]} color="#06b6d4" transparent opacity={0.2} lineWidth={1} />
      ))}
      {spiralLines.map((l, i) => (
        <Line key={`spiral-${i}`} points={[l.start.toArray(), l.end.toArray()]} color="#22d3ee" transparent opacity={0.15} lineWidth={1} />
      ))}
      {nodes.slice(0, 40).map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

const TechNodes = () => {
  const groupRef = useRef<THREE.Group>(null);

  const techPositions = useMemo(() => {
    return techLabels.map((label, i) => {
      const angle = (i / techLabels.length) * Math.PI * 2;
      const ring = i % 2 === 0 ? 3.2 : 4.2;
      return {
        label,
        position: new THREE.Vector3(
          Math.cos(angle) * ring,
          Math.sin(angle) * ring,
          -1.5 + (Math.random() - 0.5) * 0.5
        ),
      };
    });
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {techPositions.map((tech, i) => (
        <group key={i} position={tech.position}>
          {/* Glowing node sphere */}
          <mesh>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
          </mesh>
          {/* Outer glow ring */}
          <mesh>
            <ringGeometry args={[0.1, 0.14, 16]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
          {/* Tech label */}
          <Text
            position={[0, -0.25, 0]}
            fontSize={0.15}
            color="#22d3ee"
            anchorX="center"
            anchorY="top"
            fillOpacity={0.5}
          >
            {tech.label}
          </Text>
        </group>
      ))}
      {/* Connection lines between adjacent tech nodes */}
      {techPositions.map((tech, i) => {
        const next = techPositions[(i + 1) % techPositions.length];
        return (
          <Line
            key={`conn-${i}`}
            points={[tech.position.toArray(), next.position.toArray()]}
            color="#0891b2"
            transparent
            opacity={0.1}
            lineWidth={0.5}
          />
        );
      })}
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
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshBasicMaterial color="#0891b2" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshBasicMaterial color="#0891b2" transparent opacity={0.4} />
      </mesh>
      {/* Spider eyes - code brackets < > */}
      <Text position={[-0.15, 0.65, 0.25]} fontSize={0.2} color="#22d3ee" fillOpacity={0.7}>{'<'}</Text>
      <Text position={[0.15, 0.65, 0.25]} fontSize={0.2} color="#22d3ee" fillOpacity={0.7}>{'>'}</Text>
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

const FloatingCodeSymbols = () => {
  const groupRef = useRef<THREE.Group>(null);
  const symbols = ['{ }', '< />', '( )', '[ ]', '=> ', '&&', '||', '!=', '++', '::'];

  const symbolData = useMemo(() => {
    return symbols.map((sym, i) => ({
      symbol: sym,
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        -3 + Math.random() * 2,
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const data = symbolData[i];
        if (data) {
          child.position.y = data.position[1] + Math.sin(clock.getElapsedTime() * data.speed + data.offset) * 0.5;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {symbolData.map((data, i) => (
        <Text
          key={i}
          position={data.position}
          fontSize={0.18}
          color="#0891b2"
          fillOpacity={0.2}
          anchorX="center"
          anchorY="middle"
        >
          {data.symbol}
        </Text>
      ))}
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <SpiderWeb />
        <TechNodes />
        <SpiderParticles />
        <CrawlingSpider />
        <FloatingCodeSymbols />
      </Canvas>
    </div>
  );
};

export default Background3D;
