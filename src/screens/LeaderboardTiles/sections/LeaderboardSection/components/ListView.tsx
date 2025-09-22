import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Badge } from "../../../../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../../../../components/ui/avatar";

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
    <div className="flex flex-col items-center gap-1 w-full max-w-7xl">
      {data.map((entry, index) => (
        <Card key={index} className="w-full bg-[#18181a] border-0 p-2">
          <CardContent className="p-0">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-9 px-1.5 py-1 w-full bg-white-faf">
                <div className="inline-flex items-center gap-3 px-0 py-0.5">
                  <div className="flex flex-col w-[92px] items-center justify-center">
                    <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                      RANK
                    </div>
                    <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-4xl text-center tracking-[0] leading-[normal]">
                      {entry.rank}
                    </div>
                    <div className="flex w-[89px] items-center justify-center gap-[5px] px-1 py-0">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        SCOREd
                      </div>
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.score}
                      </div>
                    </div>
                  </div>
                  <Avatar className="w-[81px] h-[72px] rounded-lg border border-[#353539]">
                    <AvatarFallback className="bg-gray-200 text-gray-600 text-lg font-semibold">
                      {entry.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col w-[142px] items-start gap-2 pt-2.5 pb-0 px-0">
                    <div className="[font-family:'Work_Sans',Helvetica] font-semibold text-graygray9-18181a text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      {entry.name}
                    </div>
                    <div className="flex flex-col items-start gap-[5px] w-full">
                      <div className="flex items-start gap-1 w-full">
                        <div className="flex gap-[5px] flex-1 items-center">
                          <div className="w-[57px] [font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-[10px] tracking-[0] leading-[normal]">
                            GRAD DATE
                          </div>
                          <div className="flex-1 [font-family:'Work_Sans',Helvetica] font-bold text-graygray8-353539 text-xs text-center tracking-[0] leading-[normal]">
                            {entry.gradDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[9px] w-full">
                        <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-[10px] tracking-[0] leading-[normal]">
                          OPPORTUNITIES
                        </div>
                        <div className="[font-family:'Work_Sans',Helvetica] font-bold text-graygray8-353539 text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                          {entry.opportunities}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-end gap-[9px] pt-3.5 pb-px px-0">
                  <div className="[font-family:'Avenir_Next-Bold',Helvetica] font-bold text-graygray9-18181a text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    Revenue
                  </div>
                  <div className="flex items-center gap-8 w-full">
                    <div className="inline-flex gap-1 items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-[10px] tracking-[0] leading-[normal]">
                        PERIOD
                      </div>
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-graygray8-353539 text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.revenue.period}
                      </div>
                    </div>
                    <div className="inline-flex gap-1 items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-[10px] tracking-[0] leading-[normal]">
                        SELECTED YR
                      </div>
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.revenue.selectedYr}
                      </div>
                      <img className="w-2 h-2" alt="I checkbox blank" />
                    </div>
                    <div className="inline-flex gap-1 items-center">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-[10px] tracking-[0] leading-[normal]">
                        LIFETIME
                      </div>
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-graygray8-353539 text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.revenue.lifetime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[80.25px] items-start justify-center gap-2.5 px-6 py-2 w-full bg-white">
              <div className="flex items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex gap-8 pl-2 pr-0 py-0 w-full items-center">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        OJA
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end gap-2.5">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.oja}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                  <div className="flex gap-8 pl-2 pr-0 py-0 w-full items-center">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        CJA
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end gap-2.5">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.cja}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex gap-8 pl-2 pr-0 py-0 w-full items-center">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        CR%
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end gap-2.5">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.cr}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                  <div className="flex pl-2 pr-0 py-0 w-full items-center">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        GC%
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end gap-2.5">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-graygray8-353539 text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.gc}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                </div>
                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex gap-8 pl-2 pr-0 py-0 w-full items-center">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        PAL GC%
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end gap-2.5">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-greengreen6-1d890b text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.palGc}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                  <div className="flex gap-8 pl-2 pr-0 py-0 w-full items-center">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        MCR%
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end gap-2.5">
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
                  <div className="flex gap-8 pl-2 pr-0 py-0 w-full items-center">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                        RR%
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end gap-2.5">
                      <div className="[font-family:'Work_Sans',Helvetica] font-bold text-[#1c880b] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                        {entry.metrics.rr}
                      </div>
                    </div>
                  </div>
                  <img className="w-full h-px object-cover" alt="Line" src="/line-14.svg" />
                  <div className="flex flex-col items-start gap-[7px] pl-2 pr-0 py-0.5 w-full">
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
                    <div className="inline-flex flex-col items-start justify-center gap-[7px] px-[3px] py-0">
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
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Achievement Badges - positioned absolutely for list view */}
      <div className="absolute top-[374px] left-[652px] w-[135px] h-[59px]">
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
      </div>
      <div className="absolute top-[902px] left-[741px] w-14 h-[63px]">
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
      </div>
    </div>
  );
};