import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Text, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Mouse tracker
const useMousePosition = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return mouse;
};

// Laptop model built from primitives
const Laptop = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (groupRef.current) {
      targetRotation.current.y = mouse.x * 0.15;
      targetRotation.current.x = mouse.y * 0.08;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* Base / keyboard */}
      <mesh position={[0, 0, 0.15]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[2.4, 0.08, 1.6]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Keyboard keys hint */}
      <mesh position={[0, 0.05, 0.15]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[2.0, 0.01, 1.2]} />
        <meshStandardMaterial color="#16213e" metalness={0.5} roughness={0.4} emissive="#1e3a5f" emissiveIntensity={0.1} />
      </mesh>
      {/* Screen frame */}
      <mesh position={[0, 1.0, -0.65]} rotation={[0.35, 0, 0]}>
        <boxGeometry args={[2.4, 1.6, 0.06]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen display */}
      <mesh position={[0, 1.0, -0.62]} rotation={[0.35, 0, 0]}>
        <planeGeometry args={[2.15, 1.35]} />
        <meshStandardMaterial color="#0a0a1a" emissive="#2563eb" emissiveIntensity={0.15} />
      </mesh>
      {/* Screen code lines */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[-0.65 + (i % 3) * 0.15, 1.25 - i * 0.12, -0.59]} rotation={[0.35, 0, 0]}>
          <planeGeometry args={[0.3 + Math.random() * 0.6, 0.04]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#818cf8' : i % 3 === 1 ? '#38bdf8' : '#34d399'} transparent opacity={0.6} />
        </mesh>
      ))}
      {/* Screen glow */}
      <pointLight position={[0, 1.0, -0.3]} color="#6366f1" intensity={2} distance={4} />
    </group>
  );
};

// Floating code snippet panels
const FloatingCodePanel = ({ position, rotation, code, color }: {
  position: [number, number, number];
  rotation: [number, number, number];
  code: string[];
  color: string;
}) => {
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group position={position} rotation={rotation}>
        {/* Panel background */}
        <mesh>
          <planeGeometry args={[1.8, 1.2]} />
          <meshStandardMaterial color="#0f172a" transparent opacity={0.85} side={THREE.DoubleSide} />
        </mesh>
        {/* Border glow */}
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[1.86, 1.26]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} side={THREE.DoubleSide} />
        </mesh>
        {/* Code lines */}
        {code.map((line, i) => (
          <Text
            key={i}
            position={[-0.78, 0.45 - i * 0.16, 0.01]}
            fontSize={0.08}
            color={i % 2 === 0 ? '#818cf8' : '#38bdf8'}
            anchorX="left"
            anchorY="middle"
            fillOpacity={0.7}
          >
            {line}
          </Text>
        ))}
      </group>
    </Float>
  );
};

// Database icon
const DatabaseIcon = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={ref} position={position}>
        {/* Cylinder stack for DB */}
        {[0, 0.25, 0.5].map((y, i) => (
          <mesh key={i} position={[0, y, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
            <meshStandardMaterial
              color="#1e1b4b"
              emissive="#6366f1"
              emissiveIntensity={0.3}
              metalness={0.6}
              roughness={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
        <pointLight position={[0, 0.3, 0.5]} color="#818cf8" intensity={1} distance={2} />
      </group>
    </Float>
  );
};

// UI component floating card
const UIComponent = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group position={position}>
        {/* Card background */}
        <mesh>
          <boxGeometry args={[0.8, 0.5, 0.02]} />
          <meshStandardMaterial color="#1e1b4b" emissive="#4f46e5" emissiveIntensity={0.1} metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Button element */}
        <mesh position={[0, -0.1, 0.02]}>
          <boxGeometry args={[0.5, 0.12, 0.02]} />
          <meshStandardMaterial color="#6366f1" emissive="#818cf8" emissiveIntensity={0.4} />
        </mesh>
        {/* Input element */}
        <mesh position={[0, 0.1, 0.02]}>
          <boxGeometry args={[0.6, 0.1, 0.01]} />
          <meshStandardMaterial color="#0f172a" emissive="#38bdf8" emissiveIntensity={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

// Floating particles
const Particles = () => {
  const count = 120;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#6366f1" size={0.025} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

// Connection lines between elements
const ConnectionLines = () => {
  const ref = useRef<THREE.Group>(null);
  const points = useMemo(() => [
    { from: [0, -0.3, 0], to: [-3, 0.5, -1] },
    { from: [0, -0.3, 0], to: [3, 0.8, -1] },
    { from: [0, -0.3, 0], to: [-2.5, -1.2, -0.5] },
    { from: [0, -0.3, 0], to: [2.5, -0.8, -0.5] },
  ] as { from: [number, number, number]; to: [number, number, number] }[], []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.08 + Math.sin(clock.getElapsedTime() * 0.8 + i) * 0.06;
      });
    }
  });

  return (
    <group ref={ref}>
      {points.map((p, i) => {
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(...p.from),
          new THREE.Vector3(
            (p.from[0] + p.to[0]) / 2,
            (p.from[1] + p.to[1]) / 2 + 0.5,
            (p.from[2] + p.to[2]) / 2
          ),
          new THREE.Vector3(...p.to)
        );
        const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.005, 4, false);
        return (
          <mesh key={i} geometry={tubeGeometry}>
            <meshBasicMaterial color="#818cf8" transparent opacity={0.12} />
          </mesh>
        );
      })}
    </group>
  );
};

// Grid floor
const GridFloor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#0a0a1a" transparent opacity={0.5} />
    </mesh>
  );
};

const Scene = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 0.2 + 0.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#e0e7ff" />
      <pointLight position={[-3, 2, 2]} color="#6366f1" intensity={1.5} distance={8} />
      <pointLight position={[3, 2, 2]} color="#38bdf8" intensity={1} distance={6} />
      <pointLight position={[0, -2, 3]} color="#818cf8" intensity={0.5} distance={5} />

      <Laptop mouse={mouse} />

      <FloatingCodePanel
        position={[-3, 0.5, -1]}
        rotation={[0, 0.3, 0]}
        code={['@Component({', '  selector: "app-root",', '  template: `<div>`,', '})', 'export class AppRoot {', '  data = signal([]);', '}']}
        color="#818cf8"
      />
      <FloatingCodePanel
        position={[3, 0.8, -1]}
        rotation={[0, -0.3, 0]}
        code={['[HttpGet]', 'public async Task<>', '  GetAll()', '{', '  return await _repo', '    .GetAllAsync();', '}']}
        color="#38bdf8"
      />

      <DatabaseIcon position={[-2.5, -1.2, -0.5]} />
      <UIComponent position={[2.5, -0.8, -0.5]} />

      <ConnectionLines />
      <Particles />
      <GridFloor />

      {/* Floating tech labels */}
      {['Angular', 'C#', '.NET 8', 'SQL', 'TypeScript', 'Docker'].map((label, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const r = 4.5;
        return (
          <Float key={label} speed={1 + i * 0.2} floatIntensity={0.3}>
            <Text
              position={[Math.cos(angle) * r, Math.sin(angle) * 1.5, -3]}
              fontSize={0.18}
              color="#6366f1"
              fillOpacity={0.25}
              anchorX="center"
            >
              {label}
            </Text>
          </Float>
        );
      })}
    </>
  );
};

const DevWorkspace3D = () => {
  const mouse = useMousePosition();

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0.5, 5], fov: 55 }} dpr={[1, 1.5]}>
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default DevWorkspace3D;
