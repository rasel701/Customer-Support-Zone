import React from "react";
import CustomerCard from "./CustomerCard";

const CustomerTickets = ({ data }) => {
  const showData = data.map((element) => (
    <CustomerCard key={element.id} element={element} />
  ));

  return (
    <>
      <h2 className="text-2xl mt-3 font-bold text-gray-700">
        Customer Tickets
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">{showData}</div>
    </>
  );
};

export default CustomerTickets;
