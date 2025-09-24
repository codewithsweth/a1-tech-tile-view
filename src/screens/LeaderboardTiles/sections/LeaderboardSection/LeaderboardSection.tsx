import { useState } from "react";
import { ListView } from "./components/ListView";
import TileView from "./components/TileView";
import FilterSection from "./components/FilterSection";
import HeaderSection from "./components/HeaderSection";

const leaderboardData = [
  {
    rank: 1,
    score: "98.8%",
    name: "Jimmy Buxton",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 2,
    score: "98.8%",
    name: "Joe Bennington",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: true,
    hasHotStreakBadge: false,
  },
  {
    rank: 3,
    score: "98.8%",
    name: "Rick Sanchez",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: true,
    hasHotStreakBadge: true,
  },
  {
    rank: 4,
    score: "98.8%",
    name: "Jackie Williams",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 5,
    score: "98.8%",
    name: "Will Stephenson",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 6,
    score: "98.8%",
    name: "Jeff Cooper",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 7,
    score: "98.8%",
    name: "Rick Ramirez",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 8,
    score: "98.8%",
    name: "Corey Buehler",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 9,
    score: "98.8%",
    name: "Andrew Santini",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 10,
    score: "98.8%",
    name: "Jenny Gaviolini",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
];

// Transform data for ListView component
const listViewData = leaderboardData.map((person) => ({
  rank: person.rank,
  score: person.score,
  name: person.name,
  gradDate: "08/15/2023",
  opportunities: 45,
  revenue: {
    period: person.period,
    selectedYr: person.currentYear,
    lifetime: "$2.1M",
  },
  metrics: {
    oja: person.oja,
    cja: "$1.2M",
    cr: "85%",
    gc: person.gc,
    palGc: "18.5%",
    mcr: "12.3%",
    rr: "92%",
    csat: "4.8",
    fiveStarJobs: 42,
    totalJobs: 45,
  },
  badges: [],
  hasHighestBadge: person.hasHighestBadge,
  hasHotStreakBadge: person.hasHotStreakBadge,
}));

export const LeaderboardSection = (): JSX.Element => {
  const [layoutView, setLayoutView] = useState("tiles");

  return (
    <div className="flex flex-col items-start relative w-full flex-1 overflow-y-auto">
      {/* Leaderboard Section */}
      <HeaderSection />

      {/* Filter Section */}
      <FilterSection setLayoutView={setLayoutView} />

      {/* Main Content Section */}
      <div className="w-full py-2 flex justify-center">
        {layoutView === "list" ? (
          <ListView data={listViewData} />
        ) : (
          <TileView />
        )}
      </div>
    </div>
  );
};
