import React from "react";
import MainComponent from "./Components/MainComponent";

import { ToastContainer } from "react-toastify";
import Navber from "./Components/Navber";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="w-full border-b-1 shadow border-gray-200">
        <Navber />
      </div>
      <div className="max-w-[90%] mx-auto ">
        <MainComponent />
        <ToastContainer />
      </div>
      <div className="bg-black mt-24 ">
        <Footer />
        <h2 className="text-white text-center pb-2 pt-7 text-[17px]">
          © 2025 CS — Ticket System. All rights reserved.
        </h2>
      </div>
    </>
  );
};

export default App;
