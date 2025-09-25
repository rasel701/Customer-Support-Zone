import React from "react";
import CustomerCard from "./CustomerCard";
import TaskStatusCom from "./TaskStatusCom";

const CustomerTickets = ({
  data,
  handleCardClick,
  handleCompleteBtn,
  resolved,
}) => {
  const showData = data.map((element) => (
    <CustomerCard
      handleCardClick={handleCardClick}
      key={element.id}
      element={element}
    />
  ));

  return (
    <>
      <h2 className="text-2xl mt-3 font-bold text-gray-700">
        Customer Tickets
      </h2>
      <div className=" flex  flex-col lg:flex-row gap-4">
        <div className="min-w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {showData}
        </div>
        <div className="p-2 min-w-[30%]">
          <TaskStatusCom
            data={data}
            resolved={resolved}
            handleCompleteBtn={handleCompleteBtn}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerTickets;
