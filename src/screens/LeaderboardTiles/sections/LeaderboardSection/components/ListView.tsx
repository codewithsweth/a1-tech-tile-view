import React from "react";
import { 
  Card, 
  CardContent, 
  Avatar, 
  Box, 
  Typography
} from '@mui/material';

interface LeaderboardEntry {
  rank: number;
  score: string;
  name: string;
  gradDate: string;
  opportunities: number;
  revenue: {
    period: string;
    selectedYr: string;
    lifetime: string;
  };
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
  badges: string[];
  hasHighestBadge?: boolean;
  hasHotStreakBadge?: boolean;
}

interface ListViewProps {
  data: LeaderboardEntry[];
}

export const ListView: React.FC<ListViewProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        maxWidth: '800px',
        px: 2,
      }}
    >
      {data.map((entry, index) => (
        <Card 
          key={index} 
          sx={{ 
            width: '100%', 
            backgroundColor: '#ffffff',
            border: '3px solid #000000',
            borderRadius: 0,
            boxShadow: 'none',
            position: 'relative',
          }}
        >
          <CardContent sx={{ 
            p: 0,
            '&:last-child': { pb: 0 }
          }}>
            {/* Header Section */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              p: 2,
              backgroundColor: '#f8f9fa'
            }}>
              {/* Rank Section */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                minWidth: '60px'
              }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontFamily: 'Work Sans, Helvetica', 
                    fontWeight: 500, 
                    color: '#666666', 
                    fontSize: '10px',
                    letterSpacing: '0.5px',
                    textAlign: 'center'
                  }}
                >
                  RANK
                </Typography>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontFamily: 'Work Sans, Helvetica', 
                    fontWeight: 'bold', 
                    color: entry.rank <= 3 ? '#1d890b' : '#333333', 
                    fontSize: '36px', 
                    lineHeight: 1,
                    mt: 0.5,
                    textAlign: 'center'
                  }}
                >
                  {entry.rank}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '10px'
                    }}
                  >
                    SCORE
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: entry.rank <= 3 ? '#1d890b' : '#333333', 
                      fontSize: '12px'
                    }}
                  >
                    {entry.score}
                  </Typography>
                </Box>
              </Box>

              {/* Profile Image */}
              <Avatar 
                sx={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: 1,
                  border: '2px solid #000000',
                  backgroundColor: '#e0e0e0',
                  color: '#666',
                  fontSize: '18px',
                  fontWeight: 600,
                  flexShrink: 0
                }}
              >
                {entry.name.split(" ").map((n) => n[0]).join("")}
              </Avatar>

              {/* Name and Details */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 1,
                minWidth: '200px',
                maxWidth: '250px',
                mb: 0
              }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontFamily: 'Work Sans, Helvetica', 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '24px',
                    lineHeight: 1.2,
                    mb: 0
                  }}
                >
                  {entry.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '10px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    GRAD DATE
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 600, 
                      color: '#000000', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.gradDate}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '10px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    OPPORTUNITIES
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 600, 
                      color: '#000000', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.opportunities}
                  </Typography>
                </Box>
              </Box>

              {/* Revenue Section */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start',
                gap: 1,
                flex: 1,
                minWidth: '300px'
              }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontFamily: 'Work Sans, Helvetica', 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '14px'
                  }}
                >
                  Revenue
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 500, 
                        color: '#666666', 
                        fontSize: '10px',
                        letterSpacing: '0.5px',
                        display: 'block'
                      }}
                    >
                      PERIOD
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 'bold', 
                        color: '#000000', 
                        fontSize: '14px'
                      }}
                    >
                      {entry.revenue.period}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 500, 
                        color: '#666666', 
                        fontSize: '10px',
                        letterSpacing: '0.5px',
                        display: 'block'
                      }}
                    >
                      SELECTED YR
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 'bold', 
                        color: '#1d890b', 
                        fontSize: '14px'
                      }}
                    >
                      {entry.revenue.selectedYr}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 500, 
                        color: '#666666', 
                        fontSize: '10px',
                        letterSpacing: '0.5px',
                        display: 'block'
                      }}
                    >
                      LIFETIME
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 'bold', 
                        color: '#000000', 
                        fontSize: '14px'
                      }}
                    >
                      {entry.revenue.lifetime}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Badges - positioned absolutely in top right */}
              {(entry.hasHighestBadge || entry.hasHotStreakBadge) && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    zIndex: 2,
                  }}
                >
                  {entry.hasHotStreakBadge && (
                    <Box
                      sx={{
                        width: '60px',
                        height: '50px',
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '60px',
                          height: '50px',
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '8px',
                            left: '15px',
                            width: '30px',
                            height: '30px',
                            backgroundColor: '#f3e6b9',
                            borderRadius: '50%',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '12px',
                            left: '19px',
                            width: '22px',
                            height: '22px',
                            backgroundColor: '#ffcb49',
                            borderRadius: '50%',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '38px',
                            left: '5px',
                            backgroundColor: '#e5631a',
                            color: 'white',
                            fontSize: '8px',
                            fontWeight: 'bold',
                            padding: '2px 6px',
                            borderRadius: '2px',
                          }}
                        >
                          HOT STREAK
                        </Box>
                      </Box>
                    </Box>
                  )}

                  {entry.hasHighestBadge && (
                    <Box
                      sx={{
                        width: '50px',
                        height: '50px',
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '50px',
                          height: '50px',
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '8px',
                            left: '10px',
                            width: '30px',
                            height: '30px',
                            backgroundColor: '#0c63ca',
                            borderRadius: '50%',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '38px',
                            left: '8px',
                            backgroundColor: '#075093',
                            color: 'white',
                            fontSize: '8px',
                            fontWeight: 'bold',
                            padding: '2px 6px',
                            borderRadius: '2px',
                          }}
                        >
                          HIGHEST
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              )}
            </Box>

            {/* Metrics Section */}
            <Box sx={{ 
              display: 'flex', 
              p: 2,
              backgroundColor: '#ffffff',
              gap: 4
            }}>
              {/* Left Column */}
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '12px'
                    }}
                  >
                    OJA
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: '#1d890b', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.metrics.oja}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mb: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '12px'
                    }}
                  >
                    CJA
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: '#1d890b', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.metrics.cja}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0' }} />
              </Box>

              {/* Middle Left Column */}
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '12px'
                    }}
                  >
                    CR%
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: '#1d890b', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.metrics.cr}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mb: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '12px'
                    }}
                  >
                    GC%
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: '#666666', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.metrics.gc}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0' }} />
              </Box>

              {/* Middle Right Column */}
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '12px'
                    }}
                  >
                    PAL GC%
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: '#1d890b', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.metrics.palGc}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mb: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '12px'
                    }}
                  >
                    MCR%
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: entry.rank >= 3 && entry.rank <= 5 ? '#e5631a' : '#666666', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.metrics.mcr}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0' }} />
              </Box>

              {/* Right Column */}
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 500, 
                      color: '#666666', 
                      fontSize: '12px'
                    }}
                  >
                    RR%
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: '#1d890b', 
                      fontSize: '14px'
                    }}
                  >
                    {entry.metrics.rr}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mb: 1 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 0.5 }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 500, 
                        color: '#666666', 
                        fontSize: '12px'
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
                        fontSize: '14px'
                      }}
                    >
                      {entry.metrics.csat}
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mb: 0.5 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 500, 
                        color: '#999999', 
                        fontSize: '10px',
                        textAlign: 'right',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <span style={{ color: '#000000', fontWeight: 'bold' }}>{entry.metrics.fiveStarJobs}</span>
                      <span style={{ color: '#999999' }}> (5 Star Jobs) / </span>
                      <span style={{ color: '#000000', fontWeight: 'bold' }}>{entry.metrics.totalJobs}</span>
                      <span style={{ color: '#999999' }}> (Total Jobs)</span>
                    </Typography>
                    <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mt: 0.5 }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};