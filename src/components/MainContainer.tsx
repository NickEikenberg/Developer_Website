import type { FC, JSX } from "react";

interface Props {
  mainContent: JSX.Element
}

const MainContainer:FC<Props> = ({ mainContent }) => {
  return (
    <div className="bg-slate-900 flex flex-col w-1/2 py-10 overflow-scroll">
      {mainContent}
    </div>
  )
}

export default MainContainer;