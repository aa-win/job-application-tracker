import { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

// Main App component
const App = () => {
  const [jobs, setJobs] = useState([]);       // State for job list
  const [editJob, setEditJob] = useState(null); // State for editing a job

  // Add or update a job
  const addJob = (job) => {
    if (editJob) {
      setJobs(
        jobs.map((j) => (j.id === editJob.id ? { ...job, id: editJob.id } : j))
      );
      setEditJob(null);
    } else {
      setJobs([...jobs, { ...job, id: Date.now() }]);
    }
  };

  // Delete a job
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // Set job for editing
  const editJobHandler = (job) => {
    setEditJob(job);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Job Application Tracker</h1>
      <JobForm addJob={addJob} editJob={editJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} editJobHandler={editJobHandler} />
    </div>
  );
};

export default App;
