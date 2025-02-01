import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import MusicPlayer from "@/components/MusicPlayer";
import Partical from "@/components/Partical";
import Project from "@/components/Project";
import Aboutme from "@/components/Aboutme";
import Contactme from "@/components/Contactme";
import Background from "@/components/Background";

const Page = () => {
  return (
    <>
      <Background />
      <div className="">
        <Partical />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Home Component */}
      <div className="" id="home">
        <Home />
      </div>

      {/* About start */}

      <div className="" id="nextSection">
        <Aboutme />
      </div>

      {/* Music Player */}
      <MusicPlayer />

      {/* Project start */}

      <div className="" id="projects">
        <Project />
      </div>

      {/* contsct start */}

      <div className="" id="me">
        <Contactme />
      </div>
      {/* Footer start */}
    </>
  );
};

export default Page;
