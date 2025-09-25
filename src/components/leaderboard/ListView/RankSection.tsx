import React from 'react';
import { Box, Typography } from '@mui/material';

interface RankSectionProps {
  rank: number;
  score: string;
}

export const RankSection: React.FC<RankSectionProps> = ({ rank, score }) => {
  const isTopThree = rank <= 3;
  const rankColor = isTopThree ? '#1d890b' : '#333333';

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minWidth: '50px'
    }}>
      <Typography 
        variant="caption" 
        sx={{ 
          fontFamily: 'Work Sans, Helvetica', 
          fontWeight: 500, 
          color: '#666666', 
          fontSize: '9px',
          letterSpacing: '0.5px',
          textAlign: 'center'
        }}
      >
        RANK
      </Typography>
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: 'Work Sans, Helvetica', 
          fontWeight: 'bold', 
          color: rankColor, 
          fontSize: '28px', 
          lineHeight: 1,
          mt: 0.25,
          textAlign: 'center'
        }}
      >
        {rank}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.25 }}>
        <Typography 
          variant="caption" 
          sx={{ 
            fontFamily: 'Work Sans, Helvetica', 
            fontWeight: 500, 
            color: '#666666', 
            fontSize: '9px'
          }}
        >
          SCORE
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            fontFamily: 'Work Sans, Helvetica', 
            fontWeight: 'bold', 
            color: rankColor, 
            fontSize: '10px'
          }}
        >
          {score}
        </Typography>
      </Box>
    </Box>
  );
};