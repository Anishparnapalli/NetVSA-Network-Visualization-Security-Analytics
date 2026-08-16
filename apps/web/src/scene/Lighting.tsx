/**
 * "engineering-dark" lighting preset, per Technical Architecture §7.1's
 * scene structure (`<Lighting preset="engineering-dark" />`).
 *
 * Phase 1: a single fixed preset. Nothing here reads store state yet —
 * lighting reacting to security/alert state is a later-phase concern
 * (§7.4, Security FX).
 */
export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.35} color="#2b3350" />
      <directionalLight position={[8, 12, 6]} intensity={0.9} color="#e6e9f0" castShadow={false} />
      <pointLight position={[-10, 6, -10]} intensity={0.4} color="#3b82f6" />
    </>
  );
}
