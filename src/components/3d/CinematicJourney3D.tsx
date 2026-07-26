import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CinematicJourney3DProps {
  scrollProgress: number; // 0.0 to 1.0
  className?: string;
}

export const CinematicJourney3D: React.FC<CinematicJourney3DProps> = ({
  scrollProgress,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isLowPower, setIsLowPower] = useState<boolean>(false);

  // Keep a mutable ref of scrollProgress so the animate loop can access the latest value
  const progressRef = useRef(scrollProgress);
  useEffect(() => {
    progressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    // Check reduced motion preference
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

    // --- Scene & Camera Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.045);

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    // Initial camera position outside the door
    camera.position.set(0, 0.3, 0);

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    currentMount.appendChild(renderer.domElement);

    // --- Geometries & Materials Tracking for Cleanup ---
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    const track = <G extends THREE.BufferGeometry, M extends THREE.Material>(
      geom: G,
      mat: M
    ) => {
      geometries.push(geom);
      materials.push(mat);
    };

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.08);
    scene.add(ambientLight);

    // Volumetric Spotlight behind portal
    const portalLight = new THREE.SpotLight(0xffffff, 0, 35, Math.PI / 3, 0.8, 1);
    portalLight.position.set(0, 1.5, -6.5);
    portalLight.castShadow = true;
    portalLight.shadow.mapSize.width = 1024;
    portalLight.shadow.mapSize.height = 1024;
    scene.add(portalLight);

    // Backlight to silhouette character
    const silhouetteLight = new THREE.DirectionalLight(0xffffff, 0.65);
    silhouetteLight.position.set(0, 2.5, -12);
    scene.add(silhouetteLight);

    // --- Floor Grid ---
    const floorGeo = new THREE.PlaneGeometry(100, 100);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.18,
      metalness: 0.95,
    });
    track(floorGeo, floorMat);
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -1.0;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // Grid helper overlay on floor for strict perspective lines
    const gridHelper = new THREE.GridHelper(100, 60, 0x444444, 0x141414);
    gridHelper.position.y = -0.99;
    scene.add(gridHelper);

    // --- Human Silhouette (Programmatic Humanoid Outline) ---
    const charGroup = new THREE.Group();
    charGroup.position.set(0, -0.9, -1.8);
    scene.add(charGroup);

    const silhouetteMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    materials.push(silhouetteMat);

    // Head
    const headGeo = new THREE.SphereGeometry(0.12, 16, 16);
    track(headGeo, silhouetteMat);
    const head = new THREE.Mesh(headGeo, silhouetteMat);
    head.position.y = 1.35;
    charGroup.add(head);

    // Torso
    const torsoGeo = new THREE.CylinderGeometry(0.16, 0.09, 0.65, 16);
    track(torsoGeo, silhouetteMat);
    const torso = new THREE.Mesh(torsoGeo, silhouetteMat);
    torso.position.y = 0.95;
    charGroup.add(torso);

    // Left Leg
    const legGeo = new THREE.CylinderGeometry(0.05, 0.03, 0.6, 16);
    track(legGeo, silhouetteMat);
    const leftLeg = new THREE.Mesh(legGeo, silhouetteMat);
    leftLeg.position.set(-0.08, 0.35, 0);
    charGroup.add(leftLeg);

    // Right Leg
    const rightLeg = new THREE.Mesh(legGeo, silhouetteMat);
    rightLeg.position.set(0.08, 0.35, 0);
    charGroup.add(rightLeg);

    // Left Arm (Dynamic Walking Pose)
    const armGeo = new THREE.CylinderGeometry(0.045, 0.035, 0.55, 16);
    track(armGeo, silhouetteMat);
    const leftArm = new THREE.Mesh(armGeo, silhouetteMat);
    leftArm.position.set(-0.19, 0.95, 0.05);
    leftArm.rotation.x = 0.2; // swing forward
    charGroup.add(leftArm);

    // Right Arm (Dynamic Walking Pose)
    const rightArm = new THREE.Mesh(armGeo, silhouetteMat);
    rightArm.position.set(0.19, 0.95, -0.05);
    rightArm.rotation.x = -0.2; // swing backward
    charGroup.add(rightArm);

    // --- Monumental Portal Doorway ---
    const portalGroup = new THREE.Group();
    portalGroup.position.set(0, 0, -4.5);
    scene.add(portalGroup);

    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x0f0f0f,
      metalness: 0.95,
      roughness: 0.2,
    });

    // Left Door panel
    const doorPanelGeo = new THREE.BoxGeometry(0.9, 4.2, 0.3);
    track(doorPanelGeo, metalMat);
    const leftDoor = new THREE.Mesh(doorPanelGeo, metalMat);
    leftDoor.position.set(-0.46, 1.1, 0);
    leftDoor.castShadow = true;
    portalGroup.add(leftDoor);

    // Right Door panel
    const rightDoor = new THREE.Mesh(doorPanelGeo, metalMat);
    rightDoor.position.set(0.46, 1.1, 0);
    rightDoor.castShadow = true;
    portalGroup.add(rightDoor);

    // Portal Frame Left
    const frameGeoSide = new THREE.BoxGeometry(0.4, 4.2, 0.5);
    track(frameGeoSide, metalMat);
    const leftFrame = new THREE.Mesh(frameGeoSide, metalMat);
    leftFrame.position.set(-1.1, 1.1, 0.05);
    portalGroup.add(leftFrame);

    // Portal Frame Right
    const rightFrame = new THREE.Mesh(frameGeoSide, metalMat);
    rightFrame.position.set(1.1, 1.1, 0.05);
    portalGroup.add(rightFrame);

    // Portal Frame Top
    const frameGeoTop = new THREE.BoxGeometry(2.6, 0.4, 0.5);
    track(frameGeoTop, metalMat);
    const topFrame = new THREE.Mesh(frameGeoTop, metalMat);
    topFrame.position.set(0, 3.2, 0.05);
    portalGroup.add(topFrame);

    // --- High-End Doorway Detail 1: Split circle lock ---
    const lockMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    materials.push(lockMat);

    const leftLockGeo = new THREE.RingGeometry(0.3, 0.34, 32, 1, Math.PI / 2, Math.PI);
    track(leftLockGeo, lockMat);
    const leftLock = new THREE.Mesh(leftLockGeo, lockMat);
    leftLock.position.set(0.45, 1.1, 0.16); // Flush on front of leftDoor
    leftDoor.add(leftLock);

    const rightLockGeo = new THREE.RingGeometry(0.3, 0.34, 32, 1, -Math.PI / 2, Math.PI);
    track(rightLockGeo, lockMat);
    const rightLock = new THREE.Mesh(rightLockGeo, lockMat);
    rightLock.position.set(-0.45, 1.1, 0.16); // Flush on front of rightDoor
    rightDoor.add(rightLock);

    // --- High-End Doorway Detail 2: Monolithic Horizontal Grooves ---
    const grooveMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      metalness: 0.98,
      roughness: 0.1,
    });
    materials.push(grooveMat);

    const grooveGeo = new THREE.BoxGeometry(0.8, 0.04, 0.04);
    track(grooveGeo, grooveMat);

    for (let i = 0; i < 5; i++) {
      const leftG = new THREE.Mesh(grooveGeo, grooveMat);
      leftG.position.set(0, -0.6 + i * 0.5, 0.15);
      leftDoor.add(leftG);

      const rightG = new THREE.Mesh(grooveGeo, grooveMat);
      rightG.position.set(0, -0.6 + i * 0.5, 0.15);
      rightDoor.add(rightG);
    }

    // --- High-End Doorway Detail 3: Glowing Portal Frame Light Borders ---
    const neonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    materials.push(neonMat);

    const neonLeftGeo = new THREE.BoxGeometry(0.03, 3.8, 0.02);
    track(neonLeftGeo, neonMat);
    const neonLeft = new THREE.Mesh(neonLeftGeo, neonMat);
    neonLeft.position.set(-0.83, 1.1, 0.08);
    portalGroup.add(neonLeft);

    const neonRight = new THREE.Mesh(neonLeftGeo, neonMat);
    neonRight.position.set(0.83, 1.1, 0.08);
    portalGroup.add(neonRight);

    const neonTopGeo = new THREE.BoxGeometry(1.69, 0.03, 0.02);
    track(neonTopGeo, neonMat);
    const neonTop = new THREE.Mesh(neonTopGeo, neonMat);
    neonTop.position.set(0, 3.0, 0.08);
    portalGroup.add(neonTop);

    // Bright glowing portal plane (revealed when door opens)
    const glowPlaneGeo = new THREE.PlaneGeometry(1.65, 3.8);
    const glowPlaneMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    track(glowPlaneGeo, glowPlaneMat);
    const glowPlane = new THREE.Mesh(glowPlaneGeo, glowPlaneMat);
    glowPlane.position.set(0, 1.1, -0.05);
    portalGroup.add(glowPlane);

    // --- Volumetric Light Tunnel Rings behind portal ---
    const tunnelGroup = new THREE.Group();
    tunnelGroup.position.set(0, 1.1, -4.6);
    scene.add(tunnelGroup);

    const ringGlowMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    materials.push(ringGlowMat);

    for (let i = 0; i < 12; i++) {
      const ringGeo = new THREE.RingGeometry(0.82 + i * 0.18, 0.84 + i * 0.18, 32);
      track(ringGeo, ringGlowMat);
      const ringMesh = new THREE.Mesh(ringGeo, ringGlowMat);
      ringMesh.position.z = -i * 0.95;
      tunnelGroup.add(ringMesh);
    }

    // --- Stage 1: Build (Floating Screens & Laptop Shape) ---
    const buildGroup = new THREE.Group();
    buildGroup.position.set(0, 0, -12);
    scene.add(buildGroup);

    const screenOutlineMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
    });
    materials.push(screenOutlineMat);

    const screenFillMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      transparent: true,
      opacity: 0,
    });
    materials.push(screenFillMat);

    // Floating panels
    for (let i = 0; i < 5; i++) {
      const w = 1.8 + Math.random() * 0.8;
      const h = 1.1 + Math.random() * 0.5;
      const planeGeo = new THREE.PlaneGeometry(w, h);
      const wireGeo = new THREE.EdgesGeometry(planeGeo);
      track(planeGeo, screenFillMat);
      geometries.push(wireGeo);

      const panel = new THREE.Mesh(planeGeo, screenFillMat);
      const wire = new THREE.LineSegments(wireGeo, screenOutlineMat);
      panel.add(wire);

      panel.position.set(
        (Math.random() - 0.5) * 6.5,
        (Math.random() - 0.3) * 2.8 + 0.5,
        (Math.random() - 0.5) * 5.0
      );
      panel.rotation.set(
        (Math.random() - 0.5) * 0.25,
        (Math.random() - 0.5) * 0.45,
        0
      );
      buildGroup.add(panel);
    }

    // --- Stage 2: Automate (Connected Neural Lattice & Gyro Rings) ---
    const autoGroup = new THREE.Group();
    autoGroup.position.set(0, 0, -21);
    scene.add(autoGroup);

    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
    });
    materials.push(nodeMat);

    const connMat = new THREE.LineBasicMaterial({
      color: 0x666666,
      transparent: true,
      opacity: 0,
    });
    materials.push(connMat);

    // Nodes placement
    const nodeCount = 16;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.06, 8, 8);
    track(nodeGeo, nodeMat);

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.4) * 2.2 + 0.5,
        (Math.random() - 0.5) * 3.5
      );
      nodePositions.push(pos);

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      autoGroup.add(nodeMesh);
    }

    // Node connections
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 1.75) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j],
          ]);
          geometries.push(lineGeo);
          const line = new THREE.Line(lineGeo, connMat);
          autoGroup.add(line);
        }
      }
    }

    // Gyroscope ring
    const ringGeo = new THREE.TorusGeometry(1.0, 0.02, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      transparent: true,
      opacity: 0,
    });
    track(ringGeo, ringMat);
    const gyroRing = new THREE.Mesh(ringGeo, ringMat);
    gyroRing.position.set(0, 1.0, 0);
    autoGroup.add(gyroRing);

    // --- Stage 3: Grow (Ascending Glass Staircase) ---
    const growGroup = new THREE.Group();
    growGroup.position.set(0, 0, -32);
    scene.add(growGroup);

    const stepMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0,
    });
    materials.push(stepMat);

    const stepOutlineMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
    });
    materials.push(stepOutlineMat);

    const stepsCount = 7;
    const stepMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < stepsCount; i++) {
      const stepGeo = new THREE.BoxGeometry(2.0, 0.08, 0.8);
      const wireGeo = new THREE.EdgesGeometry(stepGeo);
      track(stepGeo, stepMat);
      geometries.push(wireGeo);

      const step = new THREE.Mesh(stepGeo, stepMat);
      const outline = new THREE.LineSegments(wireGeo, stepOutlineMat);
      step.add(outline);

      // Distribute steps forward and upward
      step.position.set(0, -0.9 + i * 0.35, -i * 1.1);
      growGroup.add(step);
      stepMeshes.push(step);
    }

    // --- Stage 4: Destination Monolith ---
    const destGroup = new THREE.Group();
    destGroup.position.set(0, 0, -48);
    scene.add(destGroup);

    // Monolith blocks
    const monolithCount = 4;
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x0e0e0e,
      roughness: 0.2,
      metalness: 0.9,
    });
    const monoWireMat = new THREE.LineBasicMaterial({ color: 0x666666 });
    materials.push(monolithMat);
    materials.push(monoWireMat);

    for (let i = 0; i < monolithCount; i++) {
      const h = 4.0 + i * 2.0;
      const w = 0.8 - i * 0.15;
      const d = 0.5;
      const boxGeo = new THREE.BoxGeometry(w, h, d);
      const wireGeo = new THREE.EdgesGeometry(boxGeo);
      track(boxGeo, monolithMat);
      geometries.push(wireGeo);

      const mono = new THREE.Mesh(boxGeo, monolithMat);
      const outline = new THREE.LineSegments(wireGeo, monoWireMat);
      mono.add(outline);

      mono.position.set((i - 1.5) * 0.9, h / 2 - 1.0, 0);
      destGroup.add(mono);
    }

    // --- Floating Dust Particles ---
    const particleCount = 140;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.3) * 6;
      particlePositions[i + 2] = -Math.random() * 50;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.025,
      transparent: true,
      opacity: 0.45,
    });
    track(particlesGeo, particleMat);
    const particleSystem = new THREE.Points(particlesGeo, particleMat);
    scene.add(particleSystem);

    // --- Mouse Easing Matrix ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.15;
      mouse.targetY = y * 0.15;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Resize Handler ---
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- Animation & Physics Interpolation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const progress = progressRef.current;

      // Mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Camera Positioning based on Scroll progress
      // Camera Z moves from 0 to -44
      const targetZ = -progress * 44;
      camera.position.z += (targetZ - camera.position.z) * 0.1;

      // Camera Y tracks character and climbs during stage 3 (grow)
      let targetY = 0.3;
      if (progress >= 0.55 && progress < 0.8) {
        // Linearly climb as camera moves through grow steps
        const factor = (progress - 0.55) / 0.25;
        targetY = 0.3 + factor * 1.5;
      } else if (progress >= 0.8) {
        targetY = 1.8;
      }
      camera.position.y += (targetY - camera.position.y) * 0.1;

      // Camera mouse parallax rotation
      camera.rotation.y = mouse.x * -0.5;
      camera.rotation.x = mouse.y * 0.4;

      // 2. Door portal opening animation (0.0 to 0.20 progress)
      if (progress < 0.25) {
        const factor = Math.min(progress / 0.20, 1.0);
        leftDoor.position.x = -0.46 - factor * 1.35;
        rightDoor.position.x = 0.46 + factor * 1.35;

        // Volumetric light beam gets stronger
        portalLight.intensity = factor * 22;
        glowPlaneMat.opacity = factor * 0.95;
      } else {
        // Completely open and hide
        leftDoor.position.x = -1.8;
        rightDoor.position.x = 1.8;
        portalLight.intensity = 22;
        glowPlaneMat.opacity = 0.95;
      }

      // Animate volumetric light tunnel rings (0.08 to 0.35 progress)
      if (progress >= 0.08 && progress < 0.35) {
        const factor = Math.sin(((progress - 0.08) / 0.27) * Math.PI);
        ringGlowMat.opacity = factor * 0.25;
      } else {
        ringGlowMat.opacity = 0;
      }

      // 3. Stage 1: Build floating screens opacity (0.12 to 0.45 progress)
      if (progress >= 0.12 && progress < 0.45) {
        const factor = Math.sin(((progress - 0.12) / 0.33) * Math.PI);
        screenOutlineMat.opacity = factor * 0.65;
        screenFillMat.opacity = factor * 0.35;
        // Float screens slightly
        buildGroup.children.forEach((child, i) => {
          child.position.y += Math.sin(elapsed + i) * 0.002;
        });
      } else {
        screenOutlineMat.opacity = 0;
        screenFillMat.opacity = 0;
      }

      // 4. Stage 2: Automate nodes opacity (0.38 to 0.70 progress)
      if (progress >= 0.38 && progress < 0.70) {
        const factor = Math.sin(((progress - 0.38) / 0.32) * Math.PI);
        nodeMat.opacity = factor * 0.85;
        connMat.opacity = factor * 0.4;
        ringMat.opacity = factor * 0.7;

        // Rotate neural system
        autoGroup.rotation.y = elapsed * 0.08;
        gyroRing.rotation.x = elapsed * 0.15;
        gyroRing.rotation.y = elapsed * 0.22;
      } else {
        nodeMat.opacity = 0;
        connMat.opacity = 0;
        ringMat.opacity = 0;
      }

      // 5. Stage 3: Grow steps opacity (0.55 to 0.88 progress)
      if (progress >= 0.55 && progress < 0.88) {
        const factor = Math.sin(((progress - 0.55) / 0.33) * Math.PI);
        stepMat.opacity = factor * 0.45;
        stepOutlineMat.opacity = factor * 0.8;
      } else {
        stepMat.opacity = 0;
        stepOutlineMat.opacity = 0;
      }

      // 6. Slowly animate dust particles
      particleSystem.rotation.y = elapsed * 0.015;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      // Clean up geometries
      geometries.forEach((g) => g.dispose());
      // Clean up materials
      materials.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, [isLowPower]);

  if (!hasWebGL) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-black ${className}`}>
        <div className="text-center space-y-2 px-6">
          <div className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest animate-pulse">
            WebGL Initialization Deferred
          </div>
          <div className="w-16 h-16 border border-neutral-800 rounded-full mx-auto flex items-center justify-center">
            <div className="w-8 h-8 border border-white rounded-full animate-ping" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      aria-label="Cinematic 3D Scroll Journey"
    />
  );
};
