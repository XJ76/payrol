import { useState } from "react";

const PassedCourses = () => {
  // State to track number of Withdrawals displayed
  const [displayedCoursework, setdisplayedCoursework] = useState(7);

  // Function to load more Withdrawals
  const loadMoreCoursework = () => {
    // Increase the number of displayed Withdrawals by 8
    setdisplayedCoursework((prevCount) => prevCount + 8);
  };
  //Complete withdrawals array
  const courseWorkData = [
    {
      classItem: "Combined Science",
      assessmentType: "Inclass",
      date: "2022-02-03",
      mark: "70",
      status: "Pass",
      statusSVG: (
        <svg
          className="mr-1.5 h-2.5 w-2.5 text-blue-500"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      ),
    },
    {
      classItem: "English Language",
      assessmentType: "Essay",
      date: "2022-05-28",
      mark: "68",
      status: "Pass",
      statusSVG: (
        <svg
          className="mr-1.5 h-2.5 w-2.5 text-blue-500"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      ),
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-end">
        <label htmlFor="sort" className="text-sm font-medium text-gray-900 pr-2">
          {" "}
          Sort:{" "}
        </label>
        <select
          id="sort"
          name="sort"
          className="border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600"
        >
          <option>Date</option>
        </select>
      </div>
      {/* table of Withdrawals by agent */}
      <div className="flex flex-col mt-4 lg:mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8">
            {/* table */}
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              {/* table titles */}
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">
                    <div className="flex items-center">Class Name</div>
                  </th>

                  <th className="py-3 px-6 text-left">
                    <div className="flex items-center">Assessment Type</div>
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
              <tbody className="text-gray-600 text-sm font-light">
                {courseWorkData
                  .slice(0, displayedCoursework)
                  .map((rowData, index) => (
                    <tr key={index} className="border-b border-gray-200 ">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {rowData.classItem}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {rowData.assessmentType}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {rowData.date}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {rowData.mark}
                      </td>
                      <td>
                        <div className="inline-flex items-center">
                          {rowData.statusSVG}
                          {rowData.status}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* Show more button */}
            {displayedCoursework < courseWorkData.length && (
              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={loadMoreCoursework}
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassedCourses;
