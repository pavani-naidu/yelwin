import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AbstractVisual3DProps {
  mode?: 'nodes' | 'cluster' | 'sphere' | 'rings' | 'development' | 'automation' | 'marketing';
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
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    currentMount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];

    // Shared references for custom animations
    let floatingSphere: THREE.Mesh | null = null;
    let floatingArch: THREE.Mesh | null = null;
    let orbitGroup: THREE.Group | null = null;
    let orbitingDots: THREE.Mesh[] = [];
    let laptopGroup: THREE.Group | null = null;

    if (mode === 'nodes') {
      // AI Neural Node Lattice
      const nodeCount = 35;
      const positions: number[] = [];

      const sphereGeo = new THREE.SphereGeometry(0.06, 12, 12);
      const mat = new THREE.MeshBasicMaterial({ color: 0x333333 });
      geometriesToDispose.push(sphereGeo);
      materialsToDispose.push(mat);

      for (let i = 0; i < nodeCount; i++) {
        const x = (Math.random() - 0.5) * 4.5;
        const y = (Math.random() - 0.5) * 4.5;
        const z = (Math.random() - 0.5) * 3;
        positions.push(x, y, z);

        const mesh = new THREE.Mesh(sphereGeo, mat);
        mesh.position.set(x, y, z);
        group.add(mesh);
      }

      // Connect lines between nearby nodes
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x333333,
        transparent: true,
        opacity: 0.25,
      });
      materialsToDispose.push(lineMat);

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
            geometriesToDispose.push(lineGeo);
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
          color: 0x333333,
          metalness: 0.9,
          roughness: 0.2,
        });
        geometriesToDispose.push(ringGeo);
        materialsToDispose.push(ringMat);
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = i * 0.4;
        ringMesh.rotation.y = i * 0.6;
        group.add(ringMesh);
      }
    } else if (mode === 'development') {
      // 3D LAPTOP & DOME SCULPTURE
      laptopGroup = new THREE.Group();
      group.add(laptopGroup);

      // Matte dark metallic material for laptop body
      const metalMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        roughness: 0.35,
        metalness: 0.8,
      });
      materialsToDispose.push(metalMat);

      // Laptop base board
      const baseGeo = new THREE.BoxGeometry(2.6, 0.06, 1.8);
      const baseMesh = new THREE.Mesh(baseGeo, metalMat);
      baseMesh.position.set(-0.5, -0.6, 0);
      baseMesh.rotation.y = 0.15;
      laptopGroup.add(baseMesh);
      geometriesToDispose.push(baseGeo);

      // Laptop screen lid
      const screenLidGeo = new THREE.BoxGeometry(2.6, 1.7, 0.05);
      const screenLidMesh = new THREE.Mesh(screenLidGeo, metalMat);
      screenLidMesh.position.set(-0.5, 0.25, -0.85);
      screenLidMesh.rotation.set(-0.15, 0.15, 0);
      laptopGroup.add(screenLidMesh);
      geometriesToDispose.push(screenLidGeo);

      // Active screen content (glowing)
      const screenGeo = new THREE.PlaneGeometry(2.5, 1.6);
      const screenMat = new THREE.MeshStandardMaterial({
        color: 0x080808,
        emissive: 0x111111,
        roughness: 0.1,
        metalness: 0.1,
      });
      const screenMesh = new THREE.Mesh(screenGeo, screenMat);
      screenMesh.position.set(-0.5, 0.25, -0.82);
      screenMesh.rotation.set(-0.15, 0.15, 0);
      laptopGroup.add(screenMesh);
      geometriesToDispose.push(screenGeo);
      materialsToDispose.push(screenMat);

      // Dynamic wireframe graph inside the screen to represent coding/growth
      const graphGeo = new THREE.TorusGeometry(0.5, 0.15, 8, 32);
      const graphMat = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true });
      const graphMesh = new THREE.Mesh(graphGeo, graphMat);
      graphMesh.position.set(-0.5, 0.25, -0.8);
      graphMesh.rotation.set(-0.15, 0.15, 0.5);
      laptopGroup.add(graphMesh);
      geometriesToDispose.push(graphGeo);
      materialsToDispose.push(graphMat);

      // DOME SCULPTURE Beside Laptop
      const sculptureMat = new THREE.MeshStandardMaterial({
        color: 0xdddddd,
        roughness: 0.2,
        metalness: 0.9,
      });
      materialsToDispose.push(sculptureMat);

      // Intersecting arches
      const arch1Geo = new THREE.TorusGeometry(0.7, 0.08, 16, 64, Math.PI);
      const arch1 = new THREE.Mesh(arch1Geo, sculptureMat);
      arch1.position.set(1.3, -0.6, 0.4);
      arch1.rotation.set(0, 0.2, 0);
      laptopGroup.add(arch1);
      geometriesToDispose.push(arch1Geo);

      const arch2Geo = new THREE.TorusGeometry(0.7, 0.08, 16, 64, Math.PI);
      const arch2 = new THREE.Mesh(arch2Geo, sculptureMat);
      arch2.position.set(1.3, -0.6, 0.4);
      arch2.rotation.set(0, 0.2 + Math.PI / 2, 0);
      laptopGroup.add(arch2);
      geometriesToDispose.push(arch2Geo);

      // Sculpture Sphere resting on top
      const topSphereGeo = new THREE.SphereGeometry(0.24, 32, 32);
      floatingSphere = new THREE.Mesh(topSphereGeo, sculptureMat);
      floatingSphere.position.set(1.3, 0.2, 0.4);
      laptopGroup.add(floatingSphere);
      geometriesToDispose.push(topSphereGeo);

      // Small secondary sphere resting on floor
      const smallSphereGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const darkSphereMat = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.1,
        metalness: 0.9,
      });
      const smallSphere = new THREE.Mesh(smallSphereGeo, darkSphereMat);
      smallSphere.position.set(1.8, -0.5, 0.8);
      laptopGroup.add(smallSphere);
      geometriesToDispose.push(smallSphereGeo);
      materialsToDispose.push(darkSphereMat);
    } else if (mode === 'automation') {
      // AI GLOSSY BLACK ARCH & LEVITATING SPHERE
      // Pedestal stand
      const pedestalGeo = new THREE.CylinderGeometry(1.6, 1.75, 0.12, 32);
      const pedestalMat = new THREE.MeshStandardMaterial({
        color: 0x1c1c1c,
        roughness: 0.4,
        metalness: 0.6,
      });
      const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
      pedestal.position.y = -1.25;
      group.add(pedestal);
      geometriesToDispose.push(pedestalGeo);
      materialsToDispose.push(pedestalMat);

      // Arch (torus cut in half)
      const glossyBlackMat = new THREE.MeshStandardMaterial({
        color: 0x050505,
        roughness: 0.08,
        metalness: 0.95,
      });
      materialsToDispose.push(glossyBlackMat);

      const archGeo = new THREE.TorusGeometry(1.0, 0.16, 32, 100, Math.PI);
      floatingArch = new THREE.Mesh(archGeo, glossyBlackMat);
      floatingArch.position.set(0, -1.25, 0);
      floatingArch.rotation.x = 0;
      group.add(floatingArch);
      geometriesToDispose.push(archGeo);

      // Floating Glossy Black Central Sphere
      const centerSphereGeo = new THREE.SphereGeometry(0.38, 32, 32);
      floatingSphere = new THREE.Mesh(centerSphereGeo, glossyBlackMat);
      floatingSphere.position.set(0, 0.25, 0);
      group.add(floatingSphere);
      geometriesToDispose.push(centerSphereGeo);

      // Floating points/particles orbiting around
      const pCount = 12;
      const spherePointsGeo = new THREE.SphereGeometry(0.06, 12, 12);
      const pointsMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.2,
        metalness: 0.8,
      });
      geometriesToDispose.push(spherePointsGeo);
      materialsToDispose.push(pointsMat);

      for (let i = 0; i < pCount; i++) {
        const point = new THREE.Mesh(spherePointsGeo, i % 2 === 0 ? pointsMat : pedestalMat);
        // Random layout coordinates
        const radius = 1.3 + Math.random() * 0.8;
        const angle = (i / pCount) * Math.PI * 2;
        point.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 1.8, Math.sin(angle) * radius);
        group.add(point);
        orbitingDots.push(point);
      }
    } else if (mode === 'marketing') {
      // DIGITAL MARKETING ORBITING SYSTEM
      // Glossy black arch base
      const glossyBlackMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.1,
        metalness: 0.9,
      });
      materialsToDispose.push(glossyBlackMat);

      const archGeo = new THREE.TorusGeometry(1.0, 0.16, 32, 100, Math.PI);
      const arch = new THREE.Mesh(archGeo, glossyBlackMat);
      arch.position.set(0, -1.2, 0);
      group.add(arch);
      geometriesToDispose.push(archGeo);

      // Glossy white central sphere
      const whiteSphereGeo = new THREE.SphereGeometry(0.36, 32, 32);
      const whiteSphereMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.15,
        metalness: 0.85,
      });
      floatingSphere = new THREE.Mesh(whiteSphereGeo, whiteSphereMat);
      floatingSphere.position.set(0, 0.2, 0);
      group.add(floatingSphere);
      geometriesToDispose.push(whiteSphereGeo);
      materialsToDispose.push(whiteSphereMat);

      // Orbit Group
      orbitGroup = new THREE.Group();
      orbitGroup.rotation.x = 0.3;
      orbitGroup.rotation.z = -0.15;
      group.add(orbitGroup);

      // Torus rings for orbits
      const orbitRingGeo1 = new THREE.TorusGeometry(1.8, 0.015, 8, 120);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.5 });
      const ring1 = new THREE.Line(orbitRingGeo1, ringMat);
      orbitGroup.add(ring1);
      geometriesToDispose.push(orbitRingGeo1);
      materialsToDispose.push(ringMat);

      const orbitRingGeo2 = new THREE.TorusGeometry(2.3, 0.012, 8, 120);
      const ring2 = new THREE.Line(orbitRingGeo2, ringMat);
      orbitGroup.add(ring2);
      geometriesToDispose.push(orbitRingGeo2);

      // Orbiting spheres
      const dotCount = 4;
      const dotGeo = new THREE.SphereGeometry(0.08, 16, 16);
      geometriesToDispose.push(dotGeo);

      for (let i = 0; i < dotCount; i++) {
        const dot = new THREE.Mesh(dotGeo, i % 2 === 0 ? whiteSphereMat : glossyBlackMat);
        orbitGroup.add(dot);
        orbitingDots.push(dot);
      }
    } else {
      // Sculptural Cube Cluster
      for (let i = 0; i < 12; i++) {
        const boxGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
        const boxMat = new THREE.MeshStandardMaterial({
          color: 0x333333,
          wireframe: i % 2 === 0,
          metalness: 0.8,
          roughness: 0.2,
        });
        geometriesToDispose.push(boxGeo);
        materialsToDispose.push(boxMat);
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
    const amb = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(amb);

    const dir1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dir1.position.set(5, 6, 5);
    scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0xffffff, 1.2);
    dir2.position.set(-5, 4, -4);
    scene.add(dir2);

    const pointLight = new THREE.PointLight(0xffffff, 0.8, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // Mouse tilt interaction parameters
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      // Limit range to prevent massive displacement
      mouse.targetX = x * 0.4;
      mouse.targetY = y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
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
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Base Group rotation based on mouse position (Parallax)
      group.rotation.y = mouse.x;
      group.rotation.x = -mouse.y;

      if (mode === 'nodes') {
        group.rotation.y = elapsedTime * 0.08 + mouse.x;
        group.rotation.x = elapsedTime * 0.04 - mouse.y;
      } else if (mode === 'rings') {
        let childIdx = 0;
        group.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            child.rotation.x = elapsedTime * (0.1 + childIdx * 0.05) + mouse.y * 0.4;
            child.rotation.y = elapsedTime * (0.15 + childIdx * 0.05) + mouse.x * 0.5;
            childIdx++;
          }
        });
      } else if (mode === 'development') {
        // Laptop gentle floating and spin
        if (laptopGroup) {
          laptopGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08;
          laptopGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.08 + mouse.x * 0.3;
        }
        if (floatingSphere) {
          // Floating sphere rotates and bobs
          floatingSphere.position.y = 0.2 + Math.sin(elapsedTime * 2.0) * 0.05;
          floatingSphere.rotation.y = elapsedTime * 0.5;
        }
      } else if (mode === 'automation') {
        if (floatingSphere) {
          // Bobbing main sphere
          floatingSphere.position.y = 0.25 + Math.sin(elapsedTime * 1.5) * 0.12;
          floatingSphere.rotation.y = elapsedTime * 0.3;
          floatingSphere.rotation.x = elapsedTime * 0.15;
        }
        if (floatingArch) {
          floatingArch.rotation.y = Math.sin(elapsedTime * 0.4) * 0.1 + mouse.x * 0.2;
        }
        // Orbiting dots
        orbitingDots.forEach((dot, index) => {
          const speed = 0.3 + (index * 0.05);
          const radius = 1.3 + (index % 3) * 0.2;
          const offsetAngle = (index / orbitingDots.length) * Math.PI * 2;
          const angle = elapsedTime * speed + offsetAngle;
          dot.position.x = Math.cos(angle) * radius;
          dot.position.z = Math.sin(angle) * radius;
          dot.position.y = Math.sin(elapsedTime + index) * 0.5;
        });
      } else if (mode === 'marketing') {
        if (floatingSphere) {
          floatingSphere.position.y = 0.2 + Math.sin(elapsedTime * 1.8) * 0.1;
          floatingSphere.rotation.y = elapsedTime * 0.4;
        }
        if (orbitGroup) {
          orbitGroup.rotation.y = elapsedTime * 0.15 + mouse.x * 0.2;
        }
        // Move spheres along orbit rings
        orbitingDots.forEach((dot, index) => {
          const radius = index < 2 ? 1.8 : 2.3;
          const speed = index < 2 ? 0.4 : -0.25;
          const angle = elapsedTime * speed + (index * Math.PI / 2);
          dot.position.x = Math.cos(angle) * radius;
          dot.position.z = Math.sin(angle) * radius;
          dot.position.y = 0; // Flat along the tilted orbitGroup plane
        });
      } else {
        group.rotation.y = elapsedTime * 0.1 + mouse.x;
        group.rotation.x = elapsedTime * 0.05 - mouse.y;
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());
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
