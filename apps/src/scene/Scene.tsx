import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Lighting } from "./Lighting";
import { Ground } from "./Ground";

/**
 * Root 3D scene, per Technical Architecture §7.1's `<Canvas>` structure.
 *
 * Phase 1 renders only: camera + orbit controls, lighting, and a ground
 * grid. `<NetworkTopology>`, `<PacketLayer>`, `<SecurityFXLayer>`, and
 * `<SelectionOutline>` are deliberately not built yet — they depend on
 * store slices that stay empty until Phase 2 (static topology) and Phase 4
 * (packet animation, security FX). This keeps Phase 1 provably "3D scene
 * renders; camera orbit works" without pretending any topology exists.
 */
export function Scene() {
  return (
    <Canvas
      data-testid="netvsa-canvas"
      gl={{ antialias: true }}
      shadows={false}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#0b0d12"]} />
      <fog attach="fog" args={["#0b0d12", 20, 45]} />
      <PerspectiveCamera makeDefault position={[10, 8, 10]} fov={50} />
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={3}
        maxDistance={35}
        maxPolarAngle={Math.PI / 2 - 0.02}
      />
      <Suspense fallback={null}>
        <Lighting />
        <Ground />
      </Suspense>
    </Canvas>
  );
}
