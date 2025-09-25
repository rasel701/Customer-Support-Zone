import React, { Suspense } from "react";

import TicketsComponent from "./TicketsComponent";

const fetchingData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const promiseData = fetchingData();

const MainComponent = () => {
  return (
    <div>
      <Suspense fallback={<h3>Data is comming...</h3>}>
        <TicketsComponent promiseData={promiseData} />
      </Suspense>
    </div>
  );
};

export default MainComponent;
