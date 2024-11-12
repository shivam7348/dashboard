import React, { useState } from 'react';


function FilterToggle() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold ">Employees:</h3>
      <div className="flex justify-end space-x-4">
        
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded-lg font-medium ${
            filter === "All" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          All
          
        </button>

     
        <button
          onClick={() => setFilter("Active")}
          className={`px-4 py-2 rounded-lg font-medium ${
            filter === "Active" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("Inactive")}
          className={`px-4 py-2 rounded-lg font-medium ${
            filter === "Inactive" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}

export default FilterToggle;
