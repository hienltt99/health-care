import React from "react";
import "./card.scss";

interface ICardProps {
  source: string;
  title: string;
}

const Card: React.FC<ICardProps> = ({ title, source }) => {
  return (
    <div className={"bg-main color-white position-relative"}>
      <img src={source} alt={title} className="card-img"/>
      <span className="position-absolute bottom-0 start-0 card-title">{title}</span>
    </div>
  )
}

export default Card