import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({ id: '', title: '', description: '' });

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const response = await axios.get('http://localhost:3000/issues');
    setIssues(response.data);
  };

  const createIssue = async () => {
    await axios.post('http://localhost:3000/issues', newIssue);
    fetchIssues();
  };

  const updateIssue = async (id:number) => {
    await axios.put(`http://localhost:3000/issues/${id}`, newIssue);
    fetchIssues();
  };

  const deleteIssue = async (id:number) => {
    await axios.delete(`http://localhost:3000/issues/${id}`);
    fetchIssues();
  };

  return (
    <div>
      <h1>Issue Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={newIssue.id}
          onChange={(e) => setNewIssue({ ...newIssue, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          value={newIssue.title}
          onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newIssue.description}
          onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
        />
        <button onClick={createIssue}>Create Issue</button>
      </div>
      <h2>Existing Issues</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            {issue.title}: {issue.description}
            <button onClick={() => updateIssue(issue.id)}>Update</button>
            <button onClick={() => deleteIssue(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
