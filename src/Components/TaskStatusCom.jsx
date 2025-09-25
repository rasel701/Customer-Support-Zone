import React from "react";
import InProgressCom from "./InProgressCom";
import ResolvedCom from "./ResolvedCom";

const TaskStatusCom = ({
  data,
  handleCompleteBtn,
  resolved,
  removeCompleteCustomer,
}) => {
  const filterProgress = data.filter((ele) => ele.status === "In-Progress");

  return (
    <div className="">
      <InProgressCom
        filterProgress={filterProgress}
        handleCompleteBtn={handleCompleteBtn}
      />
      <ResolvedCom
        resolved={resolved}
        removeCompleteCustomer={removeCompleteCustomer}
      />
    </div>
  );
};

export default TaskStatusCom;
