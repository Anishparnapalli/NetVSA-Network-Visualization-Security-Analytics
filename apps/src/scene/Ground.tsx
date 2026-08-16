import { Grid } from "@react-three/drei";

/**
 * The ground plane / reference grid for the topology scene.
 *
 * Phase 1: purely decorative reference geometry — no devices/links render
 * on it yet (that starts in Phase 2 with a hardcoded static topology).
 */
export function Ground() {
  return (
    <Grid
      position={[0, 0, 0]}
      args={[40, 40]}
      cellSize={1}
      cellThickness={0.5}
      cellColor="#262b38"
      sectionSize={5}
      sectionThickness={1}
      sectionColor="#3b82f6"
      fadeDistance={35}
      fadeStrength={1}
      infiniteGrid
    />
  );
}
