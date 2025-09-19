import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LeaderboardTiles } from "./screens/LeaderboardTiles/LeaderboardTiles";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LeaderboardTiles />
  </StrictMode>,
);
