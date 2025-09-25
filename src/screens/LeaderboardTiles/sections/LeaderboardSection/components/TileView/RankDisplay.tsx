import React from 'react';
import { Box, Typography } from '@mui/material';

interface RankDisplayProps {
  rank: number;
}

export const RankDisplay: React.FC<RankDisplayProps> = ({ rank }) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 0.5,
        flex: 1,
      }}
    >
      <Typography
        sx={{
          width: '34px',
          height: '14px',
          fontFamily: 'Avenir Next-Medium, Helvetica',
          fontWeight: 500,
          color: '#18181a',
          fontSize: '12px',
          letterSpacing: 0,
          lineHeight: 'normal',
          whiteSpace: 'nowrap',
        }}
      >
        RANK
      </Typography>

      <Typography
        sx={{
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%', 
          height: '24px',
          fontFamily: 'Work Sans, Helvetica',
          fontWeight: 'bold',
          color: '#1d890b',
          fontSize: { xs: '24px', sm: '30px' },
          textAlign: 'left',
          letterSpacing: 0,
          lineHeight: 'normal',
          whiteSpace: 'nowrap',
        }}
      >
        {rank}
      </Typography>
    </Box>
  );
};