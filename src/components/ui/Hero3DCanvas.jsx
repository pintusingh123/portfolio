import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 19;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group to hold all 3D objects for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Primary 3D Torus Knot Geometry (Cyber Core)
    const torusKnotGeo = new THREE.TorusKnotGeometry(5.2, 1.4, 120, 16);
    const wireframeGeo = new THREE.WireframeGeometry(torusKnotGeo);

    const torusMaterial = new THREE.LineBasicMaterial({
      color: 0x4cd7f6,
      transparent: true,
      opacity: 0.55,
      linewidth: 1.5,
    });
    const torusMesh = new THREE.LineSegments(wireframeGeo, torusMaterial);
    mainGroup.add(torusMesh);

    // 3. Inner Glowing Core Sphere
    const innerGeo = new THREE.IcosahedronGeometry(3.2, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xc0c1ff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 4. Orbiting Glowing Cyber Ring
    const ringGeo = new THREE.TorusGeometry(8.5, 0.12, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffafd3,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // 5. Multi-colored Floating 3D Particle Field
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x4cd7f6), // Cyan
      new THREE.Color(0xc0c1ff), // Lavender
      new THREE.Color(0xffafd3), // Neon Pink
      new THREE.Color(0x8083ff), // Deep Violet
    ];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particleColors[i * 3] = randomColor.r;
      particleColors[i * 3 + 1] = randomColor.g;
      particleColors[i * 3 + 2] = randomColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    // Particle Texture Generator
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(76, 215, 246, 0.8)");
      gradient.addColorStop(0.7, "rgba(192, 193, 255, 0.3)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Mouse Pointer Tracking
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const onPointerMove = (event) => {
      targetX = (event.clientX - windowHalfX) * 0.001;
      targetY = (event.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener("pointermove", onPointerMove);

    // Window Resize Handler
    const onWindowResize = () => {
      if (!currentMount) return;
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // 7. Animation Loop with Real-time HSL Dynamic Color Shifting
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotation Animations
      mainGroup.rotation.y = elapsedTime * 0.18;
      mainGroup.rotation.x = elapsedTime * 0.1;
      innerMesh.rotation.y = -elapsedTime * 0.3;
      ringMesh.rotation.z = elapsedTime * 0.25;
      ringMesh.rotation.y = elapsedTime * 0.15;
      particles.rotation.y = elapsedTime * 0.04;

      // Real-time Dynamic HSL Color Shift for vibrant visual feel
      const hue1 = (elapsedTime * 0.06) % 1;
      const hue2 = (hue1 + 0.33) % 1;
      const hue3 = (hue1 + 0.66) % 1;

      torusMaterial.color.setHSL(hue1, 0.85, 0.62);
      innerMat.color.setHSL(hue2, 0.9, 0.68);
      ringMat.color.setHSL(hue3, 0.95, 0.7);

      // Smooth inertia mouse tracking
      mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.06;
      mainGroup.rotation.x += (targetY - mainGroup.rotation.x) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onWindowResize);
      cancelAnimationFrame(animationFrameId);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      torusKnotGeo.dispose();
      wireframeGeo.dispose();
      torusMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
