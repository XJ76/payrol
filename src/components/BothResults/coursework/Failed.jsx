import { useState } from "react";

const Failed = () => {
  const [displayedCourseWork, setDisplayedCourseWork] = useState(7);

  const loadMoreCourseWork = () => {
    setDisplayedCourseWork((prevCount) => prevCount + 8);
  };

  const courseWorkData = [
    {
      classItem: "English Language",
      assessmentType: "Assignment",
      date: "2022-04-12",
      mark: "48",
      status: "Fail",
      statusSVG: (
        <svg
          className="mr-1.5 h-2.5 w-2.5 text-red-500"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      ),
    },
    // Add more failed coursework data here
  ];

  return (
    <div>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
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
        <tbody className="text-gray-600 text-sm font-light">
          {courseWorkData.slice(0, displayedCourseWork).map((course, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {course.classItem}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {course.assessmentType}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {course.date}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {course.mark}
              </td>
              <td>
                <div className="inline-flex items-center">
                  {course.statusSVG}
                  {course.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {displayedCourseWork < courseWorkData.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={loadMoreCourseWork}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Failed;
