import React from 'react';
import { Box, Grid } from '@mui/material';
import { TileCard } from './TileView/TileCard';

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

export default function TileView() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        width: '100%',
        maxWidth: '100%',
        px: 2,
      }}
    >
      {Array.from({ length: 5 }, (_, rowIndex) => (
        <Grid
          container
          key={rowIndex}
          spacing={0.5}
          sx={{
            width: '100%',
            justifyContent: 'center',
            mb: 0.5,
          }}
        >
          {leaderboardData
            .slice(rowIndex * 2, rowIndex * 2 + 2)
            .map((person) => (
              <Grid 
                item
                xs={6}
                key={person.rank}
                sx={{ 
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                }}
              >
                <TileCard person={person} />
              </Grid>
            ))}
        </Grid>
      ))}
    </Box>
  );
}