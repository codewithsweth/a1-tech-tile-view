import React from 'react';
import { Box } from '@mui/material';

interface ImageContainerProps {
  rank: number;
  name: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({ rank, name }) => {
  // Generate consistent image based on rank
  const getProfileImage = (rank: number) => {
    const imageIds = [
      '1472099645', // Professional man
      '2379004', // Professional woman
      '1438761', // Business person
      '2182970', // Professional headshot
      '1674752', // Business professional
      '2381069', // Corporate headshot
      '1043471', // Professional portrait
      '2379005', // Business person
      '1559486', // Professional headshot
      '2182973'  // Corporate portrait
    ];
    
    const imageId = imageIds[(rank - 1) % imageIds.length];
    return `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=180&h=163&fit=crop`;
  };

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
      <img 
        src={getProfileImage(rank)}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
  );
};