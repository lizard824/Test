/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-04 20:50:22
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-08 22:51:07
 * @FilePath: /siteman/server/app.js
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let issues = [
  { id: 1, title: "Issue 1", description: "Description of Issue 1" },
  { id: 2, title: "Issue 2", description: "Description of Issue 2" },
  { id: 3, title: "Issue 3", description: "Description of Issue 3" }
];

// Create
app.post('/issues', (req, res) => {
  const newIssue = req.body;
  issues.push(newIssue);
  console.log('Created issue:', newIssue);
  res.status(201).json(newIssue);
});

// Read
app.get('/issues', (req, res) => {
  res.json(issues);
});

// Update
app.put('/issues/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedIssue = req.body;
  issues = issues.map(issue => issue.id === id ? updatedIssue : issue);
  console.log('Updated issue:', updatedIssue);
  res.json(updatedIssue);
});

// Delete
app.delete('/issues/:id', (req, res) => {
  const id = parseInt(req.params.id);
  issues = issues.filter(issue => issue.id !== id);
  console.log('Deleted issue with id:', id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
