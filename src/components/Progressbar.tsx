import { PanelBottomDashed, PencilLine, TicketPlus } from "lucide-react";

const Progressbar = () => {
  return (
    <>
      <div className="lg:h-screen h-auto md:px-20 px-6 flex justify-center items-center">
        <div className="md:flex block justify-between items-center space-y-10 lg:space-y-0">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full lg:text-left">
            <div className="text-2xl lg:text-4xl font-bold leading-snug">
              <span>My</span> <br />
              Expertise
            </div>
            <p className="mt-5 text-sm lg:text-base">
              Domain expertise in specific mobile application sectors (e.g.,
              e-commerce, education, gaming). Your design and development
              process (e.g., user research, wireframing, prototyping,
              development using specific frameworks). Quantifiable achievements
              from past projects showcasing the impact of your design and
              development solutions (e.g., increased user engagement, improved
              conversion rates, reduced development time).
            </p>

            {/* Progress Bars */}
            <div className="mt-8 flex flex-wrap justify-start lg:gap-5 gap-2">
              <div className="p-4 font-bold flex flex-col justify-center items-center border-2 border-black dark:border-white rounded-xl h-auto w-28">
                <PencilLine className="lg:w-6 h-auto" />
                <span className="text-xl mt-3">85%</span>
                <span className="text-sm mt-1">Creativity</span>
              </div>
              <div className="p-4 font-bold flex flex-col justify-center items-center border-2 border-black dark:border-white rounded-xl h-auto w-28">
                <PanelBottomDashed className="lg:w-6 h-auto" />
                <span className="text-xl mt-3">80%</span>
                <span className="text-sm mt-1">Designing</span>
              </div>
              <div className="p-4 font-bold flex flex-col justify-center items-center border-2 border-black dark:border-white rounded-xl h-auto w-28">
                <TicketPlus className="lg:w-6 h-auto" />
                <span className="text-xl mt-3">70%</span>
                <span className="text-sm mt-1">Concept</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
            <img
              src="/about.png"
              className="mt-10 w-[280px] sm:w-[350px] lg:w-[450px]"
              alt="About"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Progressbar;
