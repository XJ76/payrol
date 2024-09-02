//import {Link} from 'react-router-dom'
import { useState } from "react";
import { HiDownload } from "react-icons/hi";

const PaymentTable = () => {
  // State to track number of payments displayed
  const [displayedPayments, setDisplayedPayments] = useState(8);

  // Function to load more payments
  const loadMorePayments = () => {
    // Increase the number of displayed payments by 8
    setDisplayedPayments((prevCount) => prevCount + 8);
  };

  const payments = [

    // Dummy payroll data
    {
      id: 4,
      name: "Tendai Moyo",
      phoneNumber: "EcoCash",
      joinDate: "January 1, 2022",
      cashier: "Payroll",
      status: "$10,000",
      statusColor: "green-500",
    },
    {
      id: 5,
      name: "Tafadzwa Chikwava",
      phoneNumber: "EcoCash",
      joinDate: "January 1, 2022",
      cashier: "Payroll",
      status: "$5,000",
      statusColor: "green-500",
    },
    {
      id: 6,
      name: "Rumbidzai Moyo",
      phoneNumber: "EcoCash",
      joinDate: "January 1, 2022",
      cashier: "Payroll",
      status: "$3,000",
      statusColor: "green-500",
    },
    {
      id: 7,
      name: "Tinashe Moyo",
      phoneNumber: "EcoCash",
      joinDate: "January 1, 2022",
      cashier: "Payroll",
      status: "$2,000",
      statusColor: "green-500",
    },
    // Add more payment objects as needed
  ];

  return (
    <div className="py-4 sm:py-4">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-gray-900">All payments</p>
          </div>
          <div className="mt-4">
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => window.print()}
            >
              <HiDownload className="mr-2" /> Download Report
            </button>
          </div>
        </div>

        {/* table of deposits by agent */}
        <div className="flex flex-col mt-4 lg:mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8">
              {/* table */}
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                {/* table titles */}
                <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <tr>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Description</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Payment Method</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Payment Date</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Cashier</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Amount</div>
                    </th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody className="text-gray-600 text-sm font-light">
                  {payments
                    .slice(0, displayedPayments)
                    .map((payment, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          {payment.name}
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          {payment.phoneNumber}
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          {payment.joinDate}
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          {payment.cashier}
                        </td>
                        <td>
                          <div className="inline-flex items-center">
                            <svg
                              className={`mr-1.5 h-2.5 w-2.5  text-${payment.statusColor}`}
                              fill="currentColor"
                              viewBox="0 0 8 8"
                            >
                              <circle cx="4" cy="4" r="3" />
                            </svg>

                            {payment.status}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* Show more button */}
              {displayedPayments < payments.length && (
                <div className="flex justify-center mt-4">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={loadMorePayments}
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
