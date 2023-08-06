import React from "react";
import "./statistic.scss";
import pic from "../../../assets/images/pic_dinner1.jpg"
import LineChart from "../../../components/line-chart";

const HomeStatistic = () => {

  return (
    <section className={"home-statistic d-flex"}>
      <div className={"w-50 position-relative"}>
        <img src={pic} alt="" width={'100%'} height={312}/>
        <div
          className={"drawer position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center"}>
          <span className={"date color-white"}>05/21</span>
          <span className={"percent color-white ms-2"}>75%</span>
        </div>
      </div>

      <div className="chart bg-main color-white">
        <LineChart/>
      </div>
    </section>
  )
}

export default HomeStatistic