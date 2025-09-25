import React from 'react';
import { Box, Typography } from '@mui/material';
import { MetricRow } from './MetricRow';

interface MetricsSectionProps {
  metrics: {
    oja: string;
    cja: string;
    cr: string;
    gc: string;
    palGc: string;
    mcr: string;
    rr: string;
    csat: string;
    fiveStarJobs: number;
    totalJobs: number;
  };
  rank: number;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics, rank }) => {
  const getMcrColor = () => {
    return rank >= 3 && rank <= 5 ? '#e5631a' : '#666666';
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      p: 1.5,
      backgroundColor: '#ffffff',
      gap: 2,
      height: 'calc(100% - 80px)',
      overflow: 'hidden'
    }}>
      {/* Left Column */}
      <Box sx={{ flex: 1 }}>
        <MetricRow label="OJA" value={metrics.oja} valueColor="#1d890b" />
        <MetricRow label="CJA" value={metrics.cja} valueColor="#1d890b" showDivider={false} />
      </Box>

      {/* Middle Left Column */}
      <Box sx={{ flex: 1 }}>
        <MetricRow label="CR%" value={metrics.cr} valueColor="#1d890b" />
        <MetricRow label="GC%" value={metrics.gc} showDivider={false} />
      </Box>

      {/* Middle Right Column */}
      <Box sx={{ flex: 1 }}>
        <MetricRow label="PAL GC%" value={metrics.palGc} valueColor="#1d890b" />
        <MetricRow label="MCR%" value={metrics.mcr} valueColor={getMcrColor()} showDivider={false} />
      </Box>

      {/* Right Column */}
      <Box sx={{ flex: 1 }}>
        <MetricRow label="RR%" value={metrics.rr} valueColor="#1d890b" />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Typography 
              variant="caption" 
              sx={{ 
                fontFamily: 'Work Sans, Helvetica', 
                fontWeight: 500, 
                color: '#666666', 
                fontSize: '10px'
              }}
            >
              CSAT%
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontFamily: 'Work Sans, Helvetica', 
                fontWeight: 'bold', 
                color: '#1d890b', 
                fontSize: '11px'
              }}
            >
              {metrics.csat}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Typography 
              variant="caption" 
              sx={{ 
                fontFamily: 'Work Sans, Helvetica', 
                fontWeight: 500, 
                color: '#999999', 
                fontSize: '8px',
                textAlign: 'right',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ color: '#000000', fontWeight: 'bold' }}>{metrics.fiveStarJobs}</span>
              <span style={{ color: '#999999' }}> (5 Star Jobs) / </span>
              <span style={{ color: '#000000', fontWeight: 'bold' }}>{metrics.totalJobs}</span>
              <span style={{ color: '#999999' }}> (Total Jobs)</span>
            </Typography>
            <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mt: 0.5 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};