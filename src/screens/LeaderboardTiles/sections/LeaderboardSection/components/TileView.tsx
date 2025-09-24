import React from 'react';
import { 
  Card, 
  CardContent, 
  Box, 
  Typography,
  Grid
} from '@mui/material';

const leaderboardData = [
  {
    rank: 1,
    score: "98.8%",
    name: "Jimmy Buxton",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 2,
    score: "98.8%",
    name: "Joe Bennington",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: true,
    hasHotStreakBadge: false,
  },
  {
    rank: 3,
    score: "98.8%",
    name: "Rick Sanchez",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: true,
    hasHotStreakBadge: true,
  },
  {
    rank: 4,
    score: "98.8%",
    name: "Jackie Williams",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 5,
    score: "98.8%",
    name: "Will Stephenson",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 6,
    score: "98.8%",
    name: "Jeff Cooper",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 7,
    score: "98.8%",
    name: "Rick Ramirez",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 8,
    score: "98.8%",
    name: "Corey Buehler",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 9,
    score: "98.8%",
    name: "Andrew Santini",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
  {
    rank: 10,
    score: "98.8%",
    name: "Jenny Gaviolini",
    currentYear: "$1.48M",
    period: "$1,484.43K",
    oja: "$1.48M",
    gc: "14.9%",
    hasHighestBadge: false,
    hasHotStreakBadge: false,
  },
];

export default function TileView() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        width: '100%',
        maxWidth: '1536px',
      }}
    >
      {Array.from({ length: 5 }, (_, rowIndex) => (
        <Grid
          container
          key={rowIndex}
          spacing={0.5}
          sx={{
            width: '100%',
            justifyContent: 'center',
            mb: 0.5,
          }}
        >
          {leaderboardData
            .slice(rowIndex * 2, rowIndex * 2 + 2)
            .map((person) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={6} 
                lg={6} 
                key={person.rank}
                sx={{ 
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center'
                }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    width: { xs: '100%', sm: '400px' },
                    maxWidth: '400px',
                    height: '175px',
                    gap: 0.5,
                    alignItems: 'flex-start',
                    p: 0.5,
                    backgroundColor: '#fafafa',
                    border: 0,
                    borderRadius: 0,
                    position: 'relative',
                  }}
                >
                  <CardContent sx={{ 
                    p: 0, 
                    display: 'flex', 
                    gap: 0.5, 
                    width: '100%',
                    height: '100%',
                    '&:last-child': { pb: 0 }
                  }}>
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

                    <Box
                      sx={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        flex: 1,
                        height: '163px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-end',
                          gap: 0.5,
                          width: '100%',
                          height: '80px',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            gap: 0.5,
                            pt: 0.5,
                            pb: 0.5,
                            px: 0.75,
                            width: '100%',
                            backgroundColor: '#fafafa',
                            height: '100%',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-end',
                              width: '100%',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: 0.5,
                                flex: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  width: '34px',
                                  height: '14px',
                                  fontFamily: 'Avenir Next-Medium, Helvetica',
                                  fontWeight: 500,
                                  color: '#18181a',
                                  fontSize: '12px',
                                  letterSpacing: 0,
                                  lineHeight: 'normal',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                RANK
                              </Typography>

                              <Typography
                                sx={{
                                  display: 'flex', 
                                  alignItems: 'center',
                                  justifyContent: 'flex-start',
                                  width: '100%', 
                                  height: '24px',
                                  fontFamily: 'Work Sans, Helvetica',
                                  fontWeight: 'bold',
                                  color: '#1d890b',
                                  fontSize: { xs: '24px', sm: '30px' },
                                  textAlign: 'left',
                                  letterSpacing: 0,
                                  lineHeight: 'normal',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {person.rank}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: 0.5,
                                flex: 1,
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
                                SCORE
                              </Typography>

                              <Typography
                                sx={{
                                  display: 'flex', 
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '100%', 
                                  height: '22px',
                                  fontFamily: 'Work Sans, Helvetica',
                                  fontWeight: 'bold',
                                  color: '#1d890b',
                                  fontSize: { xs: '24px', sm: '30px' },
                                  textAlign: 'center',
                                  letterSpacing: 0,
                                  lineHeight: 'normal',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {person.score}
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            sx={{
                              width: '100%',
                              fontFamily: 'Work Sans, Helvetica',
                              fontWeight: 600,
                              color: '#18181a',
                              fontSize: { xs: '18px', sm: '20px' },
                              letterSpacing: 0,
                              lineHeight: 'normal',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {person.name}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: '100%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          gap: 0.25,
                          px: 0.75,
                          py: 0.5,
                          backgroundColor: '#f2f4f8',
                          height: '83px',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                          }}
                        >
                          <Box
                            sx={{
                              width: '100%',
                              gap: 0.25,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                            }}
                          >
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
                                CURRENT YEAR
                              </Typography>

                              <Typography
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontFamily: 'Work Sans, Helvetica',
                                  fontWeight: 'bold',
                                  color: '#1d890b',
                                  fontSize: '12px',
                                  textAlign: 'center',
                                  letterSpacing: 0,
                                  lineHeight: 'normal',
                                  whiteSpace: 'nowrap',
                                  flexShrink: 0,
                                }}
                              >
                                {person.currentYear}
                              </Typography>
                            </Box>

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
                                PERIOD
                              </Typography>

                              <Typography
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontFamily: 'Work Sans, Helvetica',
                                  fontWeight: 'bold',
                                  color: '#353539',
                                  fontSize: '12px',
                                  textAlign: 'center',
                                  letterSpacing: 0,
                                  lineHeight: 'normal',
                                  whiteSpace: 'nowrap',
                                  flexShrink: 0,
                                }}
                              >
                                {person.period}
                              </Typography>
                            </Box>

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
                                OJA
                              </Typography>

                              <Typography
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontFamily: 'Work Sans, Helvetica',
                                  fontWeight: 'bold',
                                  color: '#1d890b',
                                  fontSize: '12px',
                                  textAlign: 'center',
                                  letterSpacing: 0,
                                  lineHeight: 'normal',
                                  whiteSpace: 'nowrap',
                                  flexShrink: 0,
                                }}
                              >
                                {person.oja}
                              </Typography>
                            </Box>

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
                                GC%
                              </Typography>

                              <Typography
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontFamily: 'Work Sans, Helvetica',
                                  fontWeight: 'bold',
                                  color: '#353539',
                                  fontSize: '12px',
                                  textAlign: 'center',
                                  letterSpacing: 0,
                                  lineHeight: 'normal',
                                  whiteSpace: 'nowrap',
                                  flexShrink: 0,
                                }}
                              >
                                {person.gc}
                              </Typography>
                            </Box>

                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    {person.hasHighestBadge && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '113px',
                          left: '143px',
                          width: '44px',
                          height: '51px',
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
                    )}

                    {person.hasHotStreakBadge && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '113px',
                          left: '196px',
                          width: '61px',
                          height: '51px',
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
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      ))}
    </Box>
  );
}