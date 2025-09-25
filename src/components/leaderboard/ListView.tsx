import React from "react";
import { 
  Card, 
  CardContent, 
  Box, 
} from '@mui/material';
import { RankSection } from './ListView/RankSection';
import { ProfileSection } from './ListView/ProfileSection';
import { RevenueSection } from './ListView/RevenueSection';
import { BadgeContainer } from './ListView/BadgeContainer';
import { MetricsSection } from './ListView/MetricsSection';

interface LeaderboardEntry {
  rank: number;
  score: string;
  name: string;
  gradDate: string;
  opportunities: number;
  revenue: {
    period: string;
    selectedYr: string;
    lifetime: string;
  };
  metrics: {
    oja: string;
    cja: string;
    cr: string;
    gc: string;
    palGc: string;
    mcr: string;
    rr: string;
    csat: string;
    fiveStarJobs: number;
    totalJobs: number;
  };
  badges: string[];
  hasHighestBadge?: boolean;
  hasHotStreakBadge?: boolean;
}

interface ListViewProps {
  data: LeaderboardEntry[];
}

export const ListView: React.FC<ListViewProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        width: '100%', 
        maxWidth: '1000px', // iPad Pro portrait width
        px: 2,
      }}
    >
      {data.map((entry, index) => (
        <Card 
          key={index} 
          sx={{ 
            display: 'flex',
            width: '100%',
            maxWidth: '1000px',
            maxHeight: '170px',
            padding: '8px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1px',
            backgroundColor: '#18181A',
            border: 'none',
            borderRadius: 0,
            boxShadow: 'none',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ 
            p: 0,
           width: '100%',
            height: '100%',
            '&:last-child': { pb: 0 },
            backgroundColor: '#f8f9fa'
          }}>
            {/* Header Section */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              padding: '6px 12px',
              backgroundColor: '#f8f9fa'
            }}>
              <RankSection rank={entry.rank} score={entry.score} />

              <ProfileSection 
                name={entry.name}
                gradDate={entry.gradDate}
                opportunities={entry.opportunities}
              />

              <RevenueSection revenue={entry.revenue} />

              <BadgeContainer 
                hasHighestBadge={entry.hasHighestBadge}
                hasHotStreakBadge={entry.hasHotStreakBadge}
              />
            </Box>

            {/* Metrics Section */}
            <MetricsSection metrics={entry.metrics} rank={entry.rank} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};