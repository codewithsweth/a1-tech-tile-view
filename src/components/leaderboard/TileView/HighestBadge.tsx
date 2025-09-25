import React from 'react';
import { Box, Typography } from '@mui/material';

export const HighestBadge: React.FC = () => {
  return (
    <Box
      sx={{
        width: '44px',
        height: '51px',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          left: '1px',
          width: '46px',
          height: '51px',
        }}
      >
        <Box
          component="img"
          sx={{
            position: 'absolute',
            top: '-6px',
            left: '-10px',
            width: '63px',
            height: '63px',
          }}
          alt="Ellipse"
          src="/ellipse-7-1.svg"
        />

        <Box
          sx={{
            position: 'absolute',
            top: '8px',
            left: '6px',
            width: '33px',
            height: '34px',
            backgroundColor: '#85dc74',
            borderRadius: '16.56px/16.97px',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '15px',
            left: '6px',
            width: '32px',
            height: '32px',
            backgroundColor: '#fafafa',
            borderRadius: '15.75px/16.16px',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            width: '41px',
            height: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8.08px',
            px: '6.46px',
            py: '8.08px',
            position: 'absolute',
            top: '41px',
            left: '2px',
            backgroundColor: '#46a037',
            boxShadow: '0px 1.62px 6.46px rgba(0,0,0,0.08), 0px 4.85px 4.85px rgba(0,0,0,0.04), 0px 2.42px 4.85px rgba(0,0,0,0.04)',
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
              lineHeight: '8.6px',
              whiteSpace: 'nowrap',
            }}
          >
            HIGHEST
          </Typography>
        </Box>

        <Typography
          sx={{
            position: 'absolute',
            top: '26px',
            left: '7px',
            width: '29px',
            height: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Avenir Next-Bold, Helvetica',
            fontWeight: 'bold',
            color: '#15570a',
            fontSize: '8.1px',
            textAlign: 'center',
            letterSpacing: 0,
            lineHeight: '6.5px',
          }}
        >
          DOOR SALES
        </Typography>

        <Box
          sx={{
            position: 'absolute',
            top: '15px',
            left: '11px',
            width: '23px',
            height: '5px',
            backgroundColor: '#1d890b',
            border: '0.81px solid white',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '20px',
            left: '11px',
            width: '23px',
            height: '3px',
            backgroundColor: '#1d890b',
            border: '0.81px solid white',
          }}
        />

        <Box
          component="img"
          sx={{
            position: 'absolute',
            top: 0,
            left: '5px',
            width: '33px',
            height: '14px',
          }}
          alt="Vector"
          src="/vector-5.svg"
        />
      </Box>
    </Box>
  );
};