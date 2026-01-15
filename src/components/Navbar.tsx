import type { FC, JSX } from "react";
import NavButton from "./NavButton"
import Hero from "./Hero";
import Work from "./Work";
import Resume from "./Resume";
import Projects from "./Projects";

interface NavbarProps {
  setMainContent: React.Dispatch<React.SetStateAction<JSX.Element>>
}

const Navbar:FC<NavbarProps> = ({ setMainContent }) => {
  return (
    <div className="w-1/3 flex flex-col">
      <div className="flex items-center justify-center bg-[#999e9c] left-20 h-screen w-full">
        <nav className="bg-gradient-to-t from-black via-[#804617] to-[#9c6e46] h-full w-5/6 border border-[#1a2732] border-20 border-t-0 border-b-0">
        <div className="flex flex-col justify-center h-screen w-full">
          <ol className="flex flex-col text-right text-6xl gap-y-2 font-thin w-full">
            <NavButton title="ABOUT ME" onClick={setMainContent} contentToSet={<Hero/>} />
            <NavButton title="WORK" onClick={setMainContent} contentToSet={<Work/>}/>
            <NavButton title="RESUME" onClick={setMainContent} contentToSet={<Resume/>}/>
            <NavButton title="PROJECTS" onClick={setMainContent} contentToSet={<Projects/>}/>
          </ol>
        </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
