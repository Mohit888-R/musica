import { Button } from "@/components/ui/button";
import { Home, MoveRight } from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <h1 className="text-4xl font-bold mb-4">Oops, Page Not Found</h1>
      <p className="text-secondary/80 pb-2">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link
        href={"/"}
        className="flex items-center hover:underline gap-2 text-[20px]"
      >
        {" "}
        <Home /> Go To Home Page <MoveRight size={18} />
      </Link>
    </div>
  );
};

export default Index;
