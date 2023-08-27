import albums from "@/lib/fetchers/albums";
import NavBar from "../../Header/NavBar";
import MainContent from "./MainContent";
import { useEffect } from "react";

// Main Content Section of Not LoggedIn Home Page
const MainPage = () => {
  useEffect(() => {
    albums();
  });
  return (
    <div>
      <NavBar />
      <MainContent />
    </div>
  );
};

export default MainPage;
