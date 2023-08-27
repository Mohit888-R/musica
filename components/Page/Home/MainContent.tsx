import Footer from "@/components/Footer/Footer";
import { Separator } from "@/components/ui/separator";
import Focus from "./Row/Focus";
import SoundOfIndia from "./Row/SoundOfIndia";
import MusicaPlaylist from "./Row/MusicaPlaylist";

const MainContent = () => {
  return (
    <div className="bg-primary/90 text-white p-4 -mt-2 rounded-b-lg">
      <MusicaPlaylist />
      <Focus />
      <SoundOfIndia />
      <Separator className="mt-8"></Separator>
      <Footer />
    </div>
  );
};

export default MainContent;
