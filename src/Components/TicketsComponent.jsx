import React, { use, useState } from "react";
import CustomerTickets from "./CustomerTickets";
import Counters from "./Counters";
import { toast } from "react-toastify";

const TicketsComponent = ({ promiseData }) => {
  const initialData = use(promiseData);
  const [data, setData] = useState(initialData);
  const [resolved, setResolved] = useState([]);
  const [inprogress, setInprogress] = useState([]);

  const handleCardClick = (id) => {
    const findCustomer = data.find((ele) => ele.id === id);
    // if (findCustomer.status === "In-Progress") {
    //   toast("Already In Progress", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     className: "vivino-toast",
    //   });
    // return;

    // findCustomer.status = "In-Progress";
    // const filterCustomer = data.filter((ele) => ele.id !== id);
    // setData([...filterCustomer, findCustomer]);
    setInprogress([...inprogress, findCustomer]);
    toast("In-Progress");
  };

  const handleCompleteBtn = (customer) => {
    const findCustomer = data.find((ele) => ele.id === customer.id);
    const filterComplited = data.filter((ele) => ele.id !== customer.id);
    setResolved([...resolved, findCustomer]);

    // const findInprogress = inprogress.find(ele=>ele.id===customer.id);
    const filterInprogress = inprogress.filter((ele) => ele.id !== customer.id);

    setInprogress(filterInprogress);
    setData(filterComplited);
    toast("Completed!");
  };

  const removeCompleteCustomer = (id) => {
    const filterCustomer = resolved.filter((ele) => ele.id !== id);
    setResolved(filterCustomer);
  };

  return (
    <div className="mt-24">
      <Counters data={data} inprogress={inprogress} resolved={resolved} />
      <CustomerTickets
        inprogress={inprogress}
        data={data}
        resolved={resolved}
        handleCardClick={handleCardClick}
        handleCompleteBtn={handleCompleteBtn}
        removeCompleteCustomer={removeCompleteCustomer}
      />
    </div>
  );
};

export default TicketsComponent;
