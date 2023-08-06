import React from "react";
import "./button.scss";

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = ({ text }) => {
  return (
    <button className={"btn btn-showmore color-white mt-4"}>{text}</button>
  )
}

export default Button