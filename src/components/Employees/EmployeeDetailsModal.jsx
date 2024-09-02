/* eslint-disable react/prop-types */
const EmployeeDetailsModal = ({
  showEmployeeDetails,
  handleCloseSiteDetailsModal,
  EmployeesData,
  selectedEmployeeIndex,
}) => {
  // Filter the EmployeesData array to get the selected Employee
  const selectedEmployee = EmployeesData[selectedEmployeeIndex];

  return (
    <>
      {showEmployeeDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="absolute z-10 bg-white w-full max-w-3xl overflow-hidden shadow-lg rounded-xl transform transition-all sm:w-full">
            <div className="absolute top-0 right-0 pt-3 pr-3">
              <button
                type="button"
                onClick={handleCloseSiteDetailsModal}
                className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={handleCloseSiteDetailsModal}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {selectedEmployee && (
              <div className="m-4">
                <h1 className="text-2xl font-semibold mb-2">
                  {selectedEmployee.fullName} {selectedEmployee.employeeNumber}
                </h1>
                <hr className="m-2" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid grid-cols-2">
                    <div className="mt-4">Department:</div>
                    <div className="bg-green-100 block w-full px-4 py-4  rounded-xl">
                      {" "}
                      {selectedEmployee.department}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="mt-4">Site Contact:</div>
                    <div className="bg-green-100 block w-full px-4 py-4 overflow-hidden rounded-xl">
                      {" "}
                      {selectedEmployee.email}
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="mt-4">Role:</div>
                    <div className="bg-green-100 block w-full px-4 py-4  rounded-xl">
                      {" "}
                      {selectedEmployee.role}
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="mt-4">Date Joined:</div>
                    <div className="bg-green-100 block w-full px-4 py-4 rounded-xl">
                      {new Date(selectedEmployee.dateJoined).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="mt-4">Current Site:</div>
                    <div className="">
                      <input
                        type="number"
                        id="site"
                        placeholder="Current Site"
                        className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="mt-4">Current Status:</div>
                    <div className="">
                      <select
                        id="status"
                        className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      >
                        <option value="onduty">1 - On Duty</option>
                        <option value="leave">2 - Leave</option>
                        <option value="resigned">3 - Resigned</option>
                        <option value="suspended">4 - Suspended</option>
                      </select>
                    </div>
                  </div>



                </div>
                <div className="mt-8 grid grid-cols-2 justify-center items-center gap-12">
                  <button
                    type="button"
                    onClick={handleCloseSiteDetailsModal}
                    className="inline-flex items-center justify-center  px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-[#06380b] border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-green-500"
                  >Save Changes

                  </button>
                  <div className="">
                    <button
                      type="button"
                      onClick={handleCloseSiteDetailsModal}
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-700 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-red-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeDetailsModal;
