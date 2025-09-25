import React from 'react';
import { Box, Typography } from '@mui/material';
import { HighestBadge } from './HighestBadge';
import { HotStreakBadge } from './HotStreakBadge';

interface TileBadgesProps {
  hasHighestBadge: boolean;
  hasHotStreakBadge: boolean;
  rank: number;
}

export const TileBadges: React.FC<TileBadgesProps> = ({ 
  hasHighestBadge, 
  hasHotStreakBadge, 
  rank 
}) => {
  // For demo purposes, let's assume some people have more badges
  const demoAdditionalBadges = rank === 2 ? 2 : rank === 3 ? 1 : 0;
  const showCounter = demoAdditionalBadges > 0;

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '8px',
        left: '8px',
        right: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        zIndex: 2,
      }}
    >
      {hasHighestBadge && <HighestBadge />}
      {hasHotStreakBadge && <HotStreakBadge />}
      
      {showCounter && (
        <Box
          sx={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#353539',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: 0.5,
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Work Sans, Helvetica',
              fontWeight: 'bold',
              color: 'white',
              fontSize: '10px',
              lineHeight: 1,
            }}
          >
            +{demoAdditionalBadges}
          </Typography>
        </Box>
      )}
    </Box>
  );
};