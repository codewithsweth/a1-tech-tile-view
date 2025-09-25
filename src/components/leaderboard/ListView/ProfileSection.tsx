import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { InfoItem } from './InfoItem';

interface ProfileSectionProps {
  name: string;
  gradDate: string;
  opportunities: number;
  rank: number;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ 
  name, 
  gradDate, 
  opportunities,
  rank
}) => {
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
    return `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop`;
  };

  return (
    <>
      {/* Profile Image */}
      <Box
        sx={{ 
          width: 60, 
          height: 60, 
          borderRadius: 1,
          border: '2px solid #000000',
          flexShrink: 0,
          overflow: 'hidden'
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

      {/* Name and Details */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 0.5,
        minWidth: '180px',
        maxWidth: '250px',
        mb: 0
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: 'Work Sans, Helvetica', 
            fontWeight: 600, 
            color: '#000000', 
            fontSize: '18px',
            lineHeight: 1.2,
            mb: 0
          }}
        >
          {name}
        </Typography>
        <InfoItem label="GRAD DATE" value={gradDate} />
        <InfoItem label="OPPORTUNITIES" value={opportunities} />
      </Box>
    </>
  );
};