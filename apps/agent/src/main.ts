/**
 * NetVSA Agent — Phase 1 stub.
 *
 * Per Technical Architecture §4 / Departure 1, the Agent is the only
 * component with real socket access (TCP via `net`, UDP via `dgram`,
 * TLS via `tls`) plus peer discovery. None of that exists yet.
 *
 * Phase 1 scope is an empty, runnable stub only, so the workspace layout
 * and tooling (tsx watch, typecheck, lint) are proven end to end before
 * Phase 5 ("Real Communication (Agent)") implements the real thing.
 *
 * Explicitly out of scope for this stub: TCP/UDP/TLS sockets, discovery,
 * the local WebSocket server to the browser, and any event emission.
 */

function main(): void {
  console.log("[netvsa-agent] Phase 1 stub — no real socket I/O implemented yet.");
  console.log("[netvsa-agent] Real TCP/UDP/TLS + discovery arrive in Phase 5.");
}

main();
