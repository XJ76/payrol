import React, { useState } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const Invoice = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({
    car: '',
    owner: '',
    cost: '',
    invoiceNumber: '',
    phoneNumber: ''
  });

  const handleCreateInvoice = () => {
    if (!newJob.phoneNumber.startsWith('+263')) {
      alert('Phone number is missing');
      return;
    }
    if (
      newJob.car.trim() === '' ||
      newJob.owner.trim() === '' ||
      newJob.cost.trim() === '' ||
      newJob.invoiceNumber.trim() === '' ||
      newJob.phoneNumber.trim() === ''
    ) {
      alert('All fields must be filled out');
      return;
    }
    setJobs([...jobs, newJob]);
    setNewJob({
      car: '',
      owner: '',
      cost: '',
      invoiceNumber: '',
      phoneNumber: ''
    });
    setShowModal(false);
  };

  const generateInvoice = (job) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.setTextColor(40);
    doc.text('Invoice', 10, 10);
    doc.setFontSize(12);
    doc.text(`Invoice Number: ${job.invoiceNumber}`, 10, 30);
    doc.text(`Car: ${job.car}`, 10, 40);
    doc.text(`Owner: ${job.owner}`, 10, 50);
    doc.text(`Cost of Repair: $${job.cost}`, 10, 60);
    doc.text(`Phone Number: ${job.phoneNumber}`, 10, 70);
    doc.save(`${job.invoiceNumber}.pdf`);
  };

  return (
    <div className="py-4 sm:py-4 font-mainFont">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-gray-900">Booked Jobs</p>
          </div>
          <div>
            <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Create Invoice
            </button>
          </div>
        </div>

        <table className="min-w-full mt-4">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Car</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Owner</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Cost of Repair</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{job.car}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{job.owner}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">${job.cost}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{job.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <button
                    onClick={() => generateInvoice(job)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Generate Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Create Invoice</h2>
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-900">Car</label>
              <input
                type="text"
                value={newJob.car}
                onChange={(e) => setNewJob({ ...newJob, car: e.target.value })}
                className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-900">Owner</label>
              <input
                type="text"
                value={newJob.owner}
                onChange={(e) => setNewJob({ ...newJob, owner: e.target.value })}
                className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-900">Cost</label>
              <input
                type="number"
                value={newJob.cost}
                onChange={(e) => setNewJob({ ...newJob, cost: e.target.value })}
                className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-900">Invoice Number</label>
              <input
                type="text"
                value={newJob.invoiceNumber}
                onChange={(e) => setNewJob({ ...newJob, invoiceNumber: e.target.value })}
                className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-900">Phone Number</label>
              <input
                type="text"
                value={newJob.phoneNumber}
                onChange={(e) => setNewJob({ ...newJob, phoneNumber: e.target.value })}
                className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateInvoice}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl"
              >
                Create Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoice;
