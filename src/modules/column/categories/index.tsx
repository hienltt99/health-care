import React from "react";
import "./categories.scss";

const ColumnCategory = () => {
  const categories = [
    {
      categoryName: "RECOMMENDED COLUMN",
      categoryDesc: "オススメ",
    },
    {
      categoryName: "RECOMMENDED DIET",
      categoryDesc: "ダイエット",
    },
    {
      categoryName: "RECOMMENDED BEAUTY",
      categoryDesc: "美容",
    },
    {
      categoryName: "RECOMMENDED HEALTH",
      categoryDesc: "健康",
    },
  ];

  const _renderCategories = () => (
    <ul className={"d-flex flex-wrap justify-content-between p-0 mb-4"}>
      {categories.map(cate => (
        <li key={cate.categoryName}
            className={"categories d-flex flex-column w-23 color-white justify-content-center align-items-center"}>
          <text className={"category-name"}>{cate.categoryName}</text>
          <span className="divider"></span>
          <text className={"column-category-desc"}>{cate.categoryDesc}</text>
        </li>
      ))}
    </ul>
  )

  return (
    <section className={"container w-80 column-category my-5 p-0 text-center"}>
      {_renderCategories()}
    </section>
  )
}

export default ColumnCategory