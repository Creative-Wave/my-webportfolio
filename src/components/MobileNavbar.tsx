import {
  Book,
  Figma,
  Home,
  LucideMenuSquare,
  NotebookText,
  Phone,
  User,
} from "lucide-react";
import DarkBtn from "./DarkBtn";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <>
      <div className="flex items-center justify-between backdrop-blur-xl">
        <div className="flex items-center">
          <img src="logo.png" className="w-6 md:w-10 h-auto" alt="Logo" />
          <p
            className="lg:text-3xl text-lg font-bold ml-3"
            style={{ fontFamily: "'Teko', sans-serif", letterSpacing: "2px" }}>
            JAYANTA DEBNATH
          </p>
        </div>
        <div className="flex justify-between items-center">
          <DarkBtn />

          <Sheet>
            <SheetTrigger className="">
              <LucideMenuSquare />
            </SheetTrigger>

            <SheetContent className="bg-zinc-950/30 text-white  w-3/4 backdrop-blur-lg border-l-0">
              <div className="flex flex-col items-end justify-center h-full space-y-12 mt-5">
                <SheetTitle></SheetTitle>
                <SheetClose asChild>
                  <Link
                    href={"#nextSection"}
                    className="flex items-center gap-2">
                    <User className="w-5 h-auto" />
                    <span>About me</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"#projects"} className="flex items-center gap-2">
                    <NotebookText className="w-5 h-auto" />
                    <span>Projecs</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"#me"} className="flex items-center gap-2">
                    <Phone className="w-5 h-auto" />
                    <span>Contact me</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={
                      "https://drive.google.com/drive/folders/1nue96b9uyha7AK_freQmlY9N6g0zm0Xk?usp=sharing"
                    }
                    className="flex items-center gap-2">
                    <Book className="w-5 h-auto" />
                    <span>My CV</span>
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link
                    target="_blank"
                    href={
                      "https://www.figma.com/design/Cn91TKE6FnFxTKEwj5mNLT/myportfoliodesign?node-id=724-1992&t=RR2h3wBmzweRfB7j-1"
                    }>
                    <Figma />
                  </Link>
                </SheetClose>
                <SheetClose>
                  <Link
                    href="https://www.behance.net/jayantadebnath10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-xl ">
                    Be
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
