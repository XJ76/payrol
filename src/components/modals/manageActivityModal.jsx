import { FaUserTie } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

const ManageActivityModal = ({
  showManageActivityModal,
  handleCloseManageActivityModal,
  handleCloseAgentAccount,
  handleFlagSuspiciousActivity,
  handleActivateAgentAccount
}) => {
  return (
    showManageActivityModal && (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-lg">
        <div className="flex items-center justify-center min-h-screen px-4 py-6">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-8">
              <div className="text-center">
               
                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                  Club Details
                </h2>
                <p className="mt-3 text-base font-medium text-gray-500">
                  Manage the agent account details and settings below.
                </p>
                <div className="mt-6">
                  <img src="https://via.placeholder.com/150" alt="Club Profile" className="mx-auto rounded-full shadow-md"/>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">The Debate Club</h3>
                  <p className="text-sm text-gray-600">Patron: <FaUserTie className="inline-block"/> Mr. John Doe</p>
                  <p className="text-sm text-gray-600">Subscription Fee: <MdAttachMoney className="inline-block"/> 50/year</p>
                </div>
              </div>
              <div className="flex justify-around mt-10 space-x-4">
                <button
                    type="button"
                    className="flex-1 py-3 text-sm font-semibold text-green-700 bg-green-200 border border-transparent rounded-md hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                    onClick={handleActivateAgentAccount}
                  >
                    Register to Club
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-3 text-sm font-semibold text-red-700 bg-red-200 border border-transparent rounded-md hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    onClick={handleCloseAgentAccount}
                  >
                    Cancel Membership
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-3 text-sm font-semibold text-yellow-700 bg-yellow-200 border border-transparent rounded-md hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
                    onClick={handleFlagSuspiciousActivity}
                  >
                    Learn More
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-3 text-sm font-semibold text-gray-700 bg-gray-200 border border-transparent rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                    onClick={handleCloseManageActivityModal}
                  >
                    Cancel
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ManageActivityModal;


