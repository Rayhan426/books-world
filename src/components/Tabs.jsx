

const Tabs = ({ tabIndex, setTabIndex, tabs }) => {
  return (
    <div className="flex p-1 items-center w-full">

      <button
        onClick={() => setTabIndex(0)}
        className={`flex items-center px-5 py-3 space-x-2  ${
          tabIndex === 0 ? "border border-b-0 border-[#1313134D] text-blue-500" : "text-gray-500 border-b border-[#1313134D]"
        }`}
      >
        <span className={`${tabIndex === 0 ? "font-semibold" : ""}`}>{tabs[0]}</span>
      </button>

      <button
        onClick={() => setTabIndex(1)}
        className={`flex items-center px-5 py-3 space-x-2  ${
          tabIndex === 1 ? "border border-b-0 border-[#1313134D] text-blue-500" : "text-gray-500 border-[#1313134D] border-b"
        }`}
      >
        <span className={`${tabIndex === 1 ? "font-semibold" : ""}`}>{tabs[1]}</span>
      </button>
    </div>
  );
};

export default Tabs;
