"use client";

import { useEffect, useRef } from "react";

export function HomeHeroScene() {
  const sceneHostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hostElement = sceneHostRef.current;
    const canvasElement = canvasRef.current;
    if (hostElement === null || canvasElement === null) {
      return;
    }
    const host: HTMLDivElement = hostElement;
    const canvas: HTMLCanvasElement = canvasElement;

    let disposed = false;
    let initialized = false;
    let animationTimer: number | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let intersectionObserver: IntersectionObserver | undefined;
    let renderer: import("three").WebGLRenderer | undefined;
    let scene: import("three").Scene | undefined;
    let camera: import("three").PerspectiveCamera | undefined;
    let sculpture: import("three").Group | undefined;
    let disposeSceneResources: (() => void) | undefined;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function renderFrame() {
      if (!renderer || !scene || !camera || !sculpture || disposed) {
        return;
      }

      sculpture.rotation.y += (targetX - sculpture.rotation.y) * 0.035;
      sculpture.rotation.x += (targetY - sculpture.rotation.x) * 0.035;

      if (!motionPreference.matches && !document.hidden) {
        sculpture.rotation.y += 0.0014;
        sculpture.rotation.z += 0.0007;
      }

      renderer.render(scene, camera);
      if (!motionPreference.matches && !document.hidden) {
        animationTimer = window.setTimeout(renderFrame, 1000 / 30);
      }
    }

    function resizeScene() {
      if (!renderer || !camera) {
        return;
      }

      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) {
        return;
      }
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderFrame();
    }

    function updatePointer(event: PointerEvent) {
      if (event.pointerType === "touch" || motionPreference.matches) {
        return;
      }
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
      targetX = pointerX * 0.28;
      targetY = pointerY * 0.18;
      if (animationTimer === undefined) {
        renderFrame();
      }
    }

    function syncMotionPreference() {
      if (motionPreference.matches) {
        window.clearTimeout(animationTimer);
        animationTimer = undefined;
        renderFrame();
      } else if (animationTimer === undefined && !document.hidden) {
        renderFrame();
      }
    }

    function syncVisibility() {
      if (document.hidden) {
        window.clearTimeout(animationTimer);
        animationTimer = undefined;
      } else if (!motionPreference.matches && animationTimer === undefined) {
        renderFrame();
      }
    }

    async function initializeScene() {
      if (initialized || disposed) {
        return;
      }
      initialized = true;

      try {
        const THREE = await import("three");
        if (disposed) {
          return;
        }

        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) {
          initialized = false;
          return;
        }

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 50);
        camera.position.set(0, 0, 5.2);
        sculpture = new THREE.Group();
        scene.add(sculpture);

        const coreGeometry = new THREE.IcosahedronGeometry(0.79, 2);
        const coreMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x58bd83,
          roughness: 0.24,
          metalness: 0.12,
          transparent: true,
          opacity: 0.48,
          flatShading: true,
          clearcoat: 0.8,
          clearcoatRoughness: 0.22,
        });
        sculpture.add(new THREE.Mesh(coreGeometry, coreMaterial));

        const wireGeometry = new THREE.IcosahedronGeometry(0.84, 1);
        const wireMaterial = new THREE.MeshBasicMaterial({
          color: 0x087d4d,
          wireframe: true,
          transparent: true,
          opacity: 0.35,
        });
        sculpture.add(new THREE.Mesh(wireGeometry, wireMaterial));

        const orbitMaterial = new THREE.MeshBasicMaterial({
          color: 0x0b8b55,
          transparent: true,
          opacity: 0.23,
        });
        const orbitA = new THREE.Mesh(
          new THREE.TorusGeometry(1.19, 0.008, 6, 144),
          orbitMaterial,
        );
        orbitA.rotation.set(0.92, 0.12, -0.28);
        sculpture.add(orbitA);

        const orbitB = new THREE.Mesh(
          new THREE.TorusGeometry(1.42, 0.006, 6, 144),
          new THREE.MeshBasicMaterial({
            color: 0x78d6a0,
            transparent: true,
            opacity: 0.25,
          }),
        );
        orbitB.rotation.set(0.1, 0.75, 0.94);
        sculpture.add(orbitB);

        const particlePositions = new Float32Array(210 * 3);
        for (let index = 0; index < particlePositions.length; index += 3) {
          const angle = Math.random() * Math.PI * 2;
          const vertical = Math.random() * 2 - 1;
          const radius = 1.02 + Math.random() * 0.78;
          const horizontal = Math.sqrt(1 - vertical * vertical);
          particlePositions[index] = Math.cos(angle) * horizontal * radius;
          particlePositions[index + 1] = vertical * radius;
          particlePositions[index + 2] =
            Math.sin(angle) * horizontal * radius;
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(particlePositions, 3),
        );
        const particles = new THREE.Points(
          particleGeometry,
          new THREE.PointsMaterial({
            color: 0x168c58,
            size: 0.018,
            transparent: true,
            opacity: 0.7,
            sizeAttenuation: true,
          }),
        );
        sculpture.add(particles);
        const geometries = [
          coreGeometry,
          wireGeometry,
          orbitA.geometry,
          orbitB.geometry,
          particleGeometry,
        ];
        const materials = [
          coreMaterial,
          wireMaterial,
          orbitMaterial,
          orbitB.material,
          particles.material,
        ];
        disposeSceneResources = () => {
          geometries.forEach((geometry) => geometry.dispose());
          materials.forEach((material) => material.dispose());
        };

        scene.add(new THREE.AmbientLight(0xffffff, 1.15));
        const keyLight = new THREE.DirectionalLight(0xd8ffe5, 2.2);
        keyLight.position.set(-2.5, 3, 4);
        scene.add(keyLight);

        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: window.devicePixelRatio < 2,
          powerPreference: "low-power",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setClearColor(0x000000, 0);
        host.dataset.sceneState = "ready";

        if ("ResizeObserver" in window) {
          resizeObserver = new ResizeObserver(resizeScene);
          resizeObserver.observe(host);
        }
        resizeScene();
        window.addEventListener("pointermove", updatePointer, {
          passive: true,
        });
        window.addEventListener("resize", resizeScene, { passive: true });
        document.addEventListener("visibilitychange", syncVisibility);
        motionPreference.addEventListener("change", syncMotionPreference);
        syncMotionPreference();
      } catch (error) {
        if (!disposed) {
          host.dataset.sceneState = "fallback";
          console.warn(
            "[home-hero-scene] WebGL is unavailable; using the CSS fallback.",
            error,
          );
        }
      }
    }

    if ("IntersectionObserver" in window) {
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            intersectionObserver?.disconnect();
            void initializeScene();
          }
        },
        { rootMargin: "120px" },
      );
      intersectionObserver.observe(host);
    } else {
      void initializeScene();
    }

    return () => {
      disposed = true;
      intersectionObserver?.disconnect();
      resizeObserver?.disconnect();
      window.clearTimeout(animationTimer);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("resize", resizeScene);
      document.removeEventListener("visibilitychange", syncVisibility);
      motionPreference.removeEventListener("change", syncMotionPreference);
      renderer?.dispose();
      disposeSceneResources?.();
    };
  }, []);

  return (
    <div className="home-hero__scene" ref={sceneHostRef}>
      <canvas
        ref={canvasRef}
        className="home-hero__scene-canvas"
        aria-hidden="true"
      />
    </div>
  );
}
