import ExaminationTimeTable from "./ExaminnationTimeTable";

const TimeTableMainArea = () => {
  return (
    <div>
      {" "}
      <div className="">
        <h3 className="text-center font-bold text-3xl pt-2">Examination Time tables</h3>
      </div>
      <ExaminationTimeTable/>
    </div>
  );
};

export default TimeTableMainArea;
