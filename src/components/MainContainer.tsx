import type { FC, JSX } from "react";

interface Props {
  mainContent: JSX.Element
}

const MainContainer:FC<Props> = ({ mainContent }) => {
  return (
    <div className="bg-gradient-to-t from-black via-[#373941] to-[#5e6572] backdrop-opacity-50 flex flex-col items-center gap-y-4 w-1/2 py-4 overflow-scroll border-r border-[#999e9c] border-r-20">
      {mainContent}
    </div>
  )
}

export default MainContainer;