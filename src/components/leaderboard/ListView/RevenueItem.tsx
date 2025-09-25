import React from 'react';
import { Box, Typography } from '@mui/material';

interface RevenueItemProps {
  label: string;
  value: string;
  valueColor?: string;
}

export const RevenueItem: React.FC<RevenueItemProps> = ({ 
  label, 
  value, 
  valueColor = '#000000' 
}) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography 
        variant="caption" 
        sx={{ 
          fontFamily: 'Work Sans, Helvetica', 
          fontWeight: 500, 
          color: '#666666', 
          fontSize: '9px',
          letterSpacing: '0.5px',
          display: 'block'
        }}
      >
        {label}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          fontFamily: 'Work Sans, Helvetica', 
          fontWeight: 'bold', 
          color: valueColor, 
          fontSize: '12px'
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};