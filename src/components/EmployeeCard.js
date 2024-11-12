import React from 'react';

function EmployeeCard({ employee, onBlock, onDetails }) {

  function handleChange() {
    console.log("print the block");
    
  }
  return (
    <div className="w-full max-w-sm bg-emerald-100 border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-600 mb-2 pr-3  ">
      <div className="flex flex-row items-center ">
        <img
          className="w-24 h-24 rounded-full shadow-lg mt-3 ml-2"
          src={employee.img || "https://via.placeholder.com/150"}
          alt={employee.name || "Employee avatar"}
        />
        <div className="flex flex-col items-center  ">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {employee.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {employee.role}
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <i>email: </i>{employee.email}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-4 md:mt-6 pb-5">
        <button
          onClick={handleChange}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white border-2 border-black rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-gray-800 mr-2"
        >
          Block
        </button>
        <button
          onClick={() => onDetails(employee)}
          className="py-2 px-4 text-sm font-medium text-white bg-black rounded-lg border border-gray-200 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
