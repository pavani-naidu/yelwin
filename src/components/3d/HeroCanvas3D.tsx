import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroCanvas3DProps {
  className?: string;
}

export const HeroCanvas3D: React.FC<HeroCanvas3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isLowPower, setIsLowPower] = useState<boolean>(false);

  useEffect(() => {
    // Check WebGL availability & reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsLowPower(true);
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.035);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    currentMount.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Matte Dark Satin Finish Material
    const sculptureMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.25,
      metalness: 0.85,
    });

    const highlightMaterial = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.15,
      metalness: 0.95,
    });

    // 1. Upper Floating Torus Ring
    const torusRingGeo = new THREE.TorusGeometry(1.25, 0.38, 32, 100);
    const torusRingMesh = new THREE.Mesh(torusRingGeo, sculptureMaterial);
    torusRingMesh.position.set(0, 1.45, 0);
    torusRingMesh.rotation.x = Math.PI / 18;
    group.add(torusRingMesh);

    // 2. Lower Sweeping Base Arch Bridge
    const archGeo = new THREE.TorusGeometry(2.3, 0.45, 32, 100, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, sculptureMaterial);
    archMesh.position.set(0, -1.0, 0);
    archMesh.rotation.z = 0;
    group.add(archMesh);

    // 3. Inner Secondary Accent Arch
    const innerArchGeo = new THREE.TorusGeometry(1.55, 0.28, 32, 100, Math.PI);
    const innerArchMesh = new THREE.Mesh(innerArchGeo, highlightMaterial);
    innerArchMesh.position.set(0, -1.0, 0.15);
    group.add(innerArchMesh);

    // 4. Reflective Matte Floor Surface
    const floorGeo = new THREE.PlaneGeometry(24, 24);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x080808,
      roughness: 0.4,
      metalness: 0.8,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -2.3;
    scene.add(floorMesh);

    // Floating Geometric Particles
    const particleCount = 180;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particlesGeo, particleMat);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.8);
    rimLight.position.set(-5, -5, -3);
    scene.add(rimLight);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.8;
      mouse.targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!isLowPower) {
        group.rotation.x = elapsedTime * 0.15 + mouse.y * 0.3;
        group.rotation.y = elapsedTime * 0.25 + mouse.x * 0.4;
        particleSystem.rotation.y = elapsedTime * 0.05;
      } else {
        group.rotation.x = 0.2 + mouse.y * 0.1;
        group.rotation.y = 0.4 + mouse.x * 0.1;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      torusRingGeo.dispose();
      archGeo.dispose();
      innerArchGeo.dispose();
      floorGeo.dispose();
      sculptureMaterial.dispose();
      highlightMaterial.dispose();
      floorMat.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [isLowPower]);

  if (!hasWebGL) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
        {/* CSS/SVG Abstract Monochrome Fallback */}
        <div className="w-72 h-72 rounded-full border border-neutral-700/60 p-6 flex items-center justify-center animate-pulse">
          <div className="w-full h-full rounded-full border border-neutral-500/80 p-6 flex items-center justify-center rotate-45">
            <div className="w-full h-full border-2 border-white/90 transform rotate-45" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[380px] overflow-hidden ${className}`}
      aria-label="Interactive 3D Abstract Visual"
    />
  );
};
