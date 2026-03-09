import { useState } from "react"
import type { FC } from "react"

import Navbar from "./components/Navbar"
import MainContainer from "./components/MainContainer"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

const DefaultMainContent:FC = () => {
  return (
    <>
      <Hero/>
    </>
  )
}

const App:FC = () => {
  const [mainContent, setMainContent] = useState(<DefaultMainContent/>)

  return (
    <>
      <div className="max-h-screen bg-[url(src/assets/disco-background.png)] bg-black bg-cover text-white overflow-hidden flex px-25">
        <div className="bg-gradient-to-t from-[#0e0e0b]/50 via-[#cf6f1b]/50 to-[#1975b0]/50 h-screen w-full fixed left-0"></div>
        <div className="w-full z-10 flex">
          <Navbar setMainContent={setMainContent}/>
          <MainContainer mainContent={mainContent}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
