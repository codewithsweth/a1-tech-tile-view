import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  {
    icon: "/icon-7.svg",
    label: "HOME",
    isActive: false,
  },
  {
    icon: "/icon-2.svg",
    label: "JOB",
    isActive: false,
  },
  {
    icon: "/icon-5.svg",
    label: "SCORECARD",
    isActive: true,
  },
  {
    icon: "/icon-6.svg",
    label: "LOGOUT",
    isActive: false,
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <nav className="flex w-full h-28 items-center justify-center gap-[89px] px-8 py-0 relative bg-black">
      <div className="flex items-center justify-center gap-12 relative flex-1 self-stretch grow">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex flex-col items-center gap-4 px-0.5 py-2 relative flex-1 grow h-auto bg-transparent hover:bg-transparent"
          >
            <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] rounded-[100px] overflow-hidden">
              <div
                className={`inline-flex justify-center px-4 py-1 flex-[0_0_auto] items-center relative ${item.isActive ? "bg-[#df3a3a]" : ""} rounded-[100px]`}
              >
                <img className="relative w-6 h-6" alt="Icon" src={item.icon} />
              </div>
            </div>

            <div className="relative self-stretch [font-family:'Work_Sans',Helvetica] font-extrabold text-white-faf text-base text-center tracking-[1.15px] leading-6">
              {item.label}
            </div>
          </Button>
        ))}
      </div>

      <div className="absolute left-[calc(50.00%_-_28px)] bottom-0 w-14 h-[120px]" />
    </nav>
  );
};
