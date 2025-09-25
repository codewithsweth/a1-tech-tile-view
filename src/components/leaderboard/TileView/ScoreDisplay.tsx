import React from 'react';
import { Box, Typography } from '@mui/material';

interface ScoreDisplayProps {
  score: string;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
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
          fontFamily: 'Avenir Next-Medium, Helvetica',
          fontWeight: 500,
          color: '#18181a',
          fontSize: '12px',
          letterSpacing: 0,
          lineHeight: 'normal',
        }}
      >
        SCORE
      </Typography>

      <Typography
        sx={{
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%', 
          height: '22px',
          fontFamily: 'Work Sans, Helvetica',
          fontWeight: 'bold',
          color: '#1d890b',
          fontSize: { xs: '24px', sm: '30px' },
          textAlign: 'center',
          letterSpacing: 0,
          lineHeight: 'normal',
          whiteSpace: 'nowrap',
        }}
      >
        {score}
      </Typography>
    </Box>
  );
};