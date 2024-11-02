import React, { useState } from 'react';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Schedualing = () => {
  const [mechanics, setMechanics] = useState([
    { name: 'Tawanda', available: true },
    { name: 'Nyasha', available: true },
    { name: 'Tatenda', available: true },
    { name: 'Rudo', available: true },
  ]);

  const [cars, setCars] = useState([
    { name: 'Toyota Corolla', inWorkshop: true },
    { name: 'Honda Civic', inWorkshop: true },
    { name: 'Ford Focus', inWorkshop: true },
    { name: 'Mazda 3', inWorkshop: true },
  ]);

  const [schedules, setSchedules] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSchedule = () => {
    if (selectedMechanic && selectedCar && scheduleDate) {
      setSchedules([...schedules, { mechanic: selectedMechanic, car: selectedCar, date: scheduleDate }]);
      setSelectedMechanic('');
      setSelectedCar('');
      setScheduleDate('');
      setIsModalOpen(false);
    }
  };

  const handleDeleteSchedule = (index) => {
    const newSchedules = schedules.filter((_, i) => i !== index);
    setSchedules(newSchedules);
  };

  const handleDownloadSchedule = () => {
    const doc = new jsPDF();
    doc.text("Workshop Schedule", 14, 16);
    doc.autoTable({
      head: [['Date', 'Mechanic', 'Car']],
      body: schedules.map(schedule => [schedule.date, schedule.mechanic, schedule.car]),
      startY: 20,
    });
    doc.save('workshop_schedule.pdf');
  };

  return (
    <div className="py-4 sm:py-4 font-mainFont">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">Workshop Scheduling</p>
          </div>
          <div>
            <button
              onClick={handleDownloadSchedule}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            >
              Download Schedule as PDF
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            >
              Add Schedule
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Available Mechanics</h3>
          <ul className="list-disc pl-5">
            {mechanics.map((mechanic, index) => (
              <li key={index} className="py-2 text-gray-700">
                {mechanic.name} - {mechanic.available ? 'Available' : 'Not Available'}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Cars in Workshop</h3>
          <ul className="list-disc pl-5">
            {cars.map((car, index) => (
              <li key={index} className="py-2 text-gray-700">
                {car.name} - {car.inWorkshop ? 'In Workshop' : 'Not In Workshop'}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Schedules</h3>
          <ul className="list-disc pl-5">
            {schedules.map((schedule, index) => (
              <li key={index} className="py-2 text-gray-700 flex justify-between items-center">
                {schedule.date} - {schedule.mechanic} will work on {schedule.car}
                <button
                  onClick={() => handleDeleteSchedule(index)}
                  className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg shadow-md"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Add Schedule</h3>
                    <div className="mt-2">
                      <select
                        value={selectedMechanic}
                        onChange={(e) => setSelectedMechanic(e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="">Select Mechanic</option>
                        {mechanics.map((mechanic, index) => (
                          <option key={index} value={mechanic.name}>
                            {mechanic.name}
                          </option>
                        ))}
                      </select>
                      <select
                        value={selectedCar}
                        onChange={(e) => setSelectedCar(e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mt-4"
                      >
                        <option value="">Select Car</option>
                        {cars.map((car, index) => (
                          <option key={index} value={car.name}>
                            {car.name}
                          </option>
                        ))}
                      </select>
                      <input
                        type="date"
                        value={scheduleDate}
                        onChange={(e) => setScheduleDate(e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mt-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleAddSchedule}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedualing;
