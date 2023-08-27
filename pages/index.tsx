import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Page/Home/Sidebar";
import MainPage from "@/components/Page/Home/MainPage";
import useResponsive from "@/hooks/useResponsive";

export default function Home() {
  const currentBreakpoint = useResponsive();
  return (
    <div className="flex bg-primary/80 gap-2 p-2">
      {/* Sidebar of Home page until not loggedIn */}
      {currentBreakpoint == "lg" && (
        <div className="w-2/12">
          <Sidebar />
        </div>
      )}

      {currentBreakpoint == "xl" && (
        <div className="w-2/12">
          <Sidebar />
        </div>
      )}

      {currentBreakpoint == "lg" && (
        <div className="w-full">
          <MainPage />
        </div>
      )}
      {currentBreakpoint == "xl" && (
        <div className="w-full">
          <MainPage />
        </div>
      )}
      {currentBreakpoint == "md" && (
        <div className="w-full">
          <MainPage />
        </div>
      )}
      {currentBreakpoint == "sm" && (
        <div className="w-full">
          <MainPage />
        </div>
      )}
    </div>
  );
}
