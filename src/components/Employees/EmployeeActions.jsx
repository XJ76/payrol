/* eslint-disable react/prop-types */
import { useState } from 'react'
import { MdDelete, MdAssignmentAdd } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import AssignEmployeeModal from './AssignEmployeeModal';

const EmployeeActions = ({id}) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isAssignEmployeeModalOpen, setAssignEmployeeModalOpen] = useState(false);

  const handleDeleteButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAssignEmployeeClose = () => {
    setAssignEmployeeModalOpen(false);
  };

  const handleAssignEmployeeAssign = () => {
    console.log("Employee has been successfully assigned.");
  };

  return (
    <div>
        {!isModalOpen && !isAssignEmployeeModalOpen && (
      <div className="grid grid-cols-2 gap-1">
        <button className="text-green-900 text-xl hover:transition-transform hover:transform hover:-translate-y-1 hover:duration-300"
        onClick={() => setAssignEmployeeModalOpen(true)}>
          <MdAssignmentAdd />
        </button>

        <button className="text-red-700 text-xl hover:transition-transform hover:transform
         hover:-translate-y-1 hover:duration-300"
         onClick={handleDeleteButtonClick}>
          <MdDelete /> 
        </button>
        
      </div>)}
      <DeleteModal onClose={handleCloseModal}
      isModalOpen={isModalOpen} 
      id={id}/>

      <AssignEmployeeModal 
      isAssignEmployeeModalOpen={isAssignEmployeeModalOpen}
      onAssignEmployeeClose={handleAssignEmployeeClose} 
      onAssignEmployeeAssign={handleAssignEmployeeAssign}
      />
    </div>
  );
};

export default EmployeeActions;
