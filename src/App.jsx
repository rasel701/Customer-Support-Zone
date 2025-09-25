import React from "react";
import MainComponent from "./Components/MainComponent";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="max-w-[90%] mx-auto ">
      <MainComponent />
      <ToastContainer />
    </div>
  );
};

export default App;
