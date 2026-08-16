import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "./navConfig";

/**
 * Left nav rail, per Technical Architecture §8.1.
 * Phase 1: pure client-side routing between placeholder screens.
 */
export function NavRail() {
  return (
    <nav
      aria-label="NetVSA labs"
      className="flex w-56 shrink-0 flex-col gap-1 border-r border-netvsa-border bg-netvsa-bg-raised p-3"
    >
      <div className="mb-4 px-2 text-xs font-mono uppercase tracking-widest text-netvsa-text-muted">
        Labs
      </div>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            [
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-netvsa-bg-panel text-netvsa-active"
                : "text-netvsa-text-muted hover:bg-netvsa-bg-panel hover:text-netvsa-text"
            ].join(" ")
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
