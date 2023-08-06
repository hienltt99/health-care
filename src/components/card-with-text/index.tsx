import React from "react";
import "./card.scss";

interface ICardProps {
  source: string;
  title: string;
  desc: string;
  tags: string[];
}

const CardWithText: React.FC<ICardProps> = ({ title, source, tags, desc }) => {

  const _renderTag = () => {
    return (
      <div className="tags">
        {tags.map(tag => (
          <span key={tag} className={"tag-item"}>#{tag}</span>
        ))}
      </div>
    )
  }

  return (
    <div className={"w-24"}>
      <div className={"position-relative"}>
        <img src={source} alt={title} className="card-image"/>
        <span className="position-absolute color-white bottom-0 start-0 card-title">{title}</span>
      </div>
      <p className="card-desc mt-2 mb-0">{desc}</p>
      {_renderTag()}
    </div>
  )
}

export default CardWithText