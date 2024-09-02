import { useState } from "react";
const PassedExamResults = () => {
  // State to track number of Results displayed
  const [displayedResults, setDisplayedResults] = useState(7);

  // Function to load more Results
  const loadMoreResults = () => {
    // Increase the number of displayed Results by 8
    setDisplayedResults((prevCount) => prevCount + 8);
  };
  //Results array
  const resultsData = [
    {
      classItem: "Mathematics",
      classTeacher: "C Mangorima",
      grade: "A",
      mark: "92",
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
      classItem: "Physics",
      classTeacher: "J Smith",
      grade: "A",
      mark: "87",
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
      classItem: "Chemistry",
      classTeacher: "A Uraswe",
      grade: "A",
      mark: "79",
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
      classItem: "Biology",
      classTeacher: "A Uraswe",
      grade: "A",
      mark: "85",
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
      classItem: "Combined Science",
      classTeacher: "A Uraswe",
      grade: "A",
      mark: "98",
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
      classItem: "Geography",
      classTeacher: "B Kwarara",
      grade: "A",
      mark: "86",
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
      classItem: "Heritage Studies",
      classTeacher: "B Chimudzi",
      grade: "C",
      mark: "56",
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
      classItem: "Accounting",
      classTeacher: "T Musonza",
      grade: "B",
      mark: "69",
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
        <label htmlFor="sort" className="text-sm font-medium text-gray-900 2">
          {" "}
          Sort:{" "}
        </label>
        <select
          id="sort"
          name="sort"
          className="border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600"
        >
          <option>Grade</option>
          <option>Subject Name</option>
        </select>
      </div>
      {/* table of Results by agent */}
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
                    <div className="flex items-center">Grade</div>
                  </th>

                  <th className="py-3 px-6 text-left">
                    <div className="flex items-center">Mark</div>
                  </th>

                  <th className="py-3 px-6 text-left">
                    <div className="flex items-center">Status</div>
                  </th>
                  <th className="py-3 px-6 text-left">
                    <div className="flex items-center">Class Teacher</div>
                  </th>
                </tr>
              </thead>

              {/* table body */}
              <tbody className="text-gray-600 text-sm font-light">
                {resultsData
                  .slice(0, displayedResults)
                  .map((rowData, index) => (
                    <tr key={index} className="border-b border-gray-200 ">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {rowData.classItem}
                      </td>
                      
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {rowData.grade}
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
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {rowData.classTeacher}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* Show more button */}
            {displayedResults < resultsData.length && (
              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={loadMoreResults}
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

export default PassedExamResults;
