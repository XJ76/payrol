import { useState } from "react";
import WithdrawalsTabs from "./CourseWorkTabs";
import AllCourseWork from "./AllCourseWork";
import PassedCourses from "./PassedCourses";
import Failed from "./Failed";
import CanceledWithdrawals from "./CanceledWithdrawals";
const CourseWork = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  
  //end depots array
  return (
    <div>
      {/* table of CourseWork transactions */}

      <div className="py-2 sm:py-16 lg:py-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-900">Coursework</p>
          </div>
          {/* tabs under CourseWork */}
          <div>
            <WithdrawalsTabs onTabChange={handleTabChange} />

            {activeTab === "all" ? (
              <AllCourseWork />
            ) : activeTab === "passed" ? (
              <PassedCourses />
            ) : activeTab === "failed" ? (
              <Failed />
            ) : (
              <CanceledWithdrawals />
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseWork;
