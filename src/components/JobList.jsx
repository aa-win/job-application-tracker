import React from "react";
import Job from "./Job";

// Component to display a list of jobs
const JobList = ({ jobs, deleteJob, editJobHandler }) => (
    <div className="mt-4">
        {jobs.length === 0 ? (
            // Message when no jobs are available
            <p className="text-center text-gray-500">No job applications yet.</p>
        ) : (
            // Map through jobs and display each one
            jobs.map((job) => (
                <Job
                    key={job.id}
                    job={job}
                    deleteJob={deleteJob}
                    editJobHandler={editJobHandler}
                />
            ))
        )}
    </div>
);

export default JobList;
