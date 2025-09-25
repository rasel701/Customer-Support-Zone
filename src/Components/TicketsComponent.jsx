import React, { use, useState } from "react";
import CustomerTickets from "./CustomerTickets";
import Counters from "./Counters";

const TicketsComponent = ({ promiseData }) => {
  const initialData = use(promiseData);
  const [data, setData] = useState(initialData);
  const [resolved, setResolved] = useState([]);

  const handleCardClick = (id) => {
    const findCostomer = data.find((ele) => ele.id === id);
    findCostomer.status = "In-Progress";
    const filterCostomer = data.filter((ele) => ele.id !== id);
    setData([...filterCostomer, findCostomer]);
  };

  const handleCompleteBtn = (costomer) => {
    const findCostomer = data.find((ele) => ele.id === costomer.id);
    const filterComplited = data.filter((ele) => ele.id !== costomer.id);
    setResolved([...resolved, findCostomer]);
    setData(filterComplited);
  };

  return (
    <>
      <Counters data={data} resolved={resolved} />
      <CustomerTickets
        data={data}
        resolved={resolved}
        handleCardClick={handleCardClick}
        handleCompleteBtn={handleCompleteBtn}
      />
    </>
  );
};

export default TicketsComponent;
