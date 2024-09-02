import { useState } from "react";
// import AnalyticsModal from "./AnalyticsModal";
// import Employeetats from "./Employeetats";
// import Tabs from "./Tabs";
import EmployeeTable from "./EmployeesTable";
import Tabs from "./Tabs";
// import newEmployeeForm from './newEmployeeForm';
import EmployeeStats from "./EmployeeStats";


const EmployeeMainArea = () => {
  const [activeTab, setActiveTab] = useState(1234);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <main className="">
        <EmployeeStats />
        <Tabs onTabChange={handleTabChange} />
        <EmployeeTable selectedTab={activeTab} />
      </main>

      <div />
    </div>
  );
};

export default EmployeeMainArea;
