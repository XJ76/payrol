/* eslint-disable react/prop-types */
import { useState } from "react";

const AssignEmployeeModal = ({
  isAssignEmployeeModalOpen,
  onAssignEmployeeClose,
  onAssignEmployeeAssign,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAssignEmployee = () => {
    onAssignEmployeeAssign(); // This should perform the assignment action
    onAssignEmployeeClose(); // This should close the modal
  };

  return (
    <>
      {isAssignEmployeeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="bg-white w-full max-w-lg p-5 rounded-xl shadow-lg z-10 overflow-hidden">
            <div className="text-center">
              <div className="text-xl font-bold mb-4 text-black">
                Assign Employee
              </div>

              <div>
                  <label
                    htmlFor="site"
                    className="text-sm font-bold text-gray-900"
                  >
                    Transfer to Site:
                  </label>
                  <div className="mt-2">
                    <select
                      id="site"
                      
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    >
                      <option value="">Select Site Status</option>
                      <option value=''>1 - ABITECH</option>
                      <option value=''>2 - CHAKA CRUSHER</option>
                      <option value=''>3 - CHIBI CRUSHER</option>
                      <option value=''>4 - CHIVHU ASPHALT</option>
                      <option value=''>5 - CHIVHU CRUSHER</option>
                      <option value=''>6 - D/SHIRE ASPHALT</option>
                      <option value=''>7 - DEFE</option>
                      <option value=''>8 - DULYS</option>
                      <option value=''>9 - HEBE</option>
                      <option value=''>10 - HEBE P4</option>
                      <option value=''>11 - KHAYA CEMENT</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="plant"
                    className="text-sm font-bold text-gray-900"
                  >
                    Assign Plant:
                  </label>
                  <div className="mt-2">
                    <input
                      id="plant"
                      placeholder="Assign new plant..."
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    />
                      
                  </div>
                </div>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={onAssignEmployeeClose}
                  className="px-6 py-3 w-full text-sm font-semibold text-white bg-red-900 border border-gray-300 rounded-md hover:bg-red-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleAssignEmployee();
                    setShowSuccessModal(true);
                  }}
                  className="px-6 py-3 w-full text-sm font-semibold text-white bg-green-900 rounded-md hover:bg-green-700"
                >
                  Assign
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Success Modal Content */}
          <div className="absolute z-10 bg-white max-w-sm overflow-hidden shadow-lg rounded-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="px-4 py-6 text-center">
              {/* Close button and success message */}
              <p className="mt-5 text-xl font-bold text-gray-900">
                Employee Successfully Assigned
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setShowSuccessModal(false);
                    onAssignEmployeeClose();
                  }}
                  type="button"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-700 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-red-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignEmployeeModal;