import { useState } from "react";

const ExamResultsTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div>
      <div className="py-2  mx-auto  max-w-7xl ">
        <nav className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-center">
          <div
            className={`cursor-pointer inline-flex border-2 items-center px-10 py-2 text-sm font-medium ${
              activeTab === "all"
                ? "text-black bg-gray-300"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-2xl group whitespace-nowrap`}
            onClick={() => handleTabClick("all")}
          >
            All
          </div>

          <div
            className={`cursor-pointer inline-flex border-2 items-center px-5 py-2 text-sm font-medium ${
              activeTab === "passed"
                ? "text-black bg-gray-300"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-2xl group whitespace-nowrap`}
            onClick={() => handleTabClick("passed")}
          >
            Passed
          </div>
          <div
            className={`cursor-pointer inline-flex  border-2 items-center px-6 py-2 text-sm font-medium ${
              activeTab === "failed"
                ? "text-black bg-gray-300"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-2xl group whitespace-nowrap`}
            onClick={() => handleTabClick("failed")}
          >
            Failed
          </div>

          <div
            className={`cursor-pointer inline-flex border-2  items-center px-6 py-2 text-sm font-medium ${
              activeTab === "missing"
                ? "text-black bg-gray-300"
                : "text-gray-500 hover:text-gray-900"
            } transition-all duration-200 rounded-2xl group whitespace-nowrap`}
            onClick={() => handleTabClick("missing")}
          >
            Missing
          </div>

          
        </nav>
      </div>
      {/* <hr className="m"/> */}
    </div>
  );
};

export default ExamResultsTabs;
