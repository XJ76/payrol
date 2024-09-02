import { Link } from "react-router-dom";
const MyClasses = () => {
  const classes = [
    {
      agentName: "Combined Science",
      assesmentType: "Inclass",
      date: "07 February, 2022",
      mark: "70%",
      status: "Pass",
      statusColor: "text-blue-700",
    },
    {
      agentName: "Heritage Studies",
      assesmentType: "Assignment",
      date: "09 January, 2022",
      mark: "48%",
      status: "Fail",
      statusColor: "text-red-700",
    },
    {
      agentName: "Biology",
      assesmentType: "Assignment",
      date: "15 December, 2021",
      mark: "81%",
      status: "Pass",
      statusColor: "text-blue-700",
    },
    {
      agentName: "Mathematics",
      assesmentType: "Final",
      date: "14 November, 2021",
      mark: "87%",
      status: "Pass",
      statusColor: "text-blue-700",
    },
    // {
    //   agentName: "Geography",
    //   assesmentType: "Inclass",
    //   date: "15 October, 2021",
    //   mark: "95%",
    //   status: "Star",
    //   statusColor: "text-blue-700",
    // },
  ];

  return (
    <div className="py-4 sm:py-4 font-mainFont">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-gray-900">Latest Classes</p>
          </div>

          <div className="mt-4 sm:mt-0">
            <Link
              to="/admin/transactions"
              className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900"
            >
              See all classes
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
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* table of deposits by agent */}
        <div className="flex flex-col mt-4 lg:mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle md:px-6 lg:px-8">
              {/* table */}
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                {/* table titles */}
                <thead className="bg-blue-200 text-black uppercase text-sm leading-normal">
                  <tr>
                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Class Name</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Assesment Type</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Date</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Mark</div>
                    </th>

                    <th className="py-3 px-6 text-left">
                      <div className="flex items-center">Status</div>
                    </th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody className="text-gray-900 text-sm font-medium">
                  {classes.map((classItem, index) => (
                    <tr key={index} className="border-b border-blue-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {classItem.agentName}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {classItem.assesmentType}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {classItem.date}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {classItem.mark}
                      </td>
                      <td>
                        <div className="inline-flex items-center">
                          <svg
                            className={`mr-1.5 h-2.5 w-2.5  ${classItem.statusColor}`}
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                         
                          {classItem.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
