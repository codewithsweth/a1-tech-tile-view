import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";

export default function HeaderSection() {
  return (
    <div className="flex flex-col items-start gap-4 px-6 py-0 relative w-full bg-[#240909] sticky top-0 z-10">
      <div className="flex items-center justify-between px-0 py-6 relative w-full">
        <div className="inline-flex flex-col items-start justify-center gap-4 relative">
          <div className="flex h-[26px] items-center gap-[22px] relative w-full">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white-faf text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              Leaderboard - August 2025
            </div>
          </div>
        </div>

        <div className="flex w-[337px] items-start justify-end gap-2 relative">
          <div className="inline-flex items-start gap-2 flex-col justify-center relative">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-medium text-white-faf text-xs text-center tracking-[0.10px] leading-5 whitespace-nowrap">
              TIMEFRAME
            </div>

            <Select defaultValue="mtd">
              <SelectTrigger className="h-[26px] bg-redred5-df3a3a border-black rounded text-white-faf">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mtd">MTD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="inline-flex items-start gap-2 flex-col justify-center relative">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-medium text-white-faf text-xs text-center tracking-[0.10px] leading-5 whitespace-nowrap">
              SORT BY
            </div>

            <Select defaultValue="rank">
              <SelectTrigger className="h-[26px] bg-redred5-df3a3a border-black rounded text-white-faf">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rank">Rank</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
