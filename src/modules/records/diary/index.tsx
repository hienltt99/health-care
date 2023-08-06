import React from "react";
import "./categories.scss";
import { initArr } from "../../../utils/array.utils";
import Button from "../../../components/button";

const DiaryRecord = () => {
  const lstDiary = initArr(8);

  const _renderDiary = () => (
    <ul className={"d-flex flex-wrap justify-content-between p-0"}>
      {lstDiary.map(cate => (
        <li key={cate} className={"diaries d-flex flex-column w-23 mt-3 p-2"}>
          <time>2021.05.21</time>
          <time>23:25</time>
          <h2 className={"diary-name mt-2"}>私の日記の記録が一部表示されます。</h2>
          <p className={"diary-desc"}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </li>
      ))}
    </ul>
  )

  return (
    <section className={"w-80 diary-record m-auto text-center my-5"}>
      <h2 className="diary-heading text-uppercase">My diary</h2>
      {_renderDiary()}
      <Button text={"記録をもっと見る"}/>
    </section>
  )
}

export default DiaryRecord