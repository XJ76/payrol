import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Tabs = ({ onTabChange, handleAddEmployee }) => {
  const [activeTab, setActiveTab] = useState(1234);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex justify-between">
      <div className=" pl-8 max-w-7xl ">
        <nav className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-center">
          <div
            className={`cursor-pointer inline-flex items-center px-6 py-3 text-sm font-medium ${
              activeTab === 1234
                ? "text-white bg-[#06380b]"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-lg group whitespace-nowrap`}
            onClick={() => handleTabClick(1234)}
          >
            All
          </div>
          <div
            className={`cursor-pointer inline-flex items-center px-6 py-3 text-sm font-medium ${
              activeTab ===2
                ? "text-white bg-[#06380b]"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-lg group whitespace-nowrap`}
            onClick={() => handleTabClick(2)}
          >
          Leave
          </div>

          <div
            className={`cursor-pointer inline-flex items-center px-3 py-3 text-sm font-medium ${
              activeTab === 1
                ? "text-white bg-[#06380b]"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-lg group whitespace-nowrap`}
            onClick={() => handleTabClick(1)}
          >
            On Duty
          </div>

          <div
            className={`cursor-pointer inline-flex items-center px-3 py-3 text-sm font-medium ${
              activeTab === 3
                ? "text-white bg-[#06380b]"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-lg group whitespace-nowrap`}
            onClick={() => handleTabClick(3)}
          >
            Resigned
          </div>

          <div
            className={`cursor-pointer inline-flex items-center px-6 py-3 text-sm font-medium ${
              activeTab ===4
                ? "text-white bg-[#06380b]"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-lg group whitespace-nowrap`}
            onClick={() => handleTabClick(4)}
          >
           Suspended
          </div>
        </nav>
        <div className=" border-b-2 pt-1 max-w-[450px]"></div>
      </div>
      <div className="pr-8 pb-4">
       
      </div>
      {/* <div className=" border-b-2 max-w-[380px]"></div> */}
    </div>
  );
};

export default Tabs;
