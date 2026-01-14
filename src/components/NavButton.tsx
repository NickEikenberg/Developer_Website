import type { FC, JSX } from "react";

interface NavButtonProps {
  title: string;
  onClick: React.Dispatch<React.SetStateAction<JSX.Element>>
  contentToSet: JSX.Element
}

const NavButton:FC<NavButtonProps> = ({ title, onClick, contentToSet }) => {
  return (
    <li className="w-full px-4 cursor-pointer hover:bg-white">
      <button className="cursor-pointer" onClick={() => onClick(contentToSet)}>{title}</button>
    </li>
  );
};

export default NavButton;