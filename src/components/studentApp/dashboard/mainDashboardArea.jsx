import { useState } from "react";

import Insights from "./Insights";
import InsightsTabs from './InsightsTabs'
import Activities from "./Activities";
import Teachers from "./Teachers";
import PayRolldata from "./PayRol";
import More from "./more";

function MainDashboardArea() {
  const [activeTab, setActiveTab] = useState("myclasses");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white h-screen">
      <div className="font-mainFont">
        <h3 className="text-center font-bold text-3xl pt-2">TorryBlue Payrol Management</h3>
      </div>

      <Insights/>
      <InsightsTabs onTabChange={handleTabChange} />
      {activeTab === "PayRolldata" ? <PayRolldata />
      : activeTab === "activities" ? <Activities />
      : activeTab === "teachers" ? <Teachers />
      : <More/>}
    </div>
  );
}

export default MainDashboardArea;
