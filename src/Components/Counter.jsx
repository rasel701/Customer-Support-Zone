import vector1 from "../assets/vector1.png";

const Counter = ({ progressFilter, resolved }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-5  items-center ">
      <div className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-5 flex  justify-center items-center rounded-lg overflow-hidden">
        <img src={vector1} alt="img" />
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl text-white flex justify-center items-center text-center">
            <span>In</span>-<span>Progress</span>
          </h2>
          <p className="text-white text-4xl">{progressFilter.length}</p>
        </div>
        <img className="transform scale-x-[-1] " src={vector1} alt="img" />
      </div>

      <div className="bg-gradient-to-r from-[#54CF68] to-[#0087AA] p-5 flex  justify-center items-center rounded-lg overflow-hidden">
        <img src={vector1} alt="img" />
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl text-white">Resolved</h2>
          <p className="text-white text-4xl">{resolved.length}</p>
        </div>
        <img className="transform scale-x-[-1]" src={vector1} alt="img" />
      </div>
    </div>
  );
};

export default Counter;
