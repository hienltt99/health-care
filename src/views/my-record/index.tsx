import React from "react";
import RecordCategory from "../../modules/records/categories";
import BodyRecord from "../../modules/records/body";
import ExerciseRecord from "../../modules/records/exercise";
import DiaryRecord from "../../modules/records/diary";

const MyRecord = () => {
  return (
    <>
      <RecordCategory/>
      <BodyRecord/>
      <ExerciseRecord/>
      <DiaryRecord/>
    </>
  )
}

export default MyRecord;