import React from "react";

// Component to display a single job
const Job = ({ job, deleteJob, editJobHandler }) => (
    <div className="bg-white shadow-md rounded p-4 mb-4 flex justify-between items-center">
        {/* Display job details */}
        <div>
            <h3 className="text-lg font-semibold">
                {job.position} at {job.company}
            </h3>
            <p className="text-gray-600">Status: {job.status}</p>
        </div>
        {/* Buttons for editing and deleting */}
        <div className="flex space-x-2">
            <button
                onClick={() => editJobHandler(job)}  // Edit job
                className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
            >
                Edit
            </button>
            <button
                onClick={() => deleteJob(job.id)}  // Delete job
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    </div>
);

export default Job;
