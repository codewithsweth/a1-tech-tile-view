import { FilterIcon, Grid3X3Icon, SearchIcon } from "lucide-react";
import { ListIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";

export default function FilterSection({ setLayoutView }) {
  return (
    <div className="p-4 w-full flex flex-col items-start relative sticky top-[106px] z-10 bg-[#372e2e]">
      <div className="flex h-12 items-center gap-3 px-2 py-[7px] relative w-full">
        <div className="inline-flex flex-col items-start mt-[-3.00px] mb-[-3.00px] justify-end gap-2 relative">
          <div className="relative flex items-center justify-center w-[72px] mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-medium text-white-faf text-xs tracking-[0.10px] leading-5">
            LAYOUT
          </div>

          <Select
            defaultValue="tiles"
            onValueChange={(value) => setLayoutView(value)}
          >
            <SelectTrigger className="h-[26px] bg-graygray9-18181a border-black rounded text-white-faf">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tiles">
                <div className="flex items-center gap-2">
                  <Grid3X3Icon className="w-3 h-3" />
                  Tiles
                </div>
              </SelectItem>
              <SelectItem value="list">
                <div className="flex items-center gap-2">
                  <ListIcon className="w-3 h-3" />
                  List
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-[308px] h-[38px] items-center gap-2.5 mt-[-2.00px] mb-[-2.00px] bg-graygray7-6a6a71 rounded overflow-hidden border border-solid border-black relative">
          <div className="flex justify-between px-[15px] py-2.5 flex-1 w-full items-center relative">
            <Input
              placeholder="Find a technician"
              className="border-0 bg-transparent text-white-faf placeholder:text-white-faf h-auto p-0 focus-visible:ring-0"
            />
            <SearchIcon className="w-[18px] h-[18px]" />
          </div>
        </div>

        <div className="flex items-end flex-1 justify-end gap-2 relative">
          <Button className="h-[27px] bg-black border border-solid rounded text-white-faf hover:bg-black/80">
            <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-sm">
              Filters
            </span>
            <FilterIcon className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
