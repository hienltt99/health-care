import React from "react";
import "./categories.scss";

const RecordCategory = () => {
  const categories = [
    {
      categoryName: "Body record",
      desc: "自分のカラダの記録",
      source: require("../../../assets/images/body_record.png")
    },
    {
      categoryName: "My exercise",
      desc: "自分の運動の記録",
      source: require("../../../assets/images/exercise_record.png")
    },
    {
      categoryName: "My diary",
      desc: "自分の日記",
      source: require("../../../assets/images/diary_record.png")
    },
  ];

  const _renderCategories = () => (
    <div className={"d-flex flex-wrap justify-content-between mb-4"}>
      {categories.map(cate => (
        <div key={cate.source}
             className={"categories d-flex flex-column color-white justify-content-center align-items-center"}>
          <div className="categories-inner z-1 bg-dark position-relative">
            <img src={cate.source} alt={cate.categoryName}/>
            <div
              className="position-absolute d-flex flex-column justify-content-center align-items-center start-0 end-0 top-0 bottom-0">
              <p className={"category-name text-uppercase mb-0"}>{cate.categoryName}</p>
              <p className={"category-desc mt-3"}>{cate.desc}</p>
            </div>

          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className={"container w-80 record-category my-5 p-0 text-center"}>
      {_renderCategories()}
    </section>
  )
}

export default RecordCategory