import { useState } from "react";

const Insights = () => {
  const [payrollData, setPayrollData] = useState([
    {
      title: "Pyrol Balance",
      value: "$20.00",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>,
      transition: "hover:scale-105 duration-500",
      className: "bg-white border border-gray-200 rounded-xl transition-transform hover:scale-105 duration-500",
    },
    {
      title: "Pyrol Usage",
      value: "+ 30.00",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>,
      transition: "hover:scale-95 duration-500",
      className: "bg-white border border-gray-200 rounded-xl transition-transform hover:scale-95 duration-500",
    },
    {
      title: "Pyrol Efficiency",
      value: "+ 20.00",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>,
      transition: "hover:scale-105 duration-500",
      className: "bg-white border border-gray-200 rounded-xl transition-transform hover:scale-105 duration-500",
    },
    {
      title: "Pyrol Savings",
      value: "0%",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>,
      transition: "hover:scale-95 duration-500",
      className: "bg-white border border-gray-200 rounded-xl transition-transform hover:scale-95 duration-500",
    },
  ]);

  return (
    <div>
      {/* Pyrol Insights */}
      <div className="py-8 bg-gray-50 sm:py-10 lg:py-6 font-mainFont">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-4">
            {payrollData.map((data, index) => (
              <div key={index} className={`${data.className} ${data.transition}`}>
                <div className="px-5 py-4">
                  <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                    {data.title}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <p className="inline-flex items-center text-xl font-bold text-blue-900">
                      {data.value}
                      {data.icon}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End of Pyrol Insights */}
    </div>
  );
};

export default Insights;
