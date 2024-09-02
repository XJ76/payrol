/* eslint-disable react/prop-types */
//import React from "react";
import { useState } from "react";
import { HiExclamation } from "react-icons/hi";

const DeleteModal = ({ isModalOpen, onClose, onDelete }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDelete = () => {
    // Implement your delete logic here
    onDelete();
    setShowSuccessModal(true); // Set showSuccessModal to true
    onClose();
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false); // Set showSuccessModal to false
    onClose(); // Close the modal
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* modal code */}
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="absolute z-10 bg-white w-full max-w-3xl overflow-hidden shadow-lg rounded-xl transform transition-all sm:w-full"></div>

          <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="flex items-center -center w-full h-full px-4 py-5 sm:p-6">
              <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
                <div className="px-4 py-5 sm:p-6">
                  <div className="inline-flex mt-5 gap-2 ">
                    <div className="text-xl font-bold text-gray-900 normal-case">
                      Delete Plant{" "}
                    </div>
                    <div className="mt-1 text-red-900 text-2xl">
                      <HiExclamation />
                    </div>
                  </div>

                  <p className="mt-3 text-sm font-medium normal-case">
                    Are you sure you want to delete this plant?
                  </p>
                  <div className="flex  items-center mt-8 space-x-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex bg-green-900 items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-green-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center -center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="absolute z-10 bg-white w-full max-w-3xl overflow-hidden shadow-lg rounded-xl transform transition-all sm:w-full">
            <div className="flex items-center -center w-full h-full px-4 py-5 sm:p-6">
              <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
                <div className="px-4 py-5 sm:p-6">
                  <svg
                    className="text-green-900 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="mt-5 text-xl font-bold text-green-900">
                    Deleted Successfully
                  </p>
                  <button
                    type="button"
                    onClick={handleSuccessModalClose}
                    className="mt-8 inline-flex bg-green-900 items-center -center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
