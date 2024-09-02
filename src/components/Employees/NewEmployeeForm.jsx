import {useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader"; 
import useAddEmployeeStore from "../../../../../zustStores/hrStores/addEmployee"
const NewEmployeeForm = () => {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // State to manage employee form fields
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [nationalID, setNationalID] = useState('');
  const [fullName, setFullName] = useState('');
  const [sex, setSex] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [siteID, setSiteID] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateJoined, setDateJoined] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [nssaNumber, setNssaNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankBranch, setBankBranch] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [medicalAidScheme, setMedicalAidScheme] = useState('');
  const [medicalAidNumber, setMedicalAidNumber] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [nextOfKinName, setNextOfKinName] = useState('');
  const [nextOfKinPhoneNumber, setNextOfKinPhoneNumber] = useState('');
  const [nextOfKinPhysicalAddress, setNextOfKinPhysicalAddress] = useState('');
  const { addEmployee } = useAddEmployeeStore(); 
  // Function to handle form submission

    const handleSaveEmployee = async () => {
      setLoading(true); // Start loading
      const payload = {
        employeeNumber,
        nationalID,
        fullName,
        sex,
        dateOfBirth,
        department,
        role,
        siteID,
        phoneNumber,
        email,
        dateJoined,
        maritalStatus,
        nssaNumber,
        bankName,
        bankBranch,
        bankAccountNumber,
        medicalAidScheme,
        medicalAidNumber,
        physicalAddress,
        nextOfKinName,
        nextOfKinPhoneNumber,
        nextOfKinPhysicalAddress,
      };
      console.log("Payload for addEmployee:", payload);
      try {
        const result = await addEmployee(payload);
        if (result && result.success) {
          
          setShowModal(true);
          setError(null); // Reset error state on successful save
        } else {
          setError(result ? result.message : "Failed to save employee"); // Set error message from result or a default message if result is undefined
        }
      } catch (error) {
        console.error("Failed to save employee:", error);
        setError(error.message || "Failing to reach the server"); // Set error state to the error message
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

  const closeModal = () => {
    // Here you can perform any actions related to saving the employee data
    // For demonstration, let's just toggle the modal visibility
    setShowModal(false);
  };
  
  const ErrorModal = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <div className="absolute z-10 bg-white max-w-sm overflow-hidden shadow-lg rounded-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="p-8">
          <div className="text-center">
            <p className="mt-4 text-xl font-bold text-red-600">Error</p>
            <p className="mt-2 text-gray-700">{error}</p>
            <div className="mt-4">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-black transition-all duration-200 bg-red-300 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-red-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div> 
    <form className="space-y-10 max-w-4xl mx-auto p-8">
    <div className="flex items-center justify-center pb-4 text-xl font-bold">
              <h1>New Employee Form</h1> 
               </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Display error modal if error state is not null */}
                      {error && <ErrorModal onClose={() => setError(null)} />}
          {/* Basic Information */}
          <input type="text" placeholder="Employee Number"
                                value={employeeNumber}
                                onChange={(e) => setEmployeeNumber(e.target.value)} 
           className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" required/>
          <input type="text" 
          placeholder="National ID"
          value={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
           className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
            <input type="text" 
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
             className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
            <select
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
             className="pl-2 select select-bordered w-full text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900">
                <option disabled selected>Sex</option>
                <option  value="Male"> Male</option>
                <option  value="Female">Female</option>
                <option  value="Custom">Custom</option>
              </select>
              <div className='flex justify-between items-center'> 
                <label htmlFor="date" className='text-xl font-medium'>Date of Birth</label>
                <input
                      type="text"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      placeholder="YYYY-MM-DD"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    />

            </div>
            <input type="text"
                placeholder="Department"
                value={department}
                  onChange={(e) => setDepartment(e.target.value)}
          className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <input type="text" placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
         className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <input type="text"
         placeholder="Site"
         value={siteID}
          onChange={(e) => setSiteID(e.target.value)}
         className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        {/* Contact Information */}
        <input type="tel"
         placeholder="Phone Number 1" 
         value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
         className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        
        <input type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <div className='flex justify-between items-center'> 
          <label htmlFor="date" className='text-xl font-medium'>Date Joined</label>
          <input
                      type="text"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      placeholder="YYYY-MM-DD"
                      value={dateJoined}
                      onChange={(e) => setDateJoined(e.target.value)}
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    />
       </div>  {/* Personal Details */}
        <select 
                                value={maritalStatus} 
                                onChange={(e) => setMaritalStatus(e.target.value)}
        className="pl-2 select select-bordered w-full text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900">
         
          <option disabled selected >Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
        <input type="text" 
        placeholder="NSSA Number"
        value={nssaNumber} 
        onChange={(e) => setNssaNumber(e.target.value)}
         className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />

        {/* Financial Information */}
        <input type="text"
         placeholder="Bank Name"
         value={bankName}
         onChange={(e) => setBankName(e.target.value)}
          className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <input type="text"
         placeholder="Bank Branch"
         value={bankBranch}
         onChange={(e) => setBankBranch(e.target.value)}
          className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <input type="text" 
        placeholder="Bank Account Number"
        value={bankAccountNumber}
        onChange={(e) => setBankAccountNumber(e.target.value)}
         className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <input type="text" placeholder="Medical Aid Scheme"
        value={medicalAidScheme}
        onChange={(e) => setMedicalAidScheme(e.target.value)}
        className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <input type="text" placeholder="Medical Aid Number"
        value={medicalAidNumber}
        onChange={(e) => setMedicalAidNumber(e.target.value)}
        className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        {/* Address */}
        <textarea placeholder="Physical Address"
        value={physicalAddress}
        onChange={(e) => setPhysicalAddress(e.target.value)}
        className="textarea border-b border-gray-500 textarea-bordered w-full" rows="2"></textarea>
        {/* Next of Kin */}
        <input type="text" placeholder="Next of Kin Name"
        value={nextOfKinName}
        onChange={(e) => setNextOfKinName(e.target.value)}
        className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <input type="tel" placeholder="Next of Kin Phone Number"
        value={nextOfKinPhoneNumber}
        onChange={(e) => setNextOfKinPhoneNumber(e.target.value)}
        className="block w-full pr-10 px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900" />
        <textarea placeholder="Next of Kin Physical Address"
        value={nextOfKinPhysicalAddress}
        onChange={(e) => setNextOfKinPhysicalAddress(e.target.value)}
        className="textarea border-b border-gray-500 textarea-bordered w-full" rows="2"></textarea>
        {/* Additional Fields */}


        <textarea placeholder="Special Medical Conditions" className="textarea border-b border-gray-500 textarea-bordered w-full" rows="2"></textarea>
      </div>
      <button  onClick={handleSaveEmployee} className=" flex
                          items-center
                          justify-center
                          
                          px-4
                          py-2
                          mt-12
                          text-base
                          font-medium
                          text-white
                          transition-all
                          duration-200
                          bg-green-800
                          border border-transparent
                          rounded-lg
                          hover:bg-green-600
                          ">Submit</button>
    </form>

     {/* modal */}
     {showModal && (
       <div className="fixed inset-0 flex items-center justify-center z-50">
       <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
       <div className="absolute z-10 bg-white max-w-sm overflow-hidden shadow-lg rounded-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="px-10 pb-6">
              <div className="absolute top-0 right-0 pt-3 pr-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={closeModal}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mx-10">
                <p className="mt-5 text-xl font-bold text-gray-900">
                  Employee successfully added
                </p>

                <div className="mt-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-6">
                {/* Cancel button */}
                <div className="mt-2">
                  <button
                    onClick={() => {
                      setShowModal(false); //close success modal
                       //this is implemented in plantMainArea and passed as props
                    }}
                    type="button"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-700 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-red-500"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      
    ) }
    </div>
);
};

export default NewEmployeeForm;




