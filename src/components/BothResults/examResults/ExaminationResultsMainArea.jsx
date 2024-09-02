import { useState } from "react";
import ExamResultsTabs from "./ExamResultsTabs";
import AllExamResults from "./AllExamResults";
import PassedExamResults from "./PassedExamResults";
import PendingDeposits from "./PendingDeposits";
import CanceledDeposits from "./CanceledDeposits";
const ExaminationResultsMainArea = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  
  //end depots array
  return (
    <div>
      {/* table of deposits transactions */}

      <div className="py-2 sm:py-16 lg:py-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-900">Examinations</p>
          </div>
          {/* tabs under deposits */}
          <div>
            <ExamResultsTabs onTabChange={handleTabChange} />

            {activeTab === "all" ? (
              <AllExamResults />
            ) : activeTab === "passed" ? (
              <PassedExamResults />
            ) : activeTab === "failed" ? (
              <PendingDeposits />
            ) : (
              <CanceledDeposits />
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExaminationResultsMainArea;
