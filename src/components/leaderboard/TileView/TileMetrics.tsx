import React from 'react';
import { Box } from '@mui/material';
import { MetricRow } from './MetricRow';

interface TileMetricsProps {
  currentYear: string;
  period: string;
  oja: string;
  gc: string;
}

export const TileMetrics: React.FC<TileMetricsProps> = ({ 
  currentYear, 
  period, 
  oja, 
  gc 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 0.25,
        px: 0.75,
        py: 0.5,
        backgroundColor: '#f2f4f8',
        height: '83px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            gap: 0.25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <MetricRow 
            label="CURRENT YEAR" 
            value={currentYear} 
            valueColor="#1d890b"
            showDivider={true}
          />
          
          <MetricRow 
            label="PERIOD" 
            value={period} 
            valueColor="#353539"
            showDivider={true}
          />
          
          <MetricRow 
            label="OJA" 
            value={oja} 
            valueColor="#1d890b"
            showDivider={true}
          />
          
          <MetricRow 
            label="GC%" 
            value={gc} 
            valueColor="#353539"
            showDivider={false}
          />
        </Box>
      </Box>
    </Box>
  );
};