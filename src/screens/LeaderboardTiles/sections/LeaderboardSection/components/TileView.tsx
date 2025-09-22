import { Card, CardContent } from "../../../../../components/ui/card";
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
    <div className="flex flex-col items-center gap-[5px] w-full max-w-6xl">
      {Array.from({ length: 5 }, (_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 w-full justify-items-center py-0 relative"
        >
          {leaderboardData
            .slice(rowIndex * 2, rowIndex * 2 + 2)
            .map((person) => (
              <Card
                key={person.rank}
                className="flex w-full max-w-[400px] min-w-[320px] gap-1 items-start p-1 relative bg-white-faf border-0"
              >
                <CardContent className="p-0 flex gap-1 w-full">
                  <div className="flex flex-col w-full max-w-[186px] min-w-[140px] h-[165px] items-center gap-2.5 relative rounded-lg overflow-hidden border border-solid border-[#171819] flex-shrink-0">
                    <div className="h-[184.08px] relative w-full" />
                  </div>

                  <div className="inline-flex flex-col items-start relative flex-1">
                    <div className="flex flex-col items-start justify-end gap-3 relative w-full">
                      <div className="flex flex-col items-start justify-end gap-2 pt-1.5 pb-1 px-1.5 relative w-full bg-white-faf">
                        <div className="flex items-end relative w-full">
                          <div className="inline-flex flex-col items-start gap-1 relative flex-1">
                            <div className="relative w-[34px] h-3.5 mt-[-1.00px] [font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                              RANK
                            </div>

                            <div className="relative flex items-center justify-center w-full h-6 [font-family:'Work_Sans',Helvetica] font-bold text-greengreen6-1d890b text-2xl sm:text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                              {person.rank}
                            </div>
                          </div>

                          <div className="inline-flex flex-col items-start gap-1 relative flex-1">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                              SCORE
                            </div>

                            <div className="relative flex items-center justify-center w-full h-[22px] [font-family:'Work_Sans',Helvetica] font-bold text-greengreen6-1d890b text-2xl sm:text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                              {person.score}
                            </div>
                          </div>
                        </div>

                        <div className="relative w-full [font-family:'Work_Sans',Helvetica] font-semibold text-graygray9-18181a text-lg sm:text-xl tracking-[0] leading-[normal] truncate">
                          {person.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full items-start justify-center gap-2.5 px-1 py-1.5 relative bg-graygray1-f2f4f8">
                      <div className="flex flex-col items-start justify-center relative w-full">
                        <div className="w-full gap-px flex flex-col items-start relative">
                          <div className="flex items-center justify-between w-full relative">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                              CURRENT YEAR
                            </div>

                            <div className="relative flex items-center justify-center w-fit [font-family:'Work_Sans',Helvetica] font-bold text-greengreen6-1d890b text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap flex-shrink-0">
                              {person.currentYear}
                            </div>
                          </div>

                          <img
                            className="relative w-full h-px object-cover"
                            alt="Line"
                            src="/line-16.svg"
                          />

                          <div className="flex items-center justify-between w-full relative">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                              PERIOD
                            </div>

                            <div className="relative flex items-center justify-center w-fit [font-family:'Work_Sans',Helvetica] font-bold text-graygray8-353539 text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap flex-shrink-0">
                              {person.period}
                            </div>
                          </div>

                          <img
                            className="relative w-full h-px object-cover"
                            alt="Line"
                            src="/line-16.svg"
                          />

                          <div className="flex items-center justify-between w-full relative">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                              OJA
                            </div>

                            <div className="relative flex items-center justify-center w-fit [font-family:'Work_Sans',Helvetica] font-bold text-greengreen6-1d890b text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap flex-shrink-0">
                              {person.oja}
                            </div>
                          </div>

                          <img
                            className="relative w-full h-px object-cover"
                            alt="Line"
                            src="/line-16.svg"
                          />

                          <div className="flex flex-col h-4 items-center justify-between relative w-full">
                            <div className="flex items-center justify-between relative w-full">
                              <div className="relative w-fit mt-[-1.00px] [font-family:'Avenir_Next-Medium',Helvetica] font-medium text-graygray9-18181a text-xs tracking-[0] leading-[normal]">
                                GC%
                              </div>

                              <div className="relative flex items-center justify-center w-fit [font-family:'Work_Sans',Helvetica] font-bold text-graygray8-353539 text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap flex-shrink-0">
                                {person.gc}
                              </div>
                            </div>
                          </div>

                          <img
                            className="relative w-full h-px object-cover"
                            alt="Line"
                            src="/line-16.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {person.hasHighestBadge && (
                    <div className="absolute top-[113px] left-[143px] w-11 h-[51px]">
                      <div className="relative left-px w-[46px] h-[51px]">
                        <img
                          className="absolute -top-1.5 -left-2.5 w-[63px] h-[63px]"
                          alt="Ellipse"
                          src="/ellipse-7-1.svg"
                        />

                        <div className="absolute top-2 left-1.5 w-[33px] h-[34px] bg-greengreen4-85dc74 rounded-[16.56px/16.97px]" />

                        <div className="absolute top-[15px] left-1.5 w-8 h-8 bg-white-faf rounded-[15.75px/16.16px]" />

                        <div className="flex w-[41px] h-2.5 items-center justify-center gap-[8.08px] px-[6.46px] py-[8.08px] absolute top-[41px] left-0.5 bg-greengreen5-46a037 shadow-[0px_1.62px_6.46px_#00000014,0px_4.85px_4.85px_#0000000a,0px_2.42px_4.85px_#0000000a]">
                          <div className="relative flex items-center justify-center w-fit mt-[-7.04px] mb-[-5.42px] ml-[-4.86px] mr-[-4.86px] [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-white text-[8.6px] text-center tracking-[0] leading-[8.6px] whitespace-nowrap">
                            HIGHEST
                          </div>
                        </div>

                        <div className="absolute top-[26px] left-[7px] w-[29px] h-3 flex items-center justify-center [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-greengreen8-15570a text-[8.1px] text-center tracking-[0] leading-[6.5px]">
                          DOOR SALES
                        </div>

                        <div className="top-[15px] h-[5px] absolute left-[11px] w-[23px] bg-greengreen6-1d890b border-[0.81px] border-solid border-white" />

                        <div className="top-5 h-[3px] absolute left-[11px] w-[23px] bg-greengreen6-1d890b border-[0.81px] border-solid border-white" />

                        <img
                          className="absolute top-0 left-[5px] w-[33px] h-3.5"
                          alt="Vector"
                          src="/vector-5.svg"
                        />
                      </div>
                    </div>
                  )}

                  {person.hasHotStreakBadge && (
                    <div className="absolute top-[113px] left-[196px] w-[61px] h-[51px]">
                      <div className="relative w-[60.86px] h-[50.9px] shadow-[0px_0.86px_2.57px_#00000014,0px_0.86px_1.71px_#0000000a,0px_0px_10.29px_#0000000a]">
                        <img
                          className="top-[-7px] left-0 absolute w-[67px] h-[67px]"
                          alt="Ellipse"
                          src="/ellipse-7.svg"
                        />

                        <div className="absolute top-[9px] left-[15px] w-[34px] h-[34px] bg-yellowyellow2-f3e6b9 rounded-[17.14px] shadow-[0px_1.71px_6.86px_#00000014,0px_5.14px_5.14px_#0000000a,0px_2.57px_5.14px_#0000000a]" />

                        <div className="absolute top-[15px] left-[21px] w-[25px] h-[26px] bg-[#ffcb49] rounded-[12.43px/12.86px]" />

                        <img
                          className="absolute -top-0.5 left-[17px] w-[33px] h-[45px]"
                          alt="Group"
                          src="/group-4.png"
                        />

                        <div className="inline-flex h-2.5 items-center justify-center gap-[8.57px] px-[3.43px] py-[8.57px] absolute top-[41px] left-px bg-orangeorange5-e5631a shadow-[0px_1.71px_6.86px_#00000014,0px_5.14px_5.14px_#0000000a,0px_2.57px_5.14px_#0000000a]">
                          <div className="relative flex items-center justify-center w-fit mt-[-7.29px] mb-[-5.57px] [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-white text-[8.6px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                            HOT STREAK
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
        </div>
      ))}
    </div>
  );
}
