import React from "react";
import vector2 from "../assets/vector2.png";
import { Calendar } from "lucide-react";
import { toast } from "react-toastify";

const CustomerCard = ({ element, handleCardClick }) => {
  const cardClick = () => {
    handleCardClick(element.id);
    toast("In-Progress");
  };

  return (
    <div
      onClick={cardClick}
      className="shadow border-1 p-4 border-gray-300 rounded-md"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-600">{element.title}</h2>
        <div
          className={` ${
            element.status === "Open" ? "bg-green-100" : "bg-yellow-100"
          } p-3 rounded-full flex items-center gap-2`}
        >
          <img
            src={vector2}
            className={`${
              element.status === "Open" ? "bg-green-500" : "bg-yellow-500"
            } w-[25px] h-[25px] rounded-full`}
            alt="img"
          />
          <span
            className={`${
              element.status === "Open" ? "text-green-700" : "text-yellow-700"
            }`}
          >
            {element.status}
          </span>
        </div>
      </div>
      <p className="text-gray-600 mt-1.5">{element.description}</p>

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-4">
          <h2 className={`text-gray-500 text-lg`}>#{element.id}</h2>
          <p
            className={`${
              element.priority === "High"
                ? "text-[#f83044]"
                : element.priority === "Medium"
                ? "text-[#febb0c]"
                : "text-[#02a53b]"
            }`}
          >
            {element.priority.toUpperCase()} PRIORITY
          </p>
        </div>
        <div className="flex gap-4">
          <h2 className="text-gray-500">{element.customer}</h2>
          <div className="flex items-center gap-3 text-gray-600">
            <Calendar />
            <p>{element.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
