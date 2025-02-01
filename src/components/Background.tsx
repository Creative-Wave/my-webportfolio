const Background = () => {
  return (
    <>
      {/* Background Blurs */}
      <div className="fixed inset-0 overflow-x-hidden overflow-y-hidden -z-10">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#4E00FF] rounded-full -translate-x-20 -translate-y-20 blur-3xl opacity-60 animate-moveBlur1"></div>
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#92E3A9] rounded-full translate-x-20 blur-3xl opacity-60 animate-moveBlur2"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#FF9900] rounded-full -translate-x-20 blur-2xl opacity-60 animate-moveBlur3"></div>
      </div>
    </>
  );
};

export default Background;
