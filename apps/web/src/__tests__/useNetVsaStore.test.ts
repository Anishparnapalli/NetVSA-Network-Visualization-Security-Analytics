import { describe, expect, it } from "vitest";
import { useNetVsaStore } from "../store/useNetVsaStore";

/**
 * Phase 1 exit criterion: "Add one Vitest unit test (e.g., a trivial store
 * action) ... to prove the test harness works end to end."
 *
 * This intentionally exercises only the store, with no React rendering
 * and no Three.js/WebGL involved — that keeps this test fast and free of
 * jsdom's lack of a real WebGL context. Store-driven correctness of the
 * 3D/engine pipeline is proven starting Phase 2's reducer tests.
 */
describe("useNetVsaStore", () => {
  it("starts with empty devices/links/packets and no selection", () => {
    const state = useNetVsaStore.getState();
    expect(state.devices).toEqual({});
    expect(state.links).toEqual({});
    expect(state.packets).toEqual({});
    expect(state.selectedObjectId).toBeNull();
  });

  it("select() sets and clears selectedObjectId", () => {
    useNetVsaStore.getState().select("device-1");
    expect(useNetVsaStore.getState().selectedObjectId).toBe("device-1");

    useNetVsaStore.getState().select(null);
    expect(useNetVsaStore.getState().selectedObjectId).toBeNull();
  });

  it("startSession()/endSession() set and clear session state", () => {
    useNetVsaStore.getState().startSession("session-abc");
    const started = useNetVsaStore.getState();
    expect(started.sessionId).toBe("session-abc");
    expect(started.startedAt).toEqual(expect.any(Number));

    useNetVsaStore.getState().endSession();
    const ended = useNetVsaStore.getState();
    expect(ended.sessionId).toBeNull();
    expect(ended.startedAt).toBeNull();
  });

  it("setCameraMode() updates camera mode and target", () => {
    useNetVsaStore.getState().setCameraMode("FOCUS_DEVICE", "device-2");
    const state = useNetVsaStore.getState();
    expect(state.mode).toBe("FOCUS_DEVICE");
    expect(state.targetId).toBe("device-2");
  });
});
