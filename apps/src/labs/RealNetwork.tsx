import { LabPlaceholder } from "./LabPlaceholder";

/**
 * Real Network — Phase 1 placeholder.
 * Later: peer picker, transport choice, message composer, evidence panel
 * (Implementation Plan Phase 5; Technical Architecture §4, §8.3).
 */
export function RealNetwork() {
  return (
    <LabPlaceholder
      title="Real Network"
      description="Two-laptop real TCP/UDP/TLS communication, backed by the local Agent, arrives in Phase 5."
    />
  );
}
