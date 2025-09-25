import React from "react";
import InProgressCom from "./InProgressCom";
import ResolvedCom from "./ResolvedCom";

const TaskStatusCom = ({ data, handleCompleteBtn, resolved }) => {
  const filterProgress = data.filter((ele) => ele.status === "In-Progress");

  return (
    <div className="">
      <InProgressCom
        filterProgress={filterProgress}
        handleCompleteBtn={handleCompleteBtn}
      />
      <ResolvedCom resolved={resolved} />
    </div>
  );
};

export default TaskStatusCom;
