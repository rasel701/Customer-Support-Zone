import { Check } from "lucide-react";

const ResolvedCom = ({ resolved }) => {
  return (
    <div className="border-1 shadow border-gray-200 p-5 mt-9">
      <h2 className="text-[20px] font-bold text-gray-700">Resolved Task</h2>

      {resolved.length > 0 ? (
        resolved.map((ele) => (
          <div
            key={ele.id}
            className="bg-green-100 mt-4 rounded-lg p-3 relative"
          >
            <div className="">
              <h2 className="text-[17px] text-gray-600 font-semibold">
                {ele.title}
              </h2>
              <div className="flex items-center mt-2 text-green-900 text-[16px] font-semibold">
                <Check />
                <span>Completed</span>
              </div>
            </div>
            <button className=" absolute bottom-1.5 right-3 cursor-pointer text-gray-500 ">
              Click to remove
            </button>
          </div>
        ))
      ) : (
        <div className="mt-7 text-center ">
          <h2 className="text-[17px] font-semibold text-gray-600">
            No resolved task yet
          </h2>
        </div>
      )}
    </div>
  );
};

export default ResolvedCom;
