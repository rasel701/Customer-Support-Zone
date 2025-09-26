import InProgressCom from "./InProgressCom";
import ResolvedCom from "./ResolvedCom";

const TaskStatusCom = ({
  data,
  handleCompleteBtn,
  resolved,
  removeCompleteCustomer,
  inprogress,
}) => {
  return (
    <div className="">
      <InProgressCom
        inprogress={inprogress}
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
