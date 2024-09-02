import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import AccountInformationSettings from "../accountSettings/accountInformationSettings";
const MyProfileButton = () => {
  const [showAddAgentModal, setShowAddAgentModal] = useState(false);

  const handleShowAddAgentModal = () => {
    setShowAddAgentModal(true);
  };

  const handleCloseAddAgentModal = () => setShowAddAgentModal(false);
  return (
    <div>
      {" "}
      <div className="mx-4 font-mainFont">
        <button
          onClick={handleShowAddAgentModal}
          type="button"
          className="inline-flex items-center gap-3 justify-center w-full px-4 py-3 text-sm font-semibold leading-5 text-white transition-all 
        duration-200  bg-blue-950 border border-white rounded hover:bg-blue-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          <FaUser />
          Payroll Admin
        </button>
      </div>
      {/* Payroll Admin Settings modal */}
      {showAddAgentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="relative z-20 bg-white max-w-md overflow-hidden shadow-lg rounded-xl transform transition-all sm:max-w-[60%] sm:w-full">
            <div className="absolute top-0 right-0 pt-3 pr-3">
              <button
                type="button"
                className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                onClick={handleCloseAddAgentModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
              <AccountInformationSettings />
            </div>
          </div>
        </div>
      )}
      {/* Payroll Admin Settings modal*/}
    </div>
  );
};

export default MyProfileButton;
