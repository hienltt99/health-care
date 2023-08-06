import React, { useState } from "react";
import "./bodyrecord.scss";
import LineChart from "../../../components/line-chart";

const BodyRecord = () => {
  const arrOptions = ['日', '週', '月', '年'];
  const [optionSelected, setOptionSelected] = useState('年')

  const _renderOptions = () => {
    return (
      <div className={"options mt-3"}>
        {arrOptions.map(opt => (
          <span
            onClick={() => setOptionSelected(opt)}
            className={`option-item ${opt === optionSelected && 'active'}`}
            key={opt}>{opt}</span>
        ))}
      </div>
    )
  }

  return (
    <div className="container w-80 py-3 px-4 chart bg-main color-white my-5">
      <div className="body-record-head d-flex mb-3">
        <h2 className="heading text-uppercase">Body record</h2>
        <time className="body-record-time">2021.05.21</time>
      </div>
      <LineChart/>
      {_renderOptions()}
    </div>
  )
}

export default BodyRecord