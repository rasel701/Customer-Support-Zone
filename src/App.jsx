import React from "react";
import MainComponent from "./Components/MainComponent";

const fetchingData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const promiseData = fetchingData();

const App = () => {
  return (
    <div className="max-w-[90%] mx-auto ">
      <MainComponent />
    </div>
  );
};

export default App;
