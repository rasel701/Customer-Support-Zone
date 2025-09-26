import Counter from "./Counter";

const Counters = ({ data, resolved, inprogress }) => {
  const progressFilter = data.filter((ele) => ele.status === "In-Progress");
  return (
    <div>
      <Counter
        progressFilter={progressFilter}
        resolved={resolved}
        inprogress={inprogress}
      />
    </div>
  );
};

export default Counters;
