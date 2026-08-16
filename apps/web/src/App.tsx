import { Route, Routes } from "react-router-dom";
import { NavRail } from "./ui/NavRail";
import { TopBar } from "./ui/TopBar";
import { Scene } from "./scene/Scene";
import { Overview } from "./labs/Overview";
import { RealNetwork } from "./labs/RealNetwork";
import { Simulation } from "./labs/Simulation";
import { Protocols } from "./labs/Protocols";
import { Security } from "./labs/Security";
import { Analytics } from "./labs/Analytics";
import { Replay } from "./labs/Replay";

/**
 * Persistent app shell, per Technical Architecture §8.1 / §8.5: nav rail +
 * top bar stay constant; the center 3D canvas is a single persistent
 * instance; only the overlay content changes per route. This is what lets
 * later phases make "switching modes" feel like changing what you're
 * looking at in the same lab, rather than navigating to a new app.
 */
export function App() {
  return (
    <div className="flex h-full w-full flex-col">
      <TopBar />
      <div className="relative flex flex-1 overflow-hidden">
        <NavRail />
        <main className="relative flex-1">
          <Scene />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/real-network" element={<RealNetwork />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/protocols" element={<Protocols />} />
            <Route path="/security" element={<Security />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/replay" element={<Replay />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
