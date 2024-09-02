import { Link } from "react-router-dom";
import OtpFields from "../../components/modals/otpFields";
const OtpPage = () => {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <div className="bg-white max-w-sm overflow-hidden shadow-lg rounded-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="px-4 py-6 text-center">
            <div className="px-4 py-5 sm:p-6">
         
              <p className="mt-5 text-xl font-bold text-gray-900 text-center">
                Hi, Admin Surname
              </p>
              <p className="mt-3 text-sm font-medium text-gray-500 text-center">
                To Proceed Login, please enter the 6 digit code that was sent to your Phone number.
              </p>

              {/* Resend otp */}
              <div className="pt-4 flex items-center justify-center">
                <Link to='#'>
                  <p className="underline text-blue-500">Resend OTP</p>
                </Link>
              </div>

              {/* otp fields */}
              <div>
                <OtpFields />
              </div>

              <Link to="/student">
                <button
                  type="button"
                  className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-gray-700"
                >
                  Confirm OTP
                </button>
              </Link>

              <div className="mt-3">
                <Link to="/">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-500 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-red-200"
                  >
                    Logout Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OtpPage;
