import React from 'react'

const EmployeeStats = () => {
    return (
      <div>
        <div className="py-12  sm:py-16 lg:py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-center pb-4 text-xl font-bold">
              <h1>Employees</h1>
              </div>
            <div className="overflow-auto bg-white border border-gray-200 rounded-xl">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-sm font-medium text-gray-500">All Employeess</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">10000</p>
                </div>
                <div className="px-4 py-5 border-l border-gray-200 sm:p-6">
                  <p className="text-sm font-medium text-gray-500">
                    Leave
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">300</p>
                  <div className="relative w-full h-1 mt-6 bg-gray-100 rounded-full">
                    <div className="absolute inset-y-0 left-0 bg-indigo-500 rounded-full w-[2%]" />
                  </div>
                </div>
                <div className="px-4 py-5 border-t border-l border-gray-200 lg:border-t-0 sm:p-6">
                  <p className="text-sm font-medium text-gray-500">
                    On Duty
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">9000</p>
                  <div className="relative w-full h-1 mt-6 bg-gray-100 rounded-full">
                    <div className="absolute inset-y-0 left-0 bg-yellow-500 rounded-full w-[90%]" />
                  </div>
                </div>
                <div className="px-4 py-5 border-t border-l border-gray-200 sm:p-6 lg:border-t-0">
                  <p className="text-sm font-medium text-gray-500">
                   Resigned
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">200</p>
                  <div className="relative w-full h-1 mt-6 bg-gray-100 rounded-full">
                    <div className="absolute inset-y-0 left-0 bg-green-600 rounded-full w-[1%]" />
                  </div>
                </div>
                <div className="px-4 py-5 border-t border-l border-gray-200 sm:p-6 lg:border-t-0">
                  <p className="text-sm font-medium text-gray-500">
                   Suspended
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">500</p>
                  <div className="relative w-full h-1 mt-6 bg-gray-100 rounded-full">
                    <div className="absolute inset-y-0 left-0 bg-red-600 rounded-full w-[5%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        



      </div>
    );
  };
  
  export default EmployeeStats;
  