import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useState } from 'react';

const  PayRolldata = () => {
  const [dateFilter, setDateFilter] = useState("WE08082024"); // Default date filter

  const pData = [


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

  const updatePayroll = () => {
    // Assuming there's a function to handle the update logic
    console.log("Update payroll functionality not implemented yet.");
  };

  const deletePayroll = () => {
    // Assuming there's a function to handle the delete logic
    console.log("Delete payroll functionality not implemented yet.");
  };
  return (
    <div className="py-4 sm:py-4 font-mainFont">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-gray-900">Workshop Management System</p>
          </div>
          <div>
            <button onClick={downloadReport} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
              Download Report
            </button>
            <button className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232a2 2 0 00-2.236 0L-5.75 6.75m0-6.75a2 2 0 012.236 0h17.493m-14.493 14.493a2 2 0 002.236 0l6.75 6.75m0-6.75a2 2 0 002.236 0" /></svg>
              Record Motor Vehicle for Repair
            </button>
            <button className="ml-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m6-5v3m-6 0v-3" /></svg>
              Allocate Car to Assembling Mechanic
            </button>
            <button className="ml-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6 4h.01M9 16h.01" /></svg>
              Generate Report on Complete Vehicle and Vehicle Schedules
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

        {/* table of payroll data */}
        <div className="flex flex-col mt-4 lg:mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle md:px-6 lg:px-8">
              {/* table */}
              <table id="payroll-table" className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                {/* table titles */}
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

                {/* table body */}
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
    </div>
  );
};

export default PayRolldata