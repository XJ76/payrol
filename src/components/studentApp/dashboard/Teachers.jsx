import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";


const Teachers = () => {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
 

  const handleShowCustomerModal = (Customer) => {
    setSelectedTeacher(Customer);
    setShowCustomerModal(true);
  };

  const handleCloseCustomerModal = () => {
    setShowCustomerModal(false);
  };


  // Customers array
  const Teachers = [
    {
      name: "C Mangorima",
      class: "Physics",
      color: "green",
      action: "Manage",
      phoneNumber: "0775894364",
      location: "Harare",
      id: "18-45895657P65",
     
    },
    {
      name: "A Uraswe",
      class: "Computers",
      color: "red",
      action: "Manage",
      phoneNumber: "0775894364",
      location: "Marondera",
      id: "18-45895657P66",
     
    },
    {
      name: "J Smith",
      class: "Biology",
      color: "yellow",
      action: "Manage",
      phoneNumber: "0775894364",
      location: "Bulawayo",
      id: "18-25895657P69",
      
    },
    {
      name: "B Kwarara",
      class: "Geography",
      color: "red",
      action: "Manage",
      phoneNumber: "0775894364",
      location: "Kwekwe",
      id: "14-45895657P65",
      
    },
    {
      name: "B Chimudzi",
      class: "History",
      color: "green",
      action: "Manage",
      phoneNumber: "0775894364",
      location: "Chegutu",
      id: "16-45895657P65",
     
    },
  ];

  return (
    <div className="py-4 sm:py-4 font-mainFont">
      <div
        className={`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ${
          showCustomerModal ? "filter blur-sm" : ""
        }`}
      >
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-gray-900">Teachers</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              to="/admin/Customers"
              className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900"
            >
              See all Teachers
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-5">
          {Teachers.map((Teacher, index) => (
            <div className="" key={index}>
              <Card
                onClick={() => handleShowCustomerModal(Teacher)}
                className="cursor-pointer max-w-sm bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex flex-col items-center pb-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white">
                    {Teacher.name}
                  </h5>
                  <div className="inline-flex items-center">
                    
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {Teacher.class}
                    </span>
                  </div>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <Link>
                    <button
                      onClick={handleShowCustomerModal}
                      className="inline-flex items-center rounded-lg bg-blue-950 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-900 "
                    >
                     Contact
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to display Customer information */}
      {showCustomerModal && (
        <div className="bg-gray-100 h-96">
          <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6 fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-16 h-16 mx-auto text-gray-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <p className="mt-5 text-xl font-bold text-gray-900">
                    {selectedTeacher.name}
                  </p>
                  
                  {/* id */}
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 mt-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mt-2 text-md font-medium text-gray-700">
                        {selectedTeacher.id}
                      </p>
                    </div>
                  </div>
                  {/* end id */}

                  {/* phone number */}
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 mt-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mt-2 text-md font-medium text-gray-700">
                        {selectedTeacher.phoneNumber}
                      </p>
                    </div>
                  </div>
                  {/* end phone */}
                  {/* location */}
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 mt-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mt-2 text-md font-medium text-gray-700">
                        {selectedTeacher.location}
                      </p>
                    </div>
                  </div>
                  {/* end location */}
                  <div className="mt-8">
                    <button
                      onClick={handleCloseCustomerModal}
                      type="button"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-500 border border-transparent rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-red-600"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{/* end modal */}
    </div>

  );
};

export default Teachers;
