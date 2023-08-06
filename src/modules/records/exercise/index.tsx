import React from "react";
import "./exercise.scss";
import { initArr } from "../../../utils/array.utils";
import icon_dot from "../../../assets/icons/icon_dot.svg";

const ExerciseRecord = () => {
  const lstExercise = initArr(100);

  const _renderExercise = () => (
    <ul className={"exercises d-flex flex-wrap justify-content-between px-0"}>
      {lstExercise.map((exercise, index) => (
        <li key={index}
            className={`exercise-inner d-flex w-45 justify-content-between mb-3 ${index % 2 === 0 ? '' : 'odd'}`}>
          <div className="d-flex justify-content-start align-items-start">
            <img src={icon_dot} alt="icon_dot" className={"mt-1"}/>
            <div className={"ms-2"}>
              <p className="exercise-name m-0">家事全般（立位・軽い）</p>
              <p className="exercise-kcal m-0">26kcal</p>
            </div>

          </div>
          <span className="exercise-time">10 min</span>
        </li>
      ))}
    </ul>
  )

  return (
    <section className={"w-80 bg-main exercise-record m-auto p-4"}>
      <div className={"heading mb-1"}>
        <h2 className={"text-uppercase color-white exercise-title"}>My exercise</h2>
        <text className={"color-white"}>2021.05.21</text>
      </div>
      {_renderExercise()}
    </section>
  )
}

export default ExerciseRecord;