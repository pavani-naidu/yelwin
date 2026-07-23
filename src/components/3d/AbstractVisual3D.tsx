import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AbstractVisual3DProps {
  mode?: 'nodes' | 'cluster' | 'sphere' | 'rings';
  className?: string;
}

export const AbstractVisual3D: React.FC<AbstractVisual3DProps> = ({
  mode = 'nodes',
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check WebGL support
    let isSupported = true;
    try {
      const canvas = document.createElement('canvas');
      isSupported = !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      isSupported = false;
    }

    if (!isSupported) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    if (mode === 'nodes') {
      // AI Neural Node Lattice
      const nodeCount = 35;
      const positions: number[] = [];
      const geometries: THREE.MeshBasicMaterial[] = [];

      for (let i = 0; i < nodeCount; i++) {
        const x = (Math.random() - 0.5) * 4.5;
        const y = (Math.random() - 0.5) * 4.5;
        const z = (Math.random() - 0.5) * 3;
        positions.push(x, y, z);

        const sphereGeo = new THREE.SphereGeometry(0.06, 12, 12);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(sphereGeo, mat);
        mesh.position.set(x, y, z);
        group.add(mesh);
      }

      // Connect lines between nearby nodes
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.25,
      });

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 1.8) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]),
              new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]),
            ]);
            const line = new THREE.Line(lineGeo, lineMat);
            group.add(line);
          }
        }
      }
    } else if (mode === 'rings') {
      // Concentric Gyroscope Rings
      for (let i = 1; i <= 4; i++) {
        const ringGeo = new THREE.TorusGeometry(i * 0.5, 0.02, 16, 64);
        const ringMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.9,
          roughness: 0.2,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = i * 0.4;
        ringMesh.rotation.y = i * 0.6;
        group.add(ringMesh);
      }
    } else {
      // Sculptural Cube Cluster
      for (let i = 0; i < 12; i++) {
        const boxGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
        const boxMat = new THREE.MeshStandardMaterial({
          color: 0xeeeeee,
          wireframe: i % 2 === 0,
          metalness: 0.8,
          roughness: 0.2,
        });
        const box = new THREE.Mesh(boxGeo, boxMat);
        box.position.set(
          (Math.random() - 0.5) * 2.5,
          (Math.random() - 0.5) * 2.5,
          (Math.random() - 0.5) * 2.5
        );
        box.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        group.add(box);
      }
    }

    // Lights
    const amb = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(amb);

    const dir = new THREE.DirectionalLight(0xffffff, 2);
    dir.position.set(5, 5, 5);
    scene.add(dir);

    let animationId: number;
    const animate = () => {
      group.rotation.y += 0.005;
      group.rotation.x += 0.003;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [mode]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[220px] ${className}`}
      aria-hidden="true"
    />
  );
};
