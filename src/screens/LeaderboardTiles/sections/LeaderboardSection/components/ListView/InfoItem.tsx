import React from 'react';
import { Box, Typography } from '@mui/material';

interface InfoItemProps {
  label: string;
  value: string | number;
  valueColor?: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ 
  label, 
  value, 
  valueColor = '#000000' 
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <Typography 
        variant="caption" 
        sx={{ 
          fontFamily: 'Work Sans, Helvetica', 
          fontWeight: 500, 
          color: '#666666', 
          fontSize: '9px',
          letterSpacing: '0.5px'
        }}
      >
        {label}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          fontFamily: 'Work Sans, Helvetica', 
          fontWeight: 600, 
          color: valueColor, 
          fontSize: '12px'
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};