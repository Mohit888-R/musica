import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";

// This is Not LoggedIn NavBar
const NavBar = () => {
  return (
    <div className="flex rounded-lg items-center justify-between px-4 bg-primary text-white py-4">
      {/* go back and go forward navigations */}
      <div className="flex gap-2">
        {/* Go Back Button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ChevronLeft size={24} />
            </TooltipTrigger>
            <TooltipContent>
              <span>Go Back</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Go Forward */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ChevronRight size={24} />
            </TooltipTrigger>
            <TooltipContent>
              <span>Go Forward</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="space-x-2">
        <Button className="text-[18px] text-white rounded-full opacity-70 hover:opacity-100">
          Sign up
        </Button>
        <Button
          variant={"secondary"}
          className="bg-white hover:bg-white text-[18px] rounded-full text-black"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
