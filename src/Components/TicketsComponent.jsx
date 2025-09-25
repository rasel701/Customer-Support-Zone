import React, { use, useState } from "react";
import CustomerTickets from "./CustomerTickets";
import Counters from "./Counters";

const TicketsComponent = ({ promiseData }) => {
  const initialData = use(promiseData);
  const [data, setData] = useState(initialData);

  return (
    <>
      <Counters />
      <CustomerTickets data={data} />
    </>
  );
};

export default TicketsComponent;
