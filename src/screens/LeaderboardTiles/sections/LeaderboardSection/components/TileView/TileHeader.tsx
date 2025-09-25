import React from 'react';
import { Box, Typography } from '@mui/material';
import { RankDisplay } from './RankDisplay';
import { ScoreDisplay } from './ScoreDisplay';

interface TileHeaderProps {
  rank: number;
  score: string;
  name: string;
}

export const TileHeader: React.FC<TileHeaderProps> = ({ rank, score, name }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        gap: 0.5,
        width: '100%',
        height: '80px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          gap: 0.5,
          pt: 0.5,
          pb: 0.5,
          px: 0.75,
          width: '100%',
          backgroundColor: '#fafafa',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '100%',
          }}
        >
          <RankDisplay rank={rank} />
          <ScoreDisplay score={score} />
        </Box>

        <Typography
          sx={{
            width: '100%',
            fontFamily: 'Work Sans, Helvetica',
            fontWeight: 600,
            color: '#18181a',
            fontSize: { xs: '18px', sm: '20px' },
            letterSpacing: 0,
            lineHeight: 'normal',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};