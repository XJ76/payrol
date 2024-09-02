import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import EmployeeDetailsModal from "./EmployeeDetailsModal"; // Imported the EmployeeDetailsModal as instructed
import EmployeeActions from "./EmployeeActions";

const EmployeesTable = ({ selectedTab }) => {
  const [displayedEmployees, setDisplayedEmployees] = useState(4);
  const [sortBy, setSortBy] = useState("Name");
  const [sortOrder] = useState("asc");
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);

  // Dummy data
  const EmployeesData = [
    { Name: "John Doe", ID: "1234", Department: "HR", Site: "Main", Contact: "john.doe@example.com", Role: "Manager", DateJoined: "2020-01-01", Status: "Active" },
    { Name: "Jane Smith", ID: "5678", Department: "Finance", Site: "Branch", Contact: "jane.smith@example.com", Role: "Accountant", DateJoined: "2019-06-01", Status: "Active" },
    { Name: "Bob Johnson", ID: "9012", Department: "IT", Site: "Main", Contact: "bob.johnson@example.com", Role: "Developer", DateJoined: "2018-03-01", Status: "Inactive" },
    { Name: "Alice Brown", ID: "3456", Department: "Marketing", Site: "Branch", Contact: "alice.brown@example.com", Role: "Marketing Manager", DateJoined: "2017-09-01", Status: "Active" },
    { Name: "Mike Davis", ID: "6789", Department: "Sales", Site: "Main", Contact: "mike.davis@example.com", Role: "Sales Manager", DateJoined: "2016-12-01", Status: "Active" },
    { Name: "Emily Taylor", ID: "1011", Department: "HR", Site: "Branch", Contact: "emily.taylor@example.com", Role: "HR Manager", DateJoined: "2015-06-01", Status: "Inactive" },
    { Name: "Sarah Lee", ID: "1213", Department: "Finance", Site: "Main", Contact: "sarah.lee@example.com", Role: "Financial Analyst", DateJoined: "2014-03-01", Status: "Active" },
    { Name: "Kevin White", ID: "1415", Department: "IT", Site: "Branch", Contact: "kevin.white@example.com", Role: "Network Administrator", DateJoined: "2013-09-01", Status: "Active" },
    { Name: "Lisa Nguyen", ID: "1617", Department: "Marketing", Site: "Main", Contact: "lisa.nguyen@example.com", Role: "Marketing Specialist", DateJoined: "2012-12-01", Status: "Inactive" },
    { Name: "David Hall", ID: "1819", Department: "Sales", Site: "Branch", Contact: "david.hall@example.com", Role: "Sales Representative", DateJoined: "2011-06-01", Status: "Active" },
  ];

  // details modal
  // Keep track of the selected Employee index

  const handleShowEmployeeDetails = (index) => {
    setSelectedEmployeeIndex(index); // Set the index of the clicked Employee
    setShowEmployeeDetails(true); // Show the modal
  };

  const handleCloseEmployeeDetailsModal = () => {
    setShowEmployeeDetails(false); // Hide the modal
  };

  // Filter employees based on selected tab
  const filteredEmployeesData =
    selectedTab === "All"
      ? EmployeesData
      : EmployeesData.filter((employee) => employee.Status === selectedTab);

  // Sort employees data
  const sortedEmployeesData = [...filteredEmployeesData].sort((a, b) => {
    const aValue = a[sortBy] ? a[sortBy] : '';
    const bValue = b[sortBy] ? b[sortBy] : '';

    if (sortOrder === "asc") {
      return aValue.toString().localeCompare(bValue.toString());
    } else {
      return bValue.toString().localeCompare(aValue.toString());
    }
  });

  // Load more employees
  const loadMoreEmployees = () => {
    setDisplayedEmployees((prevCount) => prevCount + 8);
  };

  return (
    <div>
      {showEmployeeDetails ? (
        <EmployeeDetailsModal
          handleCloseSiteDetailsModal={handleCloseEmployeeDetailsModal} // Changed to match the prop name in the provided modal
          showEmployeeDetails={showEmployeeDetails}
          EmployeesData={EmployeesData} // Changed to match the prop name in the provided modal
          selectedEmployeeIndex={selectedEmployeeIndex}
        />
      ) : (
        <section>
          <div className="flex items-center pr-8">
            <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
            <label htmlFor="sort" className="text-sm font-medium text-gray-900 mt-2 pt-2">Sort:</label>
            <select
              id="sort"
              name="sort"
              className="border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 mt-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Name">Name</option>
              <option value="Site">Site</option>
              <option value="Department">Department</option>
            </select>
          </div>

          <div className="flex flex-col mt-4 lg:mt-8 pb-6">
            <div className="-my-2 overflow-x-auto">
              <div className="inline-block min-w-full align-center md:px-6 lg:px-8">
                <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden shadow-lg pb-6">
                  <thead className="bg-gray-200 text-gray-600 text-sm leading-normal">
                    <tr>
                      <th className="py-3 px-6 text-left">Name</th>
                      <th className="py-3 px-2 text-left">ID</th>
                      <th className="py-3 px-6 text-left">Department</th>
                      <th className="py-3 inline-block">Site</th>
                      <th className="py-3 text-left">Contact</th>
                      <th className="py-3 px-4 text-left">Role</th>
                      <th className="py-3 px-6 text-left">Date Joined</th>
                      <th className="py-3 text-left">Status</th>
                      <th className="py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-lg font-light  text-left">
                    {sortedEmployeesData
                      .slice(0, displayedEmployees)
                      .map((employee, index) => (
                        <tr key={index} className="border-b border-gray-200" >
                          <td className="py-4 px-6 text-left cursor-pointer whitespace-nowrap" onClick={() => handleShowEmployeeDetails(index)}>{employee.Name}</td>
                          <td className="py-4 px-2 text-left whitespace-nowrap">{employee.ID}</td>
                          <td className="py-4 px-6 text-left whitespace-nowrap">{employee.Department}</td>
                          <td className="py-4 px-0 text-left whitespace-nowrap">{employee.Site}</td>
                          <td className="py-4 px-0 text-left whitespace-nowrap">{employee.Contact}</td>
                          <td className="py-4 px-4 text-left whitespace-nowrap">{employee.Role}</td>
                          <td className="py-4 px-6 text-left whitespace-nowrap">
                            {new Date(employee.DateJoined).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: '2-digit',
                              year: '2-digit',
                            })}
                          </td>
                          <td className="py-4 px-0 text-left whitespace-nowrap">{employee.Status}</td>
                          <td>
                            <EmployeeActions id={index} />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {displayedEmployees < sortedEmployeesData.length && (
                  <div className="flex justify-center mt-2">
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-[#06380b] rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
                      onClick={loadMoreEmployees}
                    >
                      Show More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

EmployeesTable.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default EmployeesTable;
