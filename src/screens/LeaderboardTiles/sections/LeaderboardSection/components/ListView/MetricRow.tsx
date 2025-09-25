import React from 'react';
import { Box, Typography } from '@mui/material';

interface MetricRowProps {
  label: string;
  value: string;
  valueColor?: string;
  showDivider?: boolean;
}

export const MetricRow: React.FC<MetricRowProps> = ({ 
  label, 
  value, 
  valueColor = '#666666',
  showDivider = true 
}) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography 
          variant="caption" 
          sx={{ 
            fontFamily: 'Work Sans, Helvetica', 
            fontWeight: 500, 
            color: '#666666', 
            fontSize: '10px'
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
            fontSize: '11px'
          }}
        >
          {value}
        </Typography>
      </Box>
      {showDivider && (
        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mb: 0.5 }} />
      )}
    </>
  );
};