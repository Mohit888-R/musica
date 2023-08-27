import { Home, Search } from "lucide-react";
import Link from "next/link";

const SidebarPagesRoute = () => {
  return (
    <div className=" bg-primary rounded-lg text-white  px-4 space-y-4 flex-col pl-4 py-4">
      <Link
        href={"/"}
        className="gap-2 items-center hover:bg-secondary/20 flex pl-2 pr-6 rounded-lg  py-2"
      >
        <Home /> <span>Home</span>
      </Link>
      <Link
        href={"/"}
        className="gap-2 items-center hover:bg-secondary/20 flex pl-2 pr-6 rounded-lg  py-2"
      >
        <Search /> <span>Search</span>
      </Link>
    </div>
  );
};

export default SidebarPagesRoute;
