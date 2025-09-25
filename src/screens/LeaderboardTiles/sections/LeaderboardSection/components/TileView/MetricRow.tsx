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
  valueColor = '#353539',
  showDivider = true 
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
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
          {label}
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Work Sans, Helvetica',
            fontWeight: 'bold',
            color: valueColor,
            fontSize: '12px',
            textAlign: 'center',
            letterSpacing: 0,
            lineHeight: 'normal',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {value}
        </Typography>
      </Box>

      {showDivider && (
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '1px',
            objectFit: 'cover',
          }}
          alt="Line"
          src="/line-16.svg"
        />
      )}
    </>
  );
};