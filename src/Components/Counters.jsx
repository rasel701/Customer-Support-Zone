import React from "react";
import Counter from "./Counter";

const Counters = ({ data, resolved }) => {
  const progressFilter = data.filter((ele) => ele.status === "In-Progress");
  return (
    <div>
      <Counter progressFilter={progressFilter} resolved={resolved} />
    </div>
  );
};

export default Counters;
