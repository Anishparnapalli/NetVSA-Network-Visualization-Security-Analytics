import { create } from "zustand";
import type { NetVsaStore } from "./types";

/**
 * The single client-side source of truth for network/session/UI state
 * (Technical Architecture §2 "State management").
 *
 * Phase 1: all data slices (`devices`, `links`, `packets`) start empty.
 * The only slices with real logic in Phase 1 are `selection` (used by the
 * Phase 2 debug/selection groundwork) and `camera`/`session`, which need a
 * concrete action so Phase 1's Vitest test can exercise a trivial store
 * action end to end, per the Implementation Plan's Phase 1 exit criteria.
 *
 * No event bus, no reducers keyed by event type yet — that's Phase 2
 * ("Event Pipeline & Static Topology Rendering").
 */
export const useNetVsaStore = create<NetVsaStore>((set) => ({
  devices: {},
  links: {},
  packets: {},

  selectedObjectId: null,
  select: (id) => set({ selectedObjectId: id }),

  mode: "FREE",
  targetId: null,
  setCameraMode: (mode, targetId = null) => set({ mode, targetId }),

  sessionId: null,
  startedAt: null,
  startSession: (sessionId) => set({ sessionId, startedAt: Date.now() }),
  endSession: () => set({ sessionId: null, startedAt: null })
}));
