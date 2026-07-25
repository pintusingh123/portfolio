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
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group to hold objects for subtle rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Elegant Geometric Icosahedron Lattice (Clean & Minimal)
    const geometry = new THREE.IcosahedronGeometry(6.5, 2);
    const wireframeGeo = new THREE.WireframeGeometry(geometry);

    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x4cd7f6,
      transparent: true,
      opacity: 0.45,
      linewidth: 1,
    });
    const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMaterial);
    mainGroup.add(wireframe);

    // 3. Inner Glowing Core Sphere
    const innerGeo = new THREE.IcosahedronGeometry(3.8, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xc0c1ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 4. Single Thin Celestial Orbit Ring
    const ringGeo = new THREE.TorusGeometry(8.2, 0.08, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // 5. Subtle Ambient Floating Particles (Soft & Minimal)
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x4cd7f6), // Cyan
      new THREE.Color(0xc0c1ff), // Lavender
      new THREE.Color(0xffd700), // Gold
    ];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 36;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 36;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 36;

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

    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.4, "rgba(76, 215, 246, 0.6)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);

      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Slow, Gentle & Smooth Mouse Parallax (Beginning Style)
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const onPointerMove = (event) => {
      // Gentle, slow movement tracking
      targetX = (event.clientX - windowHalfX) * 0.0006;
      targetY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener("pointermove", onPointerMove);

    // Resize Handler
    const onWindowResize = () => {
      if (!currentMount) return;
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // 7. Animation Loop with Gentle Rotation & Subtle Color Transition
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow, smooth ambient rotation
      mainGroup.rotation.y = elapsedTime * 0.12;
      mainGroup.rotation.x = elapsedTime * 0.06;
      innerMesh.rotation.y = -elapsedTime * 0.18;
      ringMesh.rotation.z = elapsedTime * 0.15;
      particles.rotation.y = elapsedTime * 0.025;

      // Soft, subtle color shifts
      const hue1 = (elapsedTime * 0.04) % 1;
      const hue2 = (hue1 + 0.33) % 1;

      wireframeMaterial.color.setHSL(hue1, 0.8, 0.6);
      innerMat.color.setHSL(hue2, 0.85, 0.65);
      ringMat.color.setHSL((hue1 + 0.5) % 1, 0.9, 0.65);

      // Buttery smooth, slow inertia tracking
      mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.035;
      mainGroup.rotation.x += (targetY - mainGroup.rotation.x) * 0.035;

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
      geometry.dispose();
      wireframeGeo.dispose();
      wireframeMaterial.dispose();
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
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
