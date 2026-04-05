import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect, Suspense, lazy } from 'react';
import { Text, Float, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
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

// Scroll progress hook
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      setProgress(Math.min(scrollY / vh, 1));
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return progress;
};

// Holographic material effect
const HolographicPanel = ({ position, rotation, code, color, delay = 0 }: {
  position: [number, number, number];
  rotation: [number, number, number];
  code: string[];
  color: string;
  delay?: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle holographic flicker
      const flicker = Math.sin(clock.getElapsedTime() * 3 + delay) * 0.02;
      groupRef.current.position.y = position[1] + flicker;
    }
  });

  if (!visible) return null;

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.25}>
      <group ref={groupRef} position={position} rotation={rotation}>
        {/* Holographic glass panel */}
        <mesh>
          <planeGeometry args={[1.9, 1.3]} />
          <meshPhysicalMaterial
            color="#0a0f1e"
            transparent
            opacity={0.7}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Scan line effect */}
        <mesh position={[0, 0, 0.002]}>
          <planeGeometry args={[1.9, 1.3]} />
          <meshBasicMaterial color={color} transparent opacity={0.03} side={THREE.DoubleSide} />
        </mesh>
        {/* Border glow */}
        <mesh position={[0, 0, -0.005]}>
          <planeGeometry args={[1.96, 1.36]} />
          <meshBasicMaterial color={color} transparent opacity={0.12} side={THREE.DoubleSide} />
        </mesh>
        {/* Top bar */}
        <mesh position={[0, 0.58, 0.003]}>
          <planeGeometry args={[1.86, 0.08]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
        {/* Dot indicators */}
        {[-0.82, -0.74, -0.66].map((x, i) => (
          <mesh key={i} position={[x, 0.58, 0.004]}>
            <circleGeometry args={[0.02, 12]} />
            <meshBasicMaterial color={['#ef4444', '#eab308', '#22c55e'][i]} />
          </mesh>
        ))}
        {/* Code lines with stagger */}
        {code.map((line, i) => (
          <Text
            key={i}
            position={[-0.82, 0.42 - i * 0.15, 0.006]}
            fontSize={0.075}
            color={i % 3 === 0 ? '#c084fc' : i % 3 === 1 ? '#38bdf8' : '#34d399'}
            anchorX="left"
            anchorY="middle"
            fillOpacity={0.8}
            
          >
            {line}
          </Text>
        ))}
        {/* Edge glow light */}
        <pointLight position={[0, 0, 0.5]} color={color} intensity={0.8} distance={2.5} />
      </group>
    </Float>
  );
};

// Enhanced laptop with screen glow and shadow casting
const Laptop = ({ mouse, scrollProgress }: { mouse: { x: number; y: number }; scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const targetY = mouse.x * 0.15;
      const targetX = mouse.y * 0.08;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
      // Scroll: float up and fade
      groupRef.current.position.y = -0.3 + scrollProgress * 1.5;
    }
    if (screenGlowRef.current) {
      screenGlowRef.current.intensity = 2.5 + Math.sin(clock.getElapsedTime() * 1.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0.15]} rotation={[-0.1, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.08, 1.6]} />
        <meshPhysicalMaterial color="#111827" metalness={0.9} roughness={0.15} clearcoat={0.5} />
      </mesh>
      {/* Trackpad area */}
      <mesh position={[0, 0.045, 0.5]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.8, 0.005, 0.5]} />
        <meshPhysicalMaterial color="#1f2937" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Keyboard */}
      <mesh position={[0, 0.05, -0.05]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[2.0, 0.01, 1.0]} />
        <meshPhysicalMaterial color="#1e293b" metalness={0.5} roughness={0.4} emissive="#6366f1" emissiveIntensity={0.05} />
      </mesh>
      {/* Screen frame */}
      <mesh position={[0, 1.0, -0.65]} rotation={[0.35, 0, 0]} castShadow>
        <boxGeometry args={[2.4, 1.6, 0.06]} />
        <meshPhysicalMaterial color="#111827" metalness={0.9} roughness={0.15} clearcoat={0.5} />
      </mesh>
      {/* Screen display */}
      <mesh position={[0, 1.0, -0.62]} rotation={[0.35, 0, 0]}>
        <planeGeometry args={[2.15, 1.35]} />
        <meshPhysicalMaterial color="#020617" emissive="#4f46e5" emissiveIntensity={0.2} clearcoat={1} clearcoatRoughness={0} />
      </mesh>
      {/* Code lines on screen */}
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[-0.7 + (i % 4) * 0.08, 1.32 - i * 0.1, -0.595]} rotation={[0.35, 0, 0]}>
          <planeGeometry args={[0.25 + Math.sin(i * 1.7) * 0.35, 0.035]} />
          <meshBasicMaterial
            color={['#818cf8', '#38bdf8', '#34d399', '#f472b6'][i % 4]}
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}
      {/* Camera dot */}
      <mesh position={[0, 1.78, -0.8]} rotation={[0.35, 0, 0]}>
        <circleGeometry args={[0.025, 12]} />
        <meshBasicMaterial color="#22c55e" />
      </mesh>
      {/* Screen glow */}
      <pointLight ref={screenGlowRef} position={[0, 1.0, 0.2]} color="#6366f1" intensity={2.5} distance={5} castShadow />
    </group>
  );
};

// Database cylinder stack
const DatabaseIcon = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.4;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={ref} position={position}>
        {[0, 0.22, 0.44].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} castShadow>
            <cylinderGeometry args={[0.28, 0.28, 0.18, 20]} />
            <meshPhysicalMaterial
              color="#1e1b4b"
              emissive="#7c3aed"
              emissiveIntensity={0.35 + i * 0.1}
              metalness={0.7}
              roughness={0.25}
              transparent
              opacity={0.85}
              clearcoat={0.3}
            />
          </mesh>
        ))}
        <pointLight position={[0, 0.3, 0.5]} color="#a78bfa" intensity={1.2} distance={2.5} />
      </group>
    </Float>
  );
};

// UI component card
const UIComponent = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.35}>
      <group position={position}>
        <mesh castShadow>
          <boxGeometry args={[0.85, 0.55, 0.025]} />
          <meshPhysicalMaterial color="#1e1b4b" emissive="#4f46e5" emissiveIntensity={0.12} metalness={0.6} roughness={0.25} clearcoat={0.5} />
        </mesh>
        {/* Button */}
        <mesh position={[0, -0.1, 0.02]}>
          <boxGeometry args={[0.5, 0.12, 0.02]} />
          <meshPhysicalMaterial color="#6366f1" emissive="#818cf8" emissiveIntensity={0.5} clearcoat={1} />
        </mesh>
        {/* Input */}
        <mesh position={[0, 0.1, 0.02]}>
          <boxGeometry args={[0.6, 0.1, 0.01]} />
          <meshPhysicalMaterial color="#0f172a" emissive="#38bdf8" emissiveIntensity={0.12} />
        </mesh>
        {/* Toggle */}
        <mesh position={[0.25, -0.1, 0.035]}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
      </group>
    </Float>
  );
};

// Particles
const Particles = ({ scrollProgress }: { scrollProgress: number }) => {
  const count = 150;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.015;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.008) * 0.02;
      // Scatter on scroll
      ref.current.position.z = -scrollProgress * 3;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#818cf8" size={0.03} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
};

// Connection lines
const ConnectionLines = () => {
  const ref = useRef<THREE.Group>(null);
  const curves = useMemo(() => [
    { from: [0, -0.3, 0] as [number, number, number], to: [-3.2, 0.5, -1] as [number, number, number] },
    { from: [0, -0.3, 0] as [number, number, number], to: [3.2, 0.8, -1] as [number, number, number] },
    { from: [0, -0.3, 0] as [number, number, number], to: [-2.8, -1.3, -0.5] as [number, number, number] },
    { from: [0, -0.3, 0] as [number, number, number], to: [2.8, -0.9, -0.5] as [number, number, number] },
  ], []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        mat.opacity = 0.06 + Math.sin(clock.getElapsedTime() * 1.2 + i * 1.5) * 0.06;
      });
    }
  });

  return (
    <group ref={ref}>
      {curves.map((p, i) => {
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(...p.from),
          new THREE.Vector3((p.from[0] + p.to[0]) / 2, (p.from[1] + p.to[1]) / 2 + 0.6, (p.from[2] + p.to[2]) / 2),
          new THREE.Vector3(...p.to)
        );
        const geo = new THREE.TubeGeometry(curve, 24, 0.004, 4, false);
        return (
          <mesh key={i} geometry={geo}>
            <meshBasicMaterial color="#818cf8" transparent opacity={0.1} />
          </mesh>
        );
      })}
    </group>
  );
};

// Animated grid floor
const GridFloor = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      mat.opacity = 0.3 + Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  return (
    <>
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color="#0a0a1a" transparent opacity={0.35} />
      </mesh>
      {/* Grid lines */}
      <gridHelper args={[24, 40, '#1e1b4b', '#0f0a2e']} position={[0, -2.19, 0]} />
    </>
  );
};

// Orbiting ring
const OrbitRing = ({ radius, speed, color }: { radius: number; speed: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed;
      ref.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.008, 8, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
};

const Scene = ({ mouse, scrollProgress }: { mouse: { x: number; y: number }; scrollProgress: number }) => {
  return (
    <>
      {/* Lighting with shadows */}
      <ambientLight intensity={0.12} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.4}
        color="#e0e7ff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={20}
        shadow-camera-near={0.1}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />
      <pointLight position={[-4, 3, 2]} color="#7c3aed" intensity={2} distance={10} />
      <pointLight position={[4, 2, 3]} color="#38bdf8" intensity={1.5} distance={8} />
      <pointLight position={[0, -3, 4]} color="#6366f1" intensity={0.8} distance={6} />
      {/* Rim light */}
      <spotLight position={[0, 5, -5]} color="#4f46e5" intensity={3} angle={0.5} penumbra={0.8} distance={15} />

      <Laptop mouse={mouse} scrollProgress={scrollProgress} />

      <HolographicPanel
        position={[-3.2, 0.5, -1]}
        rotation={[0, 0.3, 0]}
        code={['@Component({', '  selector: "course-list",', '  standalone: true,', '})', 'export class CourseList {', '  courses = signal<Course[]>([]);', '  ngOnInit() { this.load(); }']}
        color="#a78bfa"
        delay={500}
      />
      <HolographicPanel
        position={[3.2, 0.8, -1]}
        rotation={[0, -0.3, 0]}
        code={['[ApiController]', '[Route("api/courses")]', 'public class CoursesCtrl', '{', '  [HttpGet]', '  public async Task<IActionResult>', '  GetAll() => Ok(await _repo);']}
        color="#38bdf8"
        delay={800}
      />

      <DatabaseIcon position={[-2.8, -1.3, -0.5]} />
      <UIComponent position={[2.8, -0.9, -0.5]} />

      <ConnectionLines />
      <Particles scrollProgress={scrollProgress} />
      <GridFloor />

      {/* Orbiting rings */}
      <OrbitRing radius={3.5} speed={0.15} color="#6366f1" />
      <OrbitRing radius={4.2} speed={-0.1} color="#7c3aed" />

      {/* Contact shadows */}
      <ContactShadows position={[0, -2.2, 0]} opacity={0.4} scale={12} blur={2.5} far={4} color="#4f46e5" />

      {/* Floating tech labels */}
      {['Angular', 'C#', '.NET 8', 'SQL', 'TypeScript', 'Docker'].map((label, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const r = 4.8;
        return (
          <Float key={label} speed={0.8 + i * 0.15} floatIntensity={0.25}>
            <Text
              position={[Math.cos(angle) * r, Math.sin(angle) * 1.5, -3.5]}
              fontSize={0.2}
              color="#818cf8"
              fillOpacity={0.2 + (i * 0.03)}
              anchorX="center"
            >
              {label}
            </Text>
          </Float>
        );
      })}

      {/* Orbit controls - limited for smooth UX */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
        maxAzimuthAngle={Math.PI / 6}
        minAzimuthAngle={-Math.PI / 6}
        rotateSpeed={0.3}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
};

// Loading fallback for lazy canvas
const CanvasLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
  </div>
);

const DevWorkspace3D = () => {
  const mouse = useMousePosition();
  const scrollProgress = useScrollProgress();
  const [mounted, setMounted] = useState(false);

  // Lazy mount the canvas
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  if (!mounted) return <CanvasLoader />;

  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0.5, 5.5], fov: 52 }}
          dpr={[1, 1.5]}
          shadows
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ opacity: 1 - scrollProgress * 0.6 }}
        >
          <Scene mouse={mouse} scrollProgress={scrollProgress} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default DevWorkspace3D;
