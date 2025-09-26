import React from "react";

const InProgressCom = ({ filterProgress, handleCompleteBtn, inprogress }) => {
  return (
    <div className="border-1 shadow border-gray-200 p-5">
      <h2 className="text-[20px] font-bold text-gray-700">Task Status</h2>
      {inprogress.length > 0 ? (
        <div>
          {inprogress.map((progress) => (
            <div
              key={progress.id}
              className="shadow border-2 border-gray-200 mt-3 p-4 rounded-lg"
            >
              <h2 className="text-[19px] font-bold text-gray-500 mb-2">
                {progress.title}
              </h2>
              <button
                onClick={() => handleCompleteBtn(progress)}
                className="bg-[#02A53B]  w-full p-2 mt-2 rounded-lg text-white  text-[17px]"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className=" mt-7 text-center ">
          <h2 className="text-[17px] font-semibold text-gray-600">
            No tasks in progress
          </h2>
          <p className="text-gray-400">Select a ticket to add to Task Status</p>
        </div>
      )}
    </div>
  );
};

export default InProgressCom;
