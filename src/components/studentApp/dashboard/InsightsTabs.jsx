import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useState } from 'react';

const PayRolldata = () => {
  const [dateFilter, setDateFilter] = useState("WE08082024"); // Default date filter
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState({
    vehicleRegistration: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    serviceType: '',
    serviceDate: '',
    odometerReading: '',
    serviceCost: '',
    assignedMechanic: '', // Added field for assigning mechanic
  });

  const pData = [
    {
      vehicleRegistration: 'ABC123',
      assignedMechanic: 'John Doe',
      repairStatus: 'Completed',
      repairDate: '2024-08-08',
      repairType: 'Dasboard Repair',
      totalCost: '$500',
      paymentStatus: 'Paid',
    },
    // Add more dummy data here
  ];

  const downloadReport = () => {
    const doc = new jsPDF();
    const element = document.getElementById('payroll-table');
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('payroll-report.pdf');
    });
  };

  const handleActionClick = (action) => {
    setCurrentAction(action);
    setIsModalOpen(true);
  };

  const handleConfirmAction = () => {
    // Perform the action based on the current action
    // You can add the logic for each action here
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const handleVehicleDetailsChange = (e) => {
    setVehicleDetails({ ...vehicleDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-4 sm:py-4 font-mainFont">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-gray-900">Workshop Management System</p>
          </div>
          <div className="flex space-x-2">
            <button onClick={downloadReport} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
              Download
            </button>
            <button onClick={() => handleActionClick('Record Vehicle')} className="bg-green-500 hover:bg-green-700 text-white font-semibold text-sm py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232a2 2 0 00-2.236 0L-5.75 6.75m0-6.75a2 2 0 012.236 0h17.493m-14.493 14.493a2 2 0 002.236 0l6.75 6.75m0-6.75a2 2 0 002.236 0" /></svg>
              Record Vehicle
            </button>
            <button onClick={() => handleActionClick('Allocate Car')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold text-sm py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232a2 2 0 00-2.236 0L-5.75 6.75m0-6.75a2 2 0 012.236 0h17.493m-14.493 14.493a2 2 0 002.236 0l6.75 6.75m0-6.75a2 2 0 002.236 0" /></svg>
              Allocate Car
            </button>
            <button onClick={() => handleActionClick('Generate Report')} className="bg-purple-500 hover:bg-purple-700 text-white font-semibold text-sm py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6 4h.01M9 16h.01" /></svg>
              Generate Report
            </button>
          </div>
        </div>

        {/* Date filter */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Select Date</label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="WE08082024">WE08082024</option>
            {/* Add more options for different dates */}
          </select>
        </div>

        {/* Table of payroll data */}
        <div className="flex flex-col mt-4 lg:mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle md:px-6 lg:px-8">
              <table id="payroll-table" className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-200 text-black uppercase text-sm leading-normal">
                  <tr>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Vehicle Registration</div>
                    </th>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Assigned Mechanic</div>
                    </th>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Repair Status</div>
                    </th>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Repair Date</div>
                    </th>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Repair Type</div>
                    </th>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Total Cost</div>
                    </th>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Payment Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-900 text-sm font-medium">
                  {pData.map((data, index) => (
                    <tr key={index} className="border-b border-blue-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.vehicleRegistration}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.assignedMechanic}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.repairStatus}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.repairDate}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.repairType}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.totalCost}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.paymentStatus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Action Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Confirm Action</h2>
            <p>Are you sure you want to {currentAction.toLowerCase()}?</p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-1 px-3 rounded">
                Cancel
              </button>
              <button onClick={handleConfirmAction} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded ml-2">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Vehicle Details Modal */}
      {isModalOpen && currentAction === 'Record Vehicle' && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Record Vehicle Details</h2>
            <div className="mt-4">
              <label htmlFor="vehicleRegistration" className="block text-sm font-medium text-gray-700">Vehicle Registration</label>
              <input
                type="text"
                id="vehicleRegistration"
                name="vehicleRegistration"
                value={vehicleDetails.vehicleRegistration}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mt-2">Vehicle Make</label>
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                value={vehicleDetails.vehicleMake}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mt-2">Vehicle Model</label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                value={vehicleDetails.vehicleModel}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700 mt-2">Vehicle Year</label>
              <input
                type="text"
                id="vehicleYear"
                name="vehicleYear"
                value={vehicleDetails.vehicleYear}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mt-2">Service Type</label>
              <input
                type="text"
                id="serviceType"
                name="serviceType"
                value={vehicleDetails.serviceType}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <label htmlFor="serviceDate" className="block text-sm font-medium text-gray-700 mt-2">Service Date</label>
              <input
                type="date"
                id="serviceDate"
                name="serviceDate"
                value={vehicleDetails.serviceDate}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <label htmlFor="odometerReading" className="block text-sm font-medium text-gray-700 mt-2">Odometer Reading</label>
              <input
                type="text"
                id="odometerReading"
                name="odometerReading"
                value={vehicleDetails.odometerReading}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <label htmlFor="serviceCost" className="block text-sm font-medium text-gray-700 mt-2">Service Cost</label>
              <input
                type="text"
                id="serviceCost"
                name="serviceCost"
                value={vehicleDetails.serviceCost}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-1 px-3 rounded">
                Cancel
              </button>
              <button onClick={handleConfirmAction} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded ml-2">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Allocate Vehicle Modal */}
      {isModalOpen && currentAction === 'Allocate Car' && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Allocate Vehicle</h2>
            <div className="mt-4">
              <label htmlFor="vehicleRegistration" className="block text-sm font-medium text-gray-700">Vehicle Registration</label>
              <input
                type="text"
                id="vehicleRegistration"
                name="vehicleRegistration"
                value={vehicleDetails.vehicleRegistration}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
              <label htmlFor="assignedMechanic" className="block text-sm font-medium text-gray-700 mt-2">Assigned Mechanic</label>
              <input
                type="text"
                id="assignedMechanic"
                name="assignedMechanic"
                value={vehicleDetails.assignedMechanic}
                onChange={handleVehicleDetailsChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-1 px-3 rounded">
                Cancel
              </button>
              <button onClick={handleConfirmAction} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded ml-2">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Success!</h2>
            <p>Your action has been successfully completed.</p>
            <div className="mt-4 flex justify-end">
              <button onClick={closeSuccessModal} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayRolldata;
