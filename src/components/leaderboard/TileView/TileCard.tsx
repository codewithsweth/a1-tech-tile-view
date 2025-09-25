import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { ImageContainer } from './ImageContainer';
import { TileHeader } from './TileHeader';
import { TileMetrics } from './TileMetrics';
import { TileBadges } from './TileBadges';

interface TileCardProps {
  person: {
    rank: number;
    score: string;
    name: string;
    currentYear: string;
    period: string;
    oja: string;
    gc: string;
    hasHighestBadge: boolean;
    hasHotStreakBadge: boolean;
  };
}

export const TileCard: React.FC<TileCardProps> = ({ person }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '360px',
        height: '175px',
        gap: 0.5,
        alignItems: 'flex-start',
        p: 0.5,
        backgroundColor: '#fafafa',
        border: 0,
        borderRadius: 0,
        position: 'relative',
      }}
    >
      <CardContent sx={{ 
        p: 0, 
        display: 'flex', 
        gap: 0.5, 
        width: '100%',
        height: '100%',
        '&:last-child': { pb: 0 }
        <ImageContainer />
        
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
            height: '163px',
          }}
        >
          <TileHeader 
            rank={person.rank}
            score={person.score}
            name={person.name}
          />
          
          <TileMetrics 
            currentYear={person.currentYear}
            period={person.period}
            oja={person.oja}
            gc={person.gc}
          />
        </Box>

        <TileBadges 
          hasHighestBadge={person.hasHighestBadge}
          hasHotStreakBadge={person.hasHotStreakBadge}
          rank={person.rank}
        />
      </CardContent>
    }
    }
    </Card>
  );
};