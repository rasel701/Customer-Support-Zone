import { Check } from "lucide-react";

const ResolvedCom = ({ resolved }) => {
  console.log(resolved);
  return (
    <div className="border-1 shadow border-gray-200 p-5 mt-5">
      <h2>Resolved Task</h2>

      {resolved.map((ele) => (
        <div className="bg-green-100 mt-4 rounded-lg p-3">
          <h2 className="text-[17px] text-gray-600 font-semibold">
            {ele.title}
          </h2>
          <div className="flex items-center mt-2 text-green-900 text-[16px] font-semibold">
            <Check />
            <span>Completed</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResolvedCom;
