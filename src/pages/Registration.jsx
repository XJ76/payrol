import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import useStore from './../../production/allStores';

function Registration() {
  const [newVehicle, setNewVehicle] = useState({
    carRegNumber: "",
    make: "",
    model: "",
    ownerName: "",
    cost: "",
    estimatedCompletionDate: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState("");
  const createBooking = useStore((state) => state.createBooking);
  const bookings = useStore((state) => state.bookings);
  const getBookings = useStore((state) => state.getBookings);

  useEffect(() => {
    getBookings();
  }, [getBookings]);

  const handleAddVehicle = async () => {
    if (newVehicle.carRegNumber.length !== 8) {
      setError("Registration number must be exactly 8 characters.");
      return;
    }
    if (
      newVehicle.carRegNumber.trim() !== "" &&
      newVehicle.make.trim() !== "" &&
      newVehicle.model.trim() !== "" &&
      newVehicle.ownerName.trim() !== "" &&
      newVehicle.cost.trim() !== "" &&
      newVehicle.estimatedCompletionDate.trim() !== ""
    ) {
      try {
        await createBooking(newVehicle);
        setNewVehicle({
          carRegNumber: "",
          make: "",
          model: "",
          ownerName: "",
          cost: "",
          estimatedCompletionDate: ""
        });
        setShowModal(false);
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 3000);
        setError("");
      } catch (error) {
        setError("Failed to add vehicle. Please try again.");
      }
    }
  };

  const handleDownloadReport = () => {
    const doc = new jsPDF();
    doc.text("Vehicle Report", 14, 16);
    doc.autoTable({
      head: [
        [
          "Registration Number",
          "Make",
          "Model",
          "Owner Name",
          "Cost",
          "Estimated Completion Date"
        ]
      ],
      body: bookings.map(vehicle => [
        vehicle.carRegNumber,
        vehicle.make,
        vehicle.model,
        vehicle.ownerName,
        vehicle.cost,
        vehicle.estimatedCompletionDate
      ]),
      startY: 20
    });
    doc.save("vehicle_report.pdf");
  };

  return (
    <div className="px-6 py-6 md:px-8 font-mainFont">
      <div className="flow-root">
        <div className="-my-6 divide-y divide-gray-200 relative overflow-hidden bg-white shadow-xl rounded-xl px-6">
          <div>
            <div className="mt-2">
              <h3 className="text-xl font-bold text-gray-900">
                Vehicle Registration
              </h3>
            </div>

            <div className="mt-4 mb-2">
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <button
                      onClick={() => setShowModal(true)}
                      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl"
                    >
                      Add New Vehicle
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={handleDownloadReport}
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded-xl"
                    >
                      Download Report
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-medium text-gray-900 font-pj">
                    Registered Vehicles
                  </h4>
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Registration Number
                        </th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Make
                        </th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Model
                        </th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Owner Name
                        </th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Cost
                        </th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                          Estimated Completion Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((vehicle, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {vehicle.carRegNumber}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {vehicle.make}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {vehicle.model}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {vehicle.ownerName}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {vehicle.cost}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {vehicle.estimatedCompletionDate}
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
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Add New Vehicle</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="carRegNumber"
                  className="block text-base font-medium text-gray-900 font-pj"
                >
                  Registration Number
                </label>
                <input
                  type="text"
                  id="carRegNumber"
                  value={newVehicle.carRegNumber}
                  onChange={(e) => setNewVehicle({ ...newVehicle, carRegNumber: e.target.value })}
                  className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="make"
                  className="block text-base font-medium text-gray-900 font-pj"
                >
                  Make
                </label>
                <input
                  type="text"
                  id="make"
                  value={newVehicle.make}
                  onChange={(e) => setNewVehicle({ ...newVehicle, make: e.target.value })}
                  className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="model"
                  className="block text-base font-medium text-gray-900 font-pj"
                >
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  value={newVehicle.model}
                  onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
                  className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ownerName"
                  className="block text-base font-medium text-gray-900 font-pj"
                >
                  Owner Name
                </label>
                <input
                  type="text"
                  id="ownerName"
                  value={newVehicle.ownerName}
                  onChange={(e) => setNewVehicle({ ...newVehicle, ownerName: e.target.value })}
                  className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cost"
                  className="block text-base font-medium text-gray-900 font-pj"
                >
                  Cost
                </label>
                <input
                  type="number"
                  id="cost"
                  value={newVehicle.cost}
                  onChange={(e) => setNewVehicle({ ...newVehicle, cost: e.target.value })}
                  className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="estimatedCompletionDate"
                  className="block text-base font-medium text-gray-900 font-pj"
                >
                  Estimated Completion Date
                </label>
                <input
                  type="date"
                  id="estimatedCompletionDate"
                  value={newVehicle.estimatedCompletionDate}
                  onChange={(e) => setNewVehicle({ ...newVehicle, estimatedCompletionDate: e.target.value })}
                  className="block w-full py-2 pl-2 text-gray-900 placeholder-gray-600 bg-white rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleAddVehicle}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl"
              >
                Add Vehicle
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Success</h2>
            <p className="text-green-500">Vehicle added successfully!</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;
