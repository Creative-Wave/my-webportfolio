const Atom = () => {
  return (
    <div className="relative lg:h-screen h-auto p-10 flex justify-center items-center overflow-hidden overflow-y-hidden">
      <div className="atom">
        <div className="orbit border-2 border-dashed border-black dark:border-white">
          <span
            className="electron bg-red-600"
            style={{ ["--duration" as string]: "5.3s" }}></span>
        </div>
        <div className="orbit border-2 border-dashed border-black dark:border-white">
          <span
            className="electron bg-violet-500"
            style={{ ["--duration" as string]: "4.5s" }}></span>
        </div>
        <div className="orbit border-2 border-dashed border-black dark:border-white">
          <span
            className="electron bg-yellow-300"
            style={{
              ["--duration" as string]: "5.9s",
            }}></span>
        </div>
        <div className="core rounded-full text-sm lg:text-[16px] font-black">
          Key Skill
        </div>
      </div>
    </div>
  );
};

export default Atom;
