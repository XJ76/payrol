import { useState } from "react";
const Editing = () => {
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null); // Keep track of the selected Employee index

  const handleShowEmployeeDetails = (index) => {
    setSelectedEmployeeIndex(index); // Set the index of the clicked Employee
    setShowEmployeeDetails(true); // Show the modal
  };

  const handleCloseEmployeeDetailsModal = () => {
    setShowEmployeeDetails(false); // Hide the modal
  };
  return (
    <div>
      {showEmployeeDetails ? (
        "filter blur-sm"
      ) : (
        <td
          onClick={() => handleShowEmployeeDetails(index)}
          className="py-4 px-6 text-left whitespace-nowrap cursor-pointer"
        >
          {employee.employeeFullName}
        </td>
      )}
      <EmployeeDetailsModal
        handleCloseSiteDetailsModal={handleCloseEmployeeDetailsModal}
        showEmployeeDetails={showEmployeeDetails}
        EmployeeData={EmployeeData}
        selectedEmployeeIndex={selectedEmployeeIndex}
      />
    </div>
  );
};

export default Editing;
