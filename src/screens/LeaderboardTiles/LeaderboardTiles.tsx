import React from "react";
import { LeaderboardSection } from "./sections/LeaderboardSection/LeaderboardSection";
import { MainScreenSection } from "./sections/MainScreenSection/MainScreenSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";

export const LeaderboardTiles = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-[#372e2e] overflow-hidden">
      <MainScreenSection />
      <LeaderboardSection />
      <NavigationSection />
    </div>
  );
};
