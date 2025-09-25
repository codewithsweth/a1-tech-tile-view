import React from 'react';
import { Box } from '@mui/material';

export const ImageContainer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '180px',
        minWidth: '160px',
        height: '163px',
        alignItems: 'center',
        gap: 1.25,
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #171819',
        flexShrink: 0,
      }}
    >
      <Box sx={{ height: '163px', width: '100%', backgroundColor: '#f5f5f5' }} />
    </Box>
  );
};