import React from "react";
import { Box } from '@mui/material';
import { LeaderboardSection } from "../../pages/LeaderboardSection";
import { MainScreenSection } from "./sections/MainScreenSection/MainScreenSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";

export const LeaderboardTiles = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        backgroundColor: '#372e2e',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <MainScreenSection />
      <LeaderboardSection />
      <NavigationSection />
    </Box>
  );
};
