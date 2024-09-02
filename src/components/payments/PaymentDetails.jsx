import { useEffect } from 'react';
import { motion } from 'framer-motion';

const PaymentDetails = () => {
  useEffect(() => {
    // Animation logic can be added here
  }, []);

  return (
    <div className="relative">
      <div className="py-4 bg-gray-50 sm:py-16 lg:py-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 py-4 border-t border-b border-gray-200 xl:grid-cols-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="pb-10 lg:pb-0"
            >
              <p className="text-sm font-medium text-gray-600">Payroll Balance</p>
              <div className="inline-flex items-center mt-3">
                <motion.p 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  className="text-2xl font-bold text-gray-900 bg-green-100 rounded-xl px-2.5 py-1.5"
                >
                  $50,000
                </motion.p>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-500">
                CURRENT PAY PERIOD
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="pb-10 pl-10 border-gray-200 xl:pb-0 xl:border-l"
            >
              <p className="text-sm font-medium text-gray-600">
                Payroll Code
              </p>
              <div className="inline-flex items-center mt-3">
                <p className="text-2xl font-bold text-gray-900">8800883</p>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-500">
                Payroll Department
              </p>
            </motion.div>
{/* 
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-10 border-t xl:border-l xl:py-0 lg:border-gray-200 xl:pl-10 xl:border-t-0"
            >
              <p className="text-sm font-medium text-gray-600">
                Payroll Account
              </p>
              <div className="inline-flex items-center mt-3">
                <p className="text-2xl font-bold text-gray-900">0717078145</p>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-500">
                Payroll Services
              </p>
            </motion.div> */}

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-10 pl-10 border-t border-gray-200 xl:py-0 xl:border-l xl:border-t-0"
            >
              <p className="text-sm font-medium text-gray-600">
                Payroll ZB ZIG Account
              </p>
              <div className="inline-flex items-center mt-3">
                <p className="text-xl font-bold text-gray-900">230392309310</p>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-500">
                Payroll Services
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 pt-10 border-t xl:col-span-1 xl:py-0 xl:border-l xl:border-t-0 xl:border-gray-200 xl:pl-10"
            >
              <p className="text-sm font-medium text-gray-600">
                Payroll ZB Nostro Account
              </p>
              <div className="inline-flex items-center mt-3">
                <p className="text-xl font-bold text-gray-900">230392309320</p>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-500">
                Payroll Services
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="pb-10 lg:pb-0"
            >
              <p className="text-sm font-medium text-gray-600">Used Payroll</p>
              <div className="inline-flex items-center mt-3">
                <motion.p 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  className="text-2xl font-bold text-gray-900 bg-red-100 rounded-xl px-2.5 py-1.5"
                >
                  $20,000
                </motion.p>
              </div>
              <p className="mt-4 text-xs font-medium text-gray-500">
                CURRENT PAY PERIOD
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PaymentDetails;
