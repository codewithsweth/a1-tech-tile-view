import React from "react";
import { 
  Card, 
  CardContent, 
  Avatar, 
  Box, 
  Typography,
  Divider
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
        gap: 0.25,
        width: '100%',
        maxWidth: '1280px',
      }}
    >
      {data.map((entry, index) => (
        <Card 
          key={index} 
          sx={{ 
            width: '100%', 
            backgroundColor: '#ffffff', 
            border: '2px solid #000000',
            borderRadius: 0,
            p: 0,
            height: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <CardContent sx={{ 
            p: 0, 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            '&:last-child': { pb: 0 }
          }}>
            {/* Header Section */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              p: 2, 
              width: '100%', 
              backgroundColor: '#ffffff',
              borderBottom: '1px solid #e0e0e0'
            }}>
              {/* Rank and Score */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start',
                minWidth: '80px'
              }}>
                <Typography variant="caption" sx={{ 
                  fontWeight: 600, 
                  color: '#666666', 
                  fontSize: '11px',
                  letterSpacing: '0.5px',
                  mb: 0.5
                }}>
                  RANK
                </Typography>
                <Typography variant="h2" sx={{ 
                  fontWeight: 'bold', 
                  color: '#4CAF50', 
                  fontSize: '32px', 
                  lineHeight: 1,
                  mb: 1
                }}>
                  {entry.rank}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#666666', 
                    fontSize: '11px',
                    letterSpacing: '0.5px'
                  }}>
                    SCORE
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 'bold', 
                    color: '#4CAF50', 
                    fontSize: '12px'
                  }}>
                    {entry.score}
                  </Typography>
                </Box>
              </Box>

              {/* Avatar and Name */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: 2,
                    border: '2px solid #e0e0e0'
                  }}
                  src="/api/placeholder/80/80"
                >
                  {entry.name.split(" ").map((n) => n[0]).join("")}
                </Avatar>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '20px',
                    lineHeight: 1.2
                  }}>
                    {entry.name}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box>
                      <Typography variant="caption" sx={{ 
                        fontWeight: 600, 
                        color: '#666666', 
                        fontSize: '10px',
                        letterSpacing: '0.5px'
                      }}>
                        GRAD DATE
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 600, 
                        color: '#000000', 
                        fontSize: '12px'
                      }}>
                        {entry.gradDate}
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography variant="caption" sx={{ 
                        fontWeight: 600, 
                        color: '#666666', 
                        fontSize: '10px',
                        letterSpacing: '0.5px'
                      }}>
                        OPPORTUNITIES
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 600, 
                        color: '#000000', 
                        fontSize: '12px'
                      }}>
                        {entry.opportunities}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Revenue Section */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start',
                minWidth: '200px'
              }}>
                <Typography variant="caption" sx={{ 
                  fontWeight: 600, 
                  color: '#000000', 
                  fontSize: '12px',
                  mb: 1
                }}>
                  Revenue
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Box>
                    <Typography variant="caption" sx={{ 
                      fontWeight: 600, 
                      color: '#666666', 
                      fontSize: '10px',
                      letterSpacing: '0.5px'
                    }}>
                      PERIOD
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      fontWeight: 'bold', 
                      color: '#000000', 
                      fontSize: '12px'
                    }}>
                      {entry.revenue.period}
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="caption" sx={{ 
                      fontWeight: 600, 
                      color: '#666666', 
                      fontSize: '10px',
                      letterSpacing: '0.5px'
                    }}>
                      SELECTED YR
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      fontWeight: 'bold', 
                      color: '#4CAF50', 
                      fontSize: '12px'
                    }}>
                      {entry.revenue.selectedYr}
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="caption" sx={{ 
                      fontWeight: 600, 
                      color: '#666666', 
                      fontSize: '10px',
                      letterSpacing: '0.5px'
                    }}>
                      LIFETIME
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      fontWeight: 'bold', 
                      color: '#000000', 
                      fontSize: '12px'
                    }}>
                      {entry.revenue.lifetime}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Metrics Section */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 4,
              p: 2, 
              width: '100%', 
              backgroundColor: '#ffffff'
            }}>
              {/* First Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: '80px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '11px'
                  }}>
                    OJA
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'bold', 
                    color: '#4CAF50', 
                    fontSize: '12px'
                  }}>
                    {entry.metrics.oja}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '11px'
                  }}>
                    CJA
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'bold', 
                    color: '#4CAF50', 
                    fontSize: '12px'
                  }}>
                    {entry.metrics.cja}
                  </Typography>
                </Box>
              </Box>

              {/* Second Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: '80px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '11px'
                  }}>
                    CR%
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'bold', 
                    color: '#4CAF50', 
                    fontSize: '12px'
                  }}>
                    {entry.metrics.cr}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '11px'
                  }}>
                    GC%
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'bold', 
                    color: '#000000', 
                    fontSize: '12px'
                  }}>
                    {entry.metrics.gc}
                  </Typography>
                </Box>
              </Box>

              {/* Third Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: '100px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '11px'
                  }}>
                    PAL GC%
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'bold', 
                    color: '#4CAF50', 
                    fontSize: '12px'
                  }}>
                    {entry.metrics.palGc}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '11px'
                  }}>
                    MCR%
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'bold', 
                    color: '#FF9800', 
                    fontSize: '12px'
                  }}>
                    {entry.metrics.mcr}
                  </Typography>
                </Box>
              </Box>

              {/* Fourth Column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: '80px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '11px'
                  }}>
                    RR%
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'bold', 
                    color: '#4CAF50', 
                    fontSize: '12px'
                  }}>
                    {entry.metrics.rr}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600, 
                    color: '#000000', 
                    fontSize: '11px'
                  }}>
                    CSAT%
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'bold', 
                    color: '#4CAF50', 
                    fontSize: '12px'
                  }}>
                    {entry.metrics.csat}
                  </Typography>
                </Box>
              </Box>

              {/* Jobs Info */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', ml: 'auto' }}>
                <Typography variant="caption" sx={{ 
                  fontWeight: 600, 
                  color: '#666666', 
                  fontSize: '10px'
                }}>
                  <span style={{ color: '#000000', fontWeight: 'bold' }}>{entry.metrics.fiveStarJobs}</span>
                  <span style={{ color: '#999999' }}> (5 Star Jobs) / </span>
                  <span style={{ color: '#000000', fontWeight: 'bold' }}>{entry.metrics.totalJobs}</span>
                  <span style={{ color: '#999999' }}> (Total Jobs)</span>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};