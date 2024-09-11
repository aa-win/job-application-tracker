import { useState, useEffect } from "react";

const JobForm = ({ addJob, editJob }) => {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("applied");

    // Update form fields if editing a job
    useEffect(() => {
        if (editJob) {
            setCompany(editJob.company);
            setPosition(editJob.position);
            setStatus(editJob.status);
        }
    }, [editJob]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addJob({ company, position, status, id: editJob ? editJob.id : undefined });
        setCompany("");
        setPosition("");
        setStatus("applied");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md">
            {/* Company input */}
            <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mb-2 p-2 w-full border rounded"
                required
            />
            {/* Position input */}
            <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="mb-2 p-2 w-full border rounded"
                required
            />
            {/* Status select */}
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mb-2 p-2 w-full border rounded"
            >
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
            </select>
            {/* Submit button */}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {editJob ? "Edit Job" : "Add Job"}
            </button>
        </form>
    );
};

export default JobForm;
