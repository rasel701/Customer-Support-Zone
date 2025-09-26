import React, { Suspense } from "react";

import TicketsComponent from "./TicketsComponent";
import Loading from "./Loading";

const fetchingData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const promiseData = fetchingData();

const MainComponent = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TicketsComponent promiseData={promiseData} />
      </Suspense>
    </div>
  );
};

export default MainComponent;
