import React from 'react';
import { Box, Typography } from '@mui/material';
import { RevenueItem } from './RevenueItem';

interface RevenueSectionProps {
  revenue: {
    period: string;
    selectedYr: string;
    lifetime: string;
  };
}

export const RevenueSection: React.FC<RevenueSectionProps> = ({ revenue }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start',
      gap: 0.5,
      flex: 1,
      minWidth: '250px'
    }}>
      <Typography 
        variant="caption" 
        sx={{ 
          fontFamily: 'Work Sans, Helvetica', 
          fontWeight: 600, 
          color: '#000000', 
          fontSize: '12px'
        }}
      >
        Revenue
      </Typography>
      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
        <RevenueItem label="PERIOD" value={revenue.period} />
        <RevenueItem label="SELECTED YR" value={revenue.selectedYr} valueColor="#1d890b" />
        <RevenueItem label="LIFETIME" value={revenue.lifetime} />
      </Box>
    </Box>
  );
};