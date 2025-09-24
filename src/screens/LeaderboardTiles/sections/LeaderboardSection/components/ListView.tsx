import React from "react";
import { 
  Card, 
  CardContent, 
  Avatar, 
  Chip, 
  Box, 
  Typography,
  Divider
} from '@mui/material';
import { Badge } from '../../../../../components/ui/badge';

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
        gap: 0.125,
        width: '100%',
        maxWidth: '1280px',
      }}
    >
      {data.map((entry, index) => (
        <Card 
          key={index} 
          sx={{ 
            width: '100%', 
            backgroundColor: '#18181a', 
            border: 0,
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
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 9, 
                px: 3, 
                py: 2, 
                width: '100%', 
                backgroundColor: '#fafafa' 
              }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '92px', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '72px'
                  }}>
                    <Typography variant="caption" sx={{ 
                      fontFamily: 'Avenir Next, Helvetica', 
                      fontWeight: 500, 
                      color: '#18181a', 
                      fontSize: '12px' 
                    }}>
                      RANK
                    </Typography>
                    <Typography variant="h3" sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 'bold', 
                      color: '#1c880b', 
                      fontSize: '36px', 
                      textAlign: 'center',
                      lineHeight: 1
                    }}>
                      {entry.rank}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      width: '89px', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '5px', 
                      mt: 0.5
                    }}>
                      <Typography variant="caption" sx={{ 
                        fontFamily: 'Avenir Next, Helvetica', 
                        fontWeight: 500, 
                        color: '#18181a', 
                        fontSize: '12px' 
                      }}>
                        SCORE
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 'bold', 
                        color: '#1c880b', 
                        fontSize: '12px' 
                      }}>
                        {entry.score}
                      </Typography>
                    </Box>
                  </Box>
                  <Avatar sx={{ 
                    width: 81, 
                    height: 72, 
                    borderRadius: 2, 
                    border: '1px solid #353539',
                    backgroundColor: '#e0e0e0',
                    color: '#666',
                    fontSize: '18px',
                    fontWeight: 600,
                    flexShrink: 0
                  }}>
                    {entry.name.split(" ").map((n) => n[0]).join("")}
                  </Avatar>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '142px', 
                    alignItems: 'flex-start', 
                    gap: 1,
                    justifyContent: 'center',
                    minHeight: '72px'
                  }}>
                    <Typography variant="h6" sx={{ 
                      fontFamily: 'Work Sans, Helvetica', 
                      fontWeight: 600, 
                      color: '#18181a', 
                      fontSize: '20px',
                      lineHeight: 1.2
                    }}>
                      {entry.name}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.5, width: '100%' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                          <Typography variant="caption" sx={{ 
                            fontFamily: 'Avenir Next, Helvetica', 
                            fontWeight: 500, 
                            color: '#18181a', 
                            fontSize: '10px',
                            mr: 1
                          }}>
                            GRAD DATE
                          </Typography>
                          <Typography variant="caption" sx={{ 
                            fontFamily: 'Work Sans, Helvetica', 
                            fontWeight: 'bold', 
                            color: '#353539', 
                            fontSize: '12px'
                          }}>
                            {entry.gradDate}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <Typography variant="caption" sx={{ 
                          fontFamily: 'Avenir Next, Helvetica', 
                          fontWeight: 500, 
                          color: '#18181a', 
                          fontSize: '10px',
                          mr: 1
                        }}>
                          OPPORTUNITIES
                        </Typography>
                        <Typography variant="caption" sx={{ 
                          fontFamily: 'Work Sans, Helvetica', 
                          fontWeight: 'bold', 
                          color: '#353539', 
                          fontSize: '12px'
                        }}>
                          {entry.opportunities}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ 
                  display: 'inline-flex', 
                  flexDirection: 'column', 
                  alignItems: 'flex-start', 
                  justifyContent: 'center',
                  gap: 1,
                  minHeight: '72px'
                }}>
                  <Typography variant="caption" sx={{ 
                    fontFamily: 'Avenir Next, Helvetica', 
                    fontWeight: 'bold', 
                    color: '#18181a', 
                    fontSize: '12px' 
                  }}>
                    Revenue
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ 
                        fontFamily: 'Avenir Next, Helvetica', 
                        fontWeight: 500, 
                        color: '#18181a', 
                        fontSize: '10px' 
                      }}>
                        PERIOD
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 'bold', 
                        color: '#353539', 
                        fontSize: '12px'
                      }}>
                        {entry.revenue.period}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ 
                        fontFamily: 'Avenir Next, Helvetica', 
                        fontWeight: 500, 
                        color: '#18181a', 
                        fontSize: '10px' 
                      }}>
                        SELECTED YR
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 'bold', 
                        color: '#1c880b', 
                        fontSize: '12px'
                      }}>
                        {entry.revenue.selectedYr}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ 
                        fontFamily: 'Avenir Next, Helvetica', 
                        fontWeight: 500, 
                        color: '#18181a', 
                        fontSize: '10px' 
                      }}>
                        LIFETIME
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        fontFamily: 'Work Sans, Helvetica', 
                        fontWeight: 'bold', 
                        color: '#353539', 
                        fontSize: '12px'
                      }}>
                        {entry.revenue.lifetime}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: '80px',
              alignItems: 'flex-start', 
              justifyContent: 'center', 
              gap: 1.5, 
              px: 3, 
              py: 2, 
              width: '100%', 
              backgroundColor: 'white' 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, width: '100%' }}>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex justify-between w-full items-center px-1">
                    <div className="flex items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        OJA
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.oja}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                  <div className="flex justify-between w-full items-center px-1">
                    <div className="flex items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        CJA
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.cja}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex justify-between w-full items-center px-1">
                    <div className="flex items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        CR%
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.cr}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                  <div className="flex justify-between w-full items-center px-1">
                    <div className="flex items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        GC%
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-graygray8-353539 text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.gc}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex justify-between w-full items-center px-1">
                    <div className="flex items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        PAL GC%
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-greengreen6-1d890b text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.palGc}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                  <div className="flex justify-between w-full items-center px-1">
                    <div className="flex items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        MCR%
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`[font-family:'Work_Sans',Helvetica] font-bold text-xs tracking-[0] leading-[normal] whitespace-nowrap ${
                          entry.rank === 3 || entry.rank === 4 || entry.rank === 5
                            ? "text-orangeorange5-e5631a"
                            : "text-graygray8-353539"
                        }`}
                      >
                        {entry.metrics.mcr}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex justify-between w-full items-center px-1">
                    <div className="flex items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        RR%
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.rr}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                  <div className="flex flex-col items-start gap-1 px-1 py-0.5 w-full">
                    <div className="flex w-full items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        CSAT%
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-1">
                        <div className="h-3.5 text-[#1c880b] text-right [font-family:'Work_Sans',Helvetica] font-bold text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                          {entry.metrics.csat}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1 px-1 py-0">
                      <div className="[font-family:'Avenir_Next-Bold',Helvetica] font-bold text-graygray9-18181a text-[9px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="text-[#171819]">{entry.metrics.fiveStarJobs}</span>
                        <span className="text-[#171819]">&nbsp;</span>
                        <span className="text-[#9898a1]">(5 Star Jobs) </span>
                        <span className="text-[#171819]"> /&nbsp;&nbsp;{entry.metrics.totalJobs} </span>
                        <span className="text-[#9898a1]">(Total Jobs)</span>
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                </div>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}

      {/* Achievement Badges - positioned absolutely for list view */}
      <Box sx={{ position: 'absolute', top: '374px', left: '652px', width: '135px', height: '59px' }}>
        <div className="inline-flex items-center gap-2.5">
          <div className="relative w-[71px] h-[59.38px] shadow-shadow-1">
            <img className="absolute top-[-9px] left-0 w-[78px] h-[78px]" alt="Ellipse" src="/ellipse-7-1.svg" />
            <div className="absolute top-[11px] left-[18px] w-10 h-10 bg-yellowyellow2-f3e6b9 rounded-[20px] shadow-shadow-2" />
            <div className="absolute top-[17px] left-6 w-[29px] h-[30px] bg-[#ffcb49] rounded-[14.5px/15px]" />
            <img className="absolute -top-0.5 left-5 w-[38px] h-[53px]" alt="Group" src="/group-4.png" />
            <Badge className="absolute top-[47px] left-0 bg-orangeorange5-e5631a text-white text-[10px] font-bold px-1 py-0 h-3 shadow-shadow-2">
              HOT STREAK
            </Badge>
          </div>
          <div className="relative w-[54px] h-[59px]">
            <img className="-top-3 absolute -left-3 w-[78px] h-[78px]" alt="Ellipse" src="/ellipse-7-2.svg" />
            <div className="top-[5px] left-1.5 bg-blueblue6-0c63ca absolute w-[41px] h-[42px] rounded-[20.5px/21px]" />
            <Badge className="absolute top-[47px] left-[3px] bg-blueblue7-075093 text-white text-[10px] font-bold px-2 py-0 h-3 shadow-shadow-2">
              HIGHEST
            </Badge>
            <div className="absolute top-[9px] left-1 w-[51px] h-[34px] shadow-[0px_4px_4px_#00000040]">
              <div className="absolute -top-px -left-px w-[19px] h-3 flex items-center justify-center [-webkit-text-stroke:1px_#01223f] [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                C
              </div>
              <div className="absolute top-1 left-3.5 h-5 flex items-center justify-center [-webkit-text-stroke:1px_#01223f] [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                J
              </div>
              <div className="absolute top-4 left-[26px] w-[18px] h-[17px] flex items-center justify-center [-webkit-text-stroke:1px_#01223f] [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                A
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box sx={{ position: 'absolute', top: '902px', left: '741px', width: '56px', height: '63px' }}>
        <img className="-top-2 absolute -left-3 w-[78px] h-[78px]" alt="Ellipse" src="/ellipse-7.svg" />
        <div className="top-2.5 left-[7px] bg-greengreen4-85dc74 absolute w-[41px] h-[42px] rounded-[20.5px/21px]" />
        <div className="absolute top-[19px] left-2 w-[39px] h-10 bg-white-faf rounded-[19.5px/20px]" />
        <Badge className="absolute top-[51px] left-0.5 bg-greengreen5-46a037 text-white text-[10px] font-bold px-2 py-0 h-3 shadow-shadow-2">
          HIGHEST
        </Badge>
        <div className="absolute top-8 left-[9px] w-9 h-[15px] flex items-center justify-center [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-greengreen8-15570a text-[10px] text-center tracking-[0] leading-[8px]">
          DOOR SALES
        </div>
        <div className="absolute top-[18px] left-3.5 w-7 h-1.5 bg-[#1c880b] border border-solid border-white" />
        <div className="absolute top-[25px] left-3.5 w-7 h-1 bg-[#1c880b] border border-solid border-white" />
        <img className="absolute top-0 left-[7px] w-[41px] h-[17px]" alt="Vector" src="/vector-5.svg" />
      </Box>
    </Box>
  );
};