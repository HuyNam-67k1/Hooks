import React, { useState } from "react";

function TodoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storedJobs = localStorage.getItem("jobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const updateLocalStorage = (updatedJobs) => {
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const handleSubmit = () => {
    setJobs((prevJobs) => {
      const updatedJobs = [...prevJobs, job];
      updateLocalStorage(updatedJobs);
      return updatedJobs;
    });
    setJob("");
  };

  const handleDelete = (index) => {
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.filter((_, i) => i !== index);
      updateLocalStorage(updatedJobs);
      return updatedJobs;
    });
  };

  const handleClear = () => {
    setJobs([]);
    updateLocalStorage([]);
  };

  return (
    <div style={{ padding: 20 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={handleClear}>Clear</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
