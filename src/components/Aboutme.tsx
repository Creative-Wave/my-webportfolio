import { Facebook, Github, Linkedin } from "lucide-react";
import Expertice from "./Expertice";
import Atom from "./Atom";
import Keyskill from "./Keyskill";
import Progressbar from "./Progressbar";

const Aboutme = () => {
  return (
    <>
      <div
        className="overflow-hidden flex flex-col justify-center items-center md:px-20 px-6 py-16"
        id="about">
        <div className="text-center mb-6">
          <h2 className="md:text-3xl text-md font-bold pt-8">About Me</h2>
          <hr className="md:w-40 w-20 mx-auto border-t-2 border-black dark:border-white" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 w-full h-full mb-8 md:mb-0">
            <div className=" text-xl">Hi there,</div>
            <div className="text-[#FF8000] text-3xl md:text-2xl font-bold">
              I'm Jayanta Debnath
            </div>
            <div className="mt-4 text-[12px] md:text-[14px]">
              I am a skilled UI/UX Designer with 2 years of experience, bringing
              a combined focus on user-centric design and front-end development
              to create exceptional mobile applications. I excel at translating
              complex user needs into intuitive and visually engaging interfaces
              that prioritize user experience (UX) principles. My expertise lies
              in crafting user flows and information architecture to optimize
              the user journey, while ensuring a seamless and efficient
              interaction through strong front-end development skills. I'm a
              quick learner and eager to expand my knowledge in the
              ever-evolving field of UX design. I'm confident that my skills and
              enthusiasm would be a valuable asset to your team.
            </div>
            <div className="text-[#BC60FF] text-xl mt-5">Social links</div>
            <div className="flex justify-start items-center space-x-6 mt-5">
              <div className="relative group md:w-24 md:h-24 w-14 h-14 lg:w-32 lg:h-32 border-2 border-[#FF8000] rounded-xl md:rounded-3xl flex justify-center items-center hover:border-none transition-all duration-300">
                <a
                  href={
                    "https://www.facebook.com/profile.php?id=100048386407006"
                  }
                  className="relative z-20">
                  <Facebook style={{ width: "30px", height: "30px" }} />
                </a>
                <div className="absolute w-0 h-0 bg-[#FF8000] transition-all duration-300 group-hover:w-full group-hover:h-full rounded-xl md:rounded-3xl"></div>
              </div>
              <div className="relative group md:w-24 md:h-24 w-14 h-14 lg:w-32 lg:h-32 border-2 border-[#FF8000] rounded-xl md:rounded-3xl flex justify-center items-center hover:border-none transition-all duration-300">
                <a
                  href={
                    "https://www.linkedin.com/in/jayanta-debnath-622a7b316/"
                  }
                  className="relative z-20">
                  <Linkedin style={{ width: "30px", height: "30px" }} />
                </a>
                <div className="absolute w-0 h-0 bg-[#FF8000] transition-all duration-300 group-hover:w-full group-hover:h-full rounded-xl md:rounded-3xl"></div>
              </div>
              <div className="relative group md:w-24 md:h-24 w-14 h-14 lg:w-32 lg:h-32 border-2 border-[#FF8000] rounded-xl md:rounded-3xl flex justify-center items-center hover:border-none transition-all duration-300">
                <a
                  href={"https://github.com/Creative-Wave"}
                  className="relative z-20">
                  <Github style={{ width: "30px", height: "30px" }} />
                </a>
                <div className="absolute w-0 h-0 bg-[#FF8000] transition-all duration-300 group-hover:w-full group-hover:h-full rounded-xl md:rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-full flex justify-center">
            <img
              src="/myimage.png"
              alt="Jayanta Debnath"
              className="w-full h-auto  md:max-w-full  md:translate-x-40"
            />
          </div>
        </div>
      </div>

      <Expertice />

      <Atom />

      <Keyskill />

      <Progressbar />
    </>
  );
};

export default Aboutme;
