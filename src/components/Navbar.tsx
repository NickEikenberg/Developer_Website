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
    <div className="flex items-center justify-center bg-red-400 left-20 h-screen w-1/3">
      <nav className="bg-red-300 h-full w-5/6 border border-blue-200 border-20 border-t-0 border-b-0">
      <div className="flex flex-col justify-center h-screen w-full">
        <ol className="flex flex-col text-right text-6xl gap-y-2 font-thin w-full bg-red-500">
          <NavButton title="About Me" onClick={setMainContent} contentToSet={<Hero/>} />
          <NavButton title="Work" onClick={setMainContent} contentToSet={<Work/>}/>
          <NavButton title="Resume" onClick={setMainContent} contentToSet={<Resume/>}/>
          <NavButton title="Projects" onClick={setMainContent} contentToSet={<Projects/>}/>
        </ol>
      </div>
      </nav>
    </div>
  )
}

export default Navbar;
