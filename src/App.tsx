import { useState } from "react"
import type { FC } from "react"

import Navbar from "./components/Navbar"
import MainContainer from "./components/MainContainer"
import Footer from "./components/Footer"

const DefaultMainContent:FC = () => {
  return (
    <>
      <div className="bg-gray-950 flex justify-center text-center p-4">
        <h2 className="text-xl bg-gray-300 text-black px-4">Title Goes Here</h2>
      </div>
      <p className="p-4">
        Main Content Goes Here
      </p>
    </>
  )
}

const App:FC = () => {
  const [mainContent, setMainContent] = useState(<DefaultMainContent/>)

  return (
    <>
      <div className="min-h-screen bg-[url(https://pbs.twimg.com/media/Gyq3mB5WoAM-mBR.jpg)] bg-cover text-white overflow-hidden flex px-25">
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
