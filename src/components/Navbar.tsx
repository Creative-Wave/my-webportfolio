import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <div
        className="h-[10dvh] lg:px-20 px-6 fixed top-0 left-0 right-0 z-50 backdrop-blur-xl w-dvw flex justify-center items-center"
        style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.6)" }}>
        <div className="w-full flex flex-col justify-between">
          {/* Desktop Navbar Start */}
          <div className="hidden items-center justify-between lg:flex ">
            <DesktopNavbar />
          </div>
          {/* Desktop Navbar End */}

          {/* Mobile Navbar Start */}
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
          {/* Mobile Navbar End */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
