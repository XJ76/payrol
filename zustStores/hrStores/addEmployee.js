import create from 'zustand';
import axios from 'axios';
import { BACKEND_URL } from '../apiUrls';

const useAddEmployeeStore = create((set) => ({
  addEmployeeStatus: null,
  error: null,
  addEmployee: async ({
    employeeNumber, nationalID, fullName, sex, dateOfBirth, department, role, status, siteID, phoneNumber, email,
    phoneNumber1, phoneNumber2, dateJoined, maritalStatus, nssaNumber, passportNumber, driversLicenseNumber,
    bankName, bankBranch, bankAccountNumber, medicalAidScheme, medicalAidNumber, physicalAddress,
    nextOfKinName, nextOfKinPhoneNumber, nextOfKinPhysicalAddress
  }) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/employee/createEmployee`, {
        employeeNumber, nationalID, fullName, sex, dateOfBirth, department, role, status, siteID, phoneNumber, email,
        phoneNumber1, phoneNumber2, dateJoined, maritalStatus, nssaNumber, passportNumber, driversLicenseNumber,
        bankName, bankBranch, bankAccountNumber, medicalAidScheme, medicalAidNumber, physicalAddress,
        nextOfKinName, nextOfKinPhoneNumber, nextOfKinPhysicalAddress
      });
      if (response.status === 201) {
        set({ addEmployeeStatus: 'Employee added successfully.', error: null });
      } else {
        set({ error: 'Failed to add employee. Please check your input.', addEmployeeStatus: null });
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMessage = error.response.data.error || 'Server responded with an error.';
        set({ error: errorMessage, addEmployeeStatus: null });
      } else if (error.request) {
        // The request was made but no response was received
        set({ error: 'The request was made but no response was received', addEmployeeStatus: null });
      } else {
        // Something happened in setting up the request that triggered an Error
        set({ error: 'Error in setting up the request.', addEmployeeStatus: null });
      }
    }
  }
}));

export default useAddEmployeeStore;
