import React from 'react';
import { Box } from '@mui/material';

interface BadgeContainerProps {
  hasHighestBadge?: boolean;
  hasHotStreakBadge?: boolean;
}

export const BadgeContainer: React.FC<BadgeContainerProps> = ({ 
  hasHighestBadge, 
  hasHotStreakBadge 
}) => {
  if (!hasHighestBadge && !hasHotStreakBadge) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        zIndex: 2,
      }}
    >
      {hasHotStreakBadge && (
        <Box
          sx={{
            width: '50px',
            height: '40px',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '50px',
              height: '40px',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '4px',
                left: '10px',
                width: '25px',
                height: '25px',
                backgroundColor: '#f3e6b9',
                borderRadius: '50%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '7px',
                left: '13px',
                width: '19px',
                height: '19px',
                backgroundColor: '#ffcb49',
                borderRadius: '50%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '30px',
                left: '2px',
                backgroundColor: '#e5631a',
                color: 'white',
                fontSize: '7px',
                fontWeight: 'bold',
                padding: '1px 4px',
                borderRadius: '2px',
              }}
            >
              HOT STREAK
            </Box>
          </Box>
        </Box>
      )}

      {hasHighestBadge && (
        <Box
          sx={{
            width: '40px',
            height: '40px',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '40px',
              height: '40px',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '4px',
                left: '5px',
                width: '25px',
                height: '25px',
                backgroundColor: '#0c63ca',
                borderRadius: '50%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '30px',
                left: '4px',
                backgroundColor: '#075093',
                color: 'white',
                fontSize: '7px',
                fontWeight: 'bold',
                padding: '1px 4px',
                borderRadius: '2px',
              }}
            >
              HIGHEST
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};