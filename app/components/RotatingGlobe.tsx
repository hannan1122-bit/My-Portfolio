"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

function Globe() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, "/textures/earth_texture.jpg");

  const [size, setSize] = useState(5); 
  const [positionY, setPositionY] = useState(0); 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSize(3);
        setPositionY(0);
      } else if (width < 1024) {
        setSize(4);
        setPositionY(0.5);
      } else {
        setSize(5);
        setPositionY(0.8); // slightly lower for big screens
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((_, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.1; // slightly faster
      sphereRef.current.rotation.x += delta * 0.002;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, positionY, 0]}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.5}
        roughness={0.4}
        emissive={new THREE.Color(0x000000)}
        emissiveIntensity={0}
      />
    </mesh>
  );
}

export default function RotatingGlobe() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 15, 10], fov: 45 }}> {/* camera moved back */}
        <ambientLight intensity={0.8} color={0xffffff} />
        <directionalLight position={[10, 10, 10]} intensity={1.0} color={0xffffff} />
        <directionalLight position={[-10, 10, 10]} intensity={0.8} color={0xffffff} />
        <directionalLight position={[10, -10, 10]} intensity={0.8} color={0xffffff} />
        <directionalLight position={[-10, -10, -10]} intensity={0.7} color={0xffffff} />
        <directionalLight position={[0, 5, -10]} intensity={0.6} color={0xffffff} />

        <Globe />
      </Canvas>
    </div>
  );
}
