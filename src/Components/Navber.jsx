const Navber = () => {
  return (
    <navber className="flex flex-col lg:flex-row lg:justify-between justify-center items-center py-5 max-w-[90%] mx-auto">
      <h2 className="font-bold text-2xl">CS — Ticket System</h2>

      <ul className="flex gap-7 text-[16px] lg:mt-0 font-semibold items-center flex-wrap mt-8">
        <li>Home</li>
        <li>FAQ</li>
        <li>Changelog</li>
        <li>Blog</li>
        <li>Download</li>
        <li>Contact</li>
        <li>
          <button className="font-bold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-lg ">
            + New Ticket
          </button>
        </li>
      </ul>
    </navber>
  );
};

export default Navber;
