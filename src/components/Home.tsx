"use client";

import { MoveDown } from "lucide-react";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setIsLoaded(true);
  }, []);

  // Function to handle the move-down button click
  const handleMoveDown = () => {
    const nextSection = document.getElementById("nextSection");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`relative h-screen md:px-20 px-6 flex flex-col justify-center items-center overflow-hidden overflow-x-hidden ${
          isLoaded ? "animate-fade-in-up" : "opacity-0"
        }`}>
        {/* Avatar image */}
        <img
          src="avater.png"
          className="lg:w-[200px] w-[150px] h-auto lg:mt-0 mt-8 mb-7"
          alt="Avatar"
        />

        {/* Content start */}
        <div className="md:text-xl text-lg font-bold">
          Hi there, I'm Jayanta
        </div>
        {/* Some text */}

        <section className="flex justify-center items-center space-x-4">
          <h1
            className="md:text-4xl lg:text-5xl sm:text-3xl text-lg font-black mt-5"
            style={{ letterSpacing: "5px" }}>
            <span style={{ "--j": "1" } as React.CSSProperties}>F</span>
            <span style={{ "--j": "2" } as React.CSSProperties}>U</span>
            <span style={{ "--j": "3" } as React.CSSProperties}>L</span>
            <span style={{ "--j": "4" } as React.CSSProperties}>L</span>
            <span style={{ "--j": "5" } as React.CSSProperties}>S</span>
            <span style={{ "--j": "6" } as React.CSSProperties}>T</span>
            <span style={{ "--j": "7" } as React.CSSProperties}>U</span>
            <span style={{ "--j": "8" } as React.CSSProperties}>C</span>
            <span style={{ "--j": "9" } as React.CSSProperties}>K</span>
          </h1>

          <h1
            className="md:text-4xl lg:text-5xl sm:text-3xl text-lg font-black mt-5"
            style={{ letterSpacing: "5px" }}>
            <span style={{ "--j": "10" } as React.CSSProperties}>D</span>
            <span style={{ "--j": "11" } as React.CSSProperties}>E</span>
            <span style={{ "--j": "12" } as React.CSSProperties}>V</span>
            <span style={{ "--j": "13" } as React.CSSProperties}>E</span>
            <span style={{ "--j": "14" } as React.CSSProperties}>L</span>
            <span style={{ "--j": "15" } as React.CSSProperties}>O</span>
            <span style={{ "--j": "16" } as React.CSSProperties}>P</span>
            <span style={{ "--j": "17" } as React.CSSProperties}>E</span>
            <span style={{ "--j": "18" } as React.CSSProperties}>R</span>
          </h1>
        </section>

        {/* Move Down Button */}
        <HoverCard>
          <HoverCardTrigger>
            <Button
              onClick={handleMoveDown}
              className="mt-10 lg:h-20 h-16 lg:w-auto w-12 bg-transparent hover:bg-transparent rounded-full border-2 border-[#FF9900] dark:border-white dark:text-white text-black"
              style={{ boxShadow: "0 8px 10px rgba(0, 0, 0, 0.4)" }}>
              <MoveDown
                className="animate-bounce"
                style={{ width: "20px", height: "20px" }}
              />
            </Button>
          </HoverCardTrigger>

          <HoverCardContent className="text-center w-44">
            Move Down
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
};

export default Home;
