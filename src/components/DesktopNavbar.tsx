import { Book, Figma, Home, NotebookText, Phone, User } from "lucide-react";
import Link from "next/link";
import DarkBtn from "./DarkBtn";

const DesktopNavbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        {/* Brand Start */}
        <div className="flex items-center">
          <img src="logo.png" className="w-6 md:w-10 h-auto" alt="Logo" />
          <p
            className="lg:text-2xl text-lg font-bold ml-3"
            style={{ fontFamily: "'Teko', sans-serif", letterSpacing: "2px" }}>
            JAYANTA DEBNATH
          </p>
        </div>
        {/* Brand End */}

        {/* Navbar Item Start */}
        <div className="flex justify-center items-center space-x-7">
          <Link href={"#home"} className="flex items-center gap-2">
            <Home className="w-5 h-auto" />
            <span>Home</span>
          </Link>
          <Link href={"#nextSection"} className="flex items-center gap-2">
            <User className="w-5 h-auto" />
            <span>About me</span>
          </Link>
          <Link href={"#projects"} className="flex items-center gap-2">
            <NotebookText className="w-5 h-auto" />
            <span>Projecs</span>
          </Link>
          <Link href={"#me"} className="flex items-center gap-2">
            <Phone className="w-5 h-auto" />
            <span>Contact me</span>
          </Link>
          <Link
            href={
              "https://drive.google.com/drive/folders/1nue96b9uyha7AK_freQmlY9N6g0zm0Xk?usp=sharing"
            }
            className="flex items-center gap-2">
            <Book className="w-5 h-auto" />
            <span>My CV</span>
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.figma.com/design/Cn91TKE6FnFxTKEwj5mNLT/myportfoliodesign?node-id=724-1992&t=RR2h3wBmzweRfB7j-1"
            }>
            <Figma />
          </Link>
          <Link
            href="https://www.behance.net/jayantadebnath10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-black text-xl">
            Be
          </Link>
          <DarkBtn />
        </div>
        {/* Navbar Item End */}
      </div>
    </>
  );
};
export default DesktopNavbar;
