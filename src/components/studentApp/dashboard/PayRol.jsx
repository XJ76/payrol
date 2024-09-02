import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useState } from 'react';

const  PayRolldata = () => {
  const [dateFilter, setDateFilter] = useState("WE08082024"); // Default date filter

  const pData = [

  {
    name: "Lewis Muroyiwa",
    gender: "Male",
    phone: "263718367977",
    location: "Harare",
    id: "20",
    date: "WE08082024",
    type: "ticket",
    friday: "1",
    monday: "4",
    tuesday: "1",
    wednesday: "4",
    thursday: "1",
    total: "20",
    balance: "0.00",
    newTotal: "20.00",
    payment: "20.00",
    balanceAfterPayment: "0.00"
  },
  {
    name: "Wendy Mukwavamombe",
    gender: "Female",
    phone: "263787595652",
    location: "Harare",
    id: "30",
    date: "WE08082024",
    type: "ticket",
    friday: "1",
    monday: "5",
    tuesday: "1",
    wednesday: "5",
    thursday: "1",
    total: "25",
    balance: "5.00",
    newTotal: "30.00",
    payment: "30.00",
    balanceAfterPayment: "0.00"
  },
  {
    name: "Webster Mbeveri",
    gender: "Male",
    phone: "263776892925",
    location: "Harare",
    id: "19",
    date: "WE08082024",
    type: "ticket",
    friday: "1",
    monday: "4",
    tuesday: "0.9125",
    wednesday: "3.65",
    thursday: "1",
    total: "19.65",
    balance: "0.00",
    newTotal: "19.65",
    payment: "19.00",
    balanceAfterPayment: "0.65"
  },
  {
    name: "Evernice Marume",
    gender: "Female",
    phone: "263780979203",
    location: "Harare",
    id: "25",
    date: "WE08082024",
    type: "ticket",
    friday: "1",
    monday: "5",
    tuesday: "1",
    wednesday: "5",
    thursday: "1",
    total: "25",
    balance: "0.00",
    newTotal: "25.00",
    payment: "25.00",
    balanceAfterPayment: "0.00"
  },
  {
    name: "Melody Mukombami",
    gender: "Female",
    phone: "263778670207",
    location: "Harare",
    id: "19",
    date: "WE08082024",
    type: "ticket",
    friday: "1",
    monday: "4",
    tuesday: "0.875",
    wednesday: "3.5",
    thursday: "1",
    total: "19.5",
    balance: "0.00",
    newTotal: "19.50",
    payment: "19.00",
    balanceAfterPayment: "0.50"
  },
  {
    name: "Memory Magudura",
    gender: "Female",
    phone: "263785828009",
    location: "Harare",
    id: "24",
    date: "WE08082024",
    type: "target",
    friday: "1",
    monday: "6",
    tuesday: "1",
    wednesday: "6",
    thursday: "123",
    total: "24.15",
    balance: "0.23",
    newTotal: "24.38",
    payment: "24.00",
    balanceAfterPayment: "0.38"
  },
  {
    name: "Tsungai Chinowaita",
    gender: "Female",
    phone: "263776072597",
    location: "Harare",
    id: "18",
    date: "WE08082024",
    type: "target",
    friday: "1",
    monday: "6",
    tuesday: "0.875",
    wednesday: "5.25",
    thursday: "21",
    total: "18.3",
    balance: "0.00",
    newTotal: "18.30",
    payment: "18.00",
    balanceAfterPayment: "0.30"
  },
  {
    name: "Fortunate Tinarwo",
    gender: "Female",
    phone: "263789156416",
    location: "Harare",
    id: "26",
    date: "WE08082024",
    type: "target",
    friday: "1",
    monday: "6",
    tuesday: "0.875",
    wednesday: "5.25",
    thursday: "87",
    total: "25.95",
    balance: "0.43",
    newTotal: "26.38",
    payment: "26.00",
    balanceAfterPayment: "0.38"
  },
  {
    name: "Tariro Nyaguse",
    gender: "Female",
    phone: "263784971471",
    location: "Harare",
    id: "23",
    date: "WE08082024",
    type: "target",
    friday: "1",
    monday: "6",
    tuesday: "1",
    wednesday: "6",
    thursday: "100",
    total: "23",
    balance: "0.04",
    newTotal: "23.04",
    payment: "23.00",
    balanceAfterPayment: "0.04"
  },
  {
    name: "Rosemary Nyakapa",
    gender: "Female",
    phone: "263774370006",
    location: "Harare",
    id: "24",
    date: "WE08082024",
    type: "target",
    friday: "1",
    monday: "6",
    tuesday: "",
    wednesday: "0",
    thursday: "120",
    total: "24",
    balance: "0.92",
    newTotal: "24.92",
    payment: "24.00",
    balanceAfterPayment: "0.92"
  },
  {
    name: "Esther Jaffet",
    gender: "Female",
    phone: "263773153379",
    location: "Harare",
    id: "28",
    date: "WE08082024",
    type: "target",
    friday: "1",
    monday: "6",
    tuesday: "1",
    wednesday: "6",
    thursday: "100",
    total: "28.5",
    balance: "0.04",
    newTotal: "28.54",
    payment: "28.00",
    balanceAfterPayment: "0.54"
  },
  {
    name: "Tarisai C",
    gender: "Female",
    phone: "263784724030",
    location: "Harare",
    id: "18",
    date: "WE08082024",
    type: "target",
    friday: "1",
    monday: "6",
    tuesday: "1",
    wednesday: "4",
    thursday: "64",
    total: "18",
    balance: "0.13",
    newTotal: "18.13",
    payment: "18.00",
    balanceAfterPayment: "0.13"
  },
  {
    name: "Piniel byron Muchucha",
    gender: "Male",
    phone: "263711491415",
    location: "Harare",
    id: "18",
    date: "WE08082024",
    type: "9",
    friday: "1",
    monday: "4",
    tuesday: "1",
    wednesday: "4",
    thursday: "4",
    total: "18.00",
    balance: "0.44",
    newTotal: "18.44",
    payment: "18.00",
    balanceAfterPayment: "0.44"
  },
  {
    name: "Remember Kabudura",
    gender: "Male",
    phone: "263773006421",
    location: "Harare",
    id: "15",
    date: "WE08082024",
    type: "9",
    friday: "1",
    monday: "4",
    tuesday: "1",
    wednesday: "4",
    thursday: "5",
    total: "15.00",
    balance: "0.94",
    newTotal: "15.94",
    payment: "15.00",
    balanceAfterPayment: "0.94"
  },
  {
    name: "Samson Isaki",
    gender: "Male",
    phone: "263784724030",
    location: "Harare",
    id: "4",
    date: "WE08082024",
    type: "9",
    friday: "1",
    monday: "4",
    tuesday: "",
    wednesday: "",
    thursday: "",
    total: "4.00",
    balance: "0.44",
    newTotal: "4.44",
    payment: "4.00",
    balanceAfterPayment: "0.44"
  },
  {
    name: "Dadayi Dheya",
    gender: "Male",
    phone: "263779858089",
    location: "Harare",
    id: "24",
    date: "WE08082024",
    type: "250",
    friday: "250",
    monday: "250",
    tuesday: "5",
    wednesday: "200",
    thursday: "4",
    total: "63",
    balance: "3.15",
    newTotal: "20.15",
    payment: "4.16",
    balanceAfterPayment: "24.31"
  },
  {
    name: "Munyaradzi Mlambo",
    gender: "Male",
    phone: "263776504825",
    location: "Harare",
    id: "14",
    date: "WE08082024",
    type: "250",
    friday: "",
    monday: "",
    tuesday: "0",
    wednesday: "200",
    thursday: "4",
    total: "52",
    balance: "2.6",
    newTotal: "14.6",
    payment: "0.35",
    balanceAfterPayment: "14.95"
  },
  {
    name: "Brenda Mutetwa",
    gender: "Female",
    phone: "263783424663",
    location: "Harare",
    id: "45",
    date: "WE08082024",
    type: "250",
    friday: "250",
    monday: "260",
    tuesday: "5.2",
    wednesday: "196",
    thursday: "3.92",
    total: "105",
    balance: "5.25",
    newTotal: "23.07",
    payment: "0.50",
    balanceAfterPayment: "23.57"
  },
  {
    name: "Fungai",
    gender: "",
    phone: "",
    location: "",
    id: "",
    date: "WE08082024",
    type: "250",
    friday: "250",
    monday: "235",
    tuesday: "4.7",
    wednesday: "217",
    thursday: "4.34",
    total: "118",
    balance: "5.9",
    newTotal: "22.92",
    payment: "-0.50",
    balanceAfterPayment: "22.42"
  },
  {
    name: "Kinos Chuma",
    gender: "Male",
    phone: "263719315895",
    location: "Harare",
    id: "8",
    date: "WE08082024",
    type: "250",
    friday: "",
    monday: "",
    tuesday: "0",
    wednesday: "1",
    thursday: "4",
    total: "8",
    balance: "0.00",
    newTotal: "8.00",
    payment: "8.00",
    balanceAfterPayment: "0.00"
  },
  {
    name: "Hilda Madziripi",
    gender: "Female",
    phone: "263786830115",
    location: "Harare",
    id: "19",
    date: "WE08082024",
    type: "250",
    friday: "250",
    monday: "256",
    tuesday: "5.12",
    wednesday: "",
    thursday: "1",
    total: "112",
    balance: "5.6",
    newTotal: "18.72",
    payment: "0.37",
    balanceAfterPayment: "19.09"
  },
  {
    name: "Chiratidzo Dheya",
    gender: "Male",
    phone: "263779858089",
    location: "Harare",
    id: "12",
    date: "WE08082024",
    type: "250",
    friday: "250",
    monday: "250",
    tuesday: "5",
    wednesday: "",
    thursday: "2",
    total: "42",
    balance: "2.1",
    newTotal: "12.1",
    payment: "0.40",
    balanceAfterPayment: "12.50"
  },
  {
    name: "Juliet Ziyambe",
    gender: "Female",
    phone: "263779356878",
    location: "Harare",
    id: "16",
    date: "WE08082024",
    type: "250",
    friday: "250",
    monday: "181",
    tuesday: "3.62",
    wednesday: "62",
    thursday: "1.24",
    total: "16.86",
    balance: "0.05",
    newTotal: "16.91",
    payment: "16.00",
    balanceAfterPayment: "0.91"
  },
  {
    name: "Lindiwe Tsoka",
    gender: "Female",
    phone: "263779868712",
    location: "Harare",
    id: "24",
    date: "WE08082024",
    type: "250",
    friday: "250",
    monday: "286",
    tuesday: "5.72",
    wednesday: "185",
    thursday: "3.7",
    total: "100",
    balance: "5",
    newTotal: "24.57",
    payment: "0.24",
    balanceAfterPayment: "24.81"
  },
  {
    name: "Addeline Zungunde",
    gender: "Female",
    phone: "263783404175",
    location: "Harare",
    id: "21",
    date: "WE08082024",
    type: "250",
    friday: "250",
    monday: "224",
    tuesday: "4.48",
    wednesday: "126",
    thursday: "2.52",
    total: "19",
    balance: "2.30",
    newTotal: "21.30",
    payment: "21.00",
    balanceAfterPayment: "0.30"
  }

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
            <p className="text-base font-bold text-gray-900">Payroll Data</p>
          </div>
          <div>
            <button onClick={downloadReport} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
              Download Report
            </button>
            <button onClick={updatePayroll} className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232a2 2 0 00-2.236 0L-5.75 6.75m0-6.75a2 2 0 012.236 0h17.493m-14.493 14.493a2 2 0 002.236 0l6.75 6.75m0-6.75a2 2 0 002.236 0" /></svg>
              Update Payroll
            </button>
            <button onClick={deletePayroll} className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-5 5m0 0 5-5m-5 5V4" /></svg>
              Delete Payroll
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
                      <div className="flex items-center">Name</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Gender</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Phone</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Location</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">ID</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Date</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Type</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Total</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Balance</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">New Total</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Payment</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Balance After Payment</div>
                    </th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody className="text-gray-900 text-sm font-medium">
                  {pData.map((data, index) => (
                    <tr key={index} className="border-b border-blue-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.name}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.gender}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.phone}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.location}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.id}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.date}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.type}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.total}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.balance}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.newTotal}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.payment}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {data.balanceAfterPayment}
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