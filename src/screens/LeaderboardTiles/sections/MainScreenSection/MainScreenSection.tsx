import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const MainScreenSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("leaderboard");

  const tabItems = [
    { id: "scorecard", label: "Scorecard" },
    { id: "leaderboard", label: "Leaderboard" },
    { id: "instructions", label: "Instructions" },
  ];

  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex w-full h-12 items-center justify-between relative bg-white-faf">
        <div className="flex items-start pl-[52px] pr-0 py-0 relative flex-1 grow">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-12">
            <TabsList className="h-12 bg-transparent p-0 space-x-0">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`
                    inline-flex flex-col h-12 items-center justify-end relative flex-[0_0_auto] 
                    bg-transparent border-0 rounded-none px-4 py-3.5 data-[state=active]:bg-transparent
                    data-[state=active]:shadow-none hover:bg-transparent
                  `}
                >
                  <div className="flex flex-col items-center justify-center relative flex-1 self-stretch w-full grow">
                    <div className="inline-flex items-center justify-center gap-1 relative flex-1 grow">
                      <span className="relative flex items-center justify-center w-fit [font-family:'Work_Sans',Helvetica] font-medium text-[#171d1b] text-sm text-center tracking-[0.10px] leading-5 whitespace-nowrap">
                        {tab.label}
                      </span>
                    </div>
                    {tab.id === activeTab && (
                      <div className="absolute w-full left-0 bottom-0 h-0.5 bg-redred6-d10909" />
                    )}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="inline-flex items-center pl-0 pr-[11px] py-0 relative self-stretch flex-[0_0_auto]">
          <Badge
            variant="secondary"
            className="inline-flex h-5 items-center justify-center gap-2 px-2 py-1 relative flex-[0_0_auto] bg-graygray1-f2f4f8 rounded-md border-0 hover:bg-graygray1-f2f4f8"
          >
            <span className="mt-[-1.00px] font-normal text-[#574445] text-[10px] tracking-[0] leading-[normal] relative flex items-center justify-center w-fit [font-family:'Work_Sans',Helvetica] text-center whitespace-nowrap">
              <span className="font-medium">
                Latest data available to date&nbsp;&nbsp;
              </span>
              <span className="font-semibold">8-24-2025</span>
            </span>
          </Badge>
        </div>
      </div>
    </section>
  );
};
