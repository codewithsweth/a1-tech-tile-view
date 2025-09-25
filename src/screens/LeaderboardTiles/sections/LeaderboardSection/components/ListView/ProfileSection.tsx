import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { InfoItem } from './InfoItem';

interface ProfileSectionProps {
  name: string;
  gradDate: string;
  opportunities: number;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ 
  name, 
  gradDate, 
  opportunities 
}) => {
  return (
    <>
      {/* Profile Image */}
      <Avatar 
        sx={{ 
          width: 60, 
          height: 60, 
          borderRadius: 1,
          border: '2px solid #000000',
          backgroundColor: '#e0e0e0',
          color: '#666',
          fontSize: '14px',
          fontWeight: 600,
          flexShrink: 0
        }}
      >
        {name.split(" ").map((n) => n[0]).join("")}
      </Avatar>

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