import React from 'react';
import { Box, Typography } from '@mui/material';

export const HotStreakBadge: React.FC = () => {
  return (
    <Box
      sx={{
        width: '61px',
        height: '51px',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '60.86px',
          height: '50.9px',
          boxShadow: '0px 0.86px 2.57px rgba(0,0,0,0.08), 0px 0.86px 1.71px rgba(0,0,0,0.04), 0px 0px 10.29px rgba(0,0,0,0.04)',
        }}
      >
        <Box
          component="img"
          sx={{
            position: 'absolute',
            top: '-7px',
            left: 0,
            width: '67px',
            height: '67px',
          }}
          alt="Ellipse"
          src="/ellipse-7.svg"
        />

        <Box
          sx={{
            position: 'absolute',
            top: '9px',
            left: '15px',
            width: '34px',
            height: '34px',
            backgroundColor: '#f3e6b9',
            borderRadius: '17.14px',
            boxShadow: '0px 1.71px 6.86px rgba(0,0,0,0.08), 0px 5.14px 5.14px rgba(0,0,0,0.04), 0px 2.57px 5.14px rgba(0,0,0,0.04)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '15px',
            left: '21px',
            width: '25px',
            height: '26px',
            backgroundColor: '#ffcb49',
            borderRadius: '12.43px/12.86px',
          }}
        />

        <Box
          component="img"
          sx={{
            position: 'absolute',
            top: '-2px',
            left: '17px',
            width: '33px',
            height: '45px',
          }}
          alt="Group"
          src="/group-4.png"
        />

        <Box
          sx={{
            display: 'inline-flex',
            height: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8.57px',
            px: '3.43px',
            py: '8.57px',
            position: 'absolute',
            top: '41px',
            left: '1px',
            backgroundColor: '#e5631a',
            boxShadow: '0px 1.71px 6.86px rgba(0,0,0,0.08), 0px 5.14px 5.14px rgba(0,0,0,0.04), 0px 2.57px 5.14px rgba(0,0,0,0.04)',
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Avenir Next-Bold, Helvetica',
              fontWeight: 'bold',
              color: 'white',
              fontSize: '8.6px',
              textAlign: 'center',
              letterSpacing: 0,
              lineHeight: 'normal',
              whiteSpace: 'nowrap',
            }}
          >
            HOT STREAK
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};