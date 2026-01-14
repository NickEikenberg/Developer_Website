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
  const [showHero, setShowHero] = useState(false)
  const [mainContent, setMainContent] = useState(<DefaultMainContent/>)

  return (
    <>
      <div className="min-h-screen bg-slate-800 text-white overflow-hidden flex px-25">
        <Navbar setShowHero={setShowHero} setMainContent={setMainContent}/>
        <MainContainer showHero={showHero} mainContent={mainContent}/>
      </div>
      <Footer />
    </>
  )
}

export default App
