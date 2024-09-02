import React from "react";
import SettingsTabs from "./settingsTabs";
const accountSettingsMainArea = () => {
  return (
    <div>
      
      <div className="font-mainFont">
        <h3 className="text-center font-bold text-3xl pt-2">Account Settings</h3>
      </div>
      <SettingsTabs />
    </div>
  );
};

export default accountSettingsMainArea;
