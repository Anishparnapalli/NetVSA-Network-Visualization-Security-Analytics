/**
 * NetVSA store slice types.
 *
 * Phase 1 scope: the slices exist and are typed, but hold no real network
 * data yet — that arrives in Phase 2 (event pipeline + static topology)
 * and Phase 3 (live simulation engine state). Keeping the shapes explicit
 * now means later phases only add data and reducers, not restructure the
 * store.
 */

export type CameraMode = "FREE" | "FOLLOW_PACKET" | "FOCUS_DEVICE" | "JOURNEY" | "SECURITY" | "OVERVIEW";

export interface DeviceRecord {
  id: string;
  name: string;
  type: "CLIENT" | "SERVER" | "SWITCH" | "ROUTER" | "FIREWALL" | "IDS";
  status: "idle" | "processing" | "transmitting" | "alert" | "blocked" | "failed";
}

export interface LinkRecord {
  id: string;
  interfaceA: string;
  interfaceB: string;
  latencyMs: number;
  packetLossRate: number;
  status: "UP" | "DOWN" | "DEGRADED";
}

export interface PacketRecord {
  id: string;
  currentNodeId: string;
  lifecycleState: string;
}

export interface SelectionState {
  selectedObjectId: string | null;
}

export interface CameraState {
  mode: CameraMode;
  targetId: string | null;
}

export interface SessionState {
  sessionId: string | null;
  startedAt: number | null;
}

export interface DevicesSlice {
  devices: Record<string, DeviceRecord>;
}

export interface LinksSlice {
  links: Record<string, LinkRecord>;
}

export interface PacketsSlice {
  packets: Record<string, PacketRecord>;
}

export interface SelectionSlice extends SelectionState {
  select: (id: string | null) => void;
}

export interface CameraSlice extends CameraState {
  setCameraMode: (mode: CameraMode, targetId?: string | null) => void;
}

export interface SessionSlice extends SessionState {
  startSession: (sessionId: string) => void;
  endSession: () => void;
}

export type NetVsaStore = DevicesSlice &
  LinksSlice &
  PacketsSlice &
  SelectionSlice &
  CameraSlice &
  SessionSlice;
