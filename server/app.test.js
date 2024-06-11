/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-08 22:50:02
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-08 23:07:31
 * @FilePath: /siteman/server/app.test.js
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
const request = require('supertest');
const express = require('express');

const app = require('../app'); 

describe('Issue Tracker API', () => {
  it('should create a new issue', async () => {
    const newIssue = { id: 4, title: 'Issue 4', description: 'Description of Issue 4' };
    
    const response = await request(app)
      .post('/issues')
      .send(newIssue)
      .expect(201);

    expect(response.body).toEqual(newIssue);
  });

  it('should return all issues', async () => {
    const response = await request(app)
      .get('/issues')
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should update an issue', async () => {
    const updatedIssue = { id: 1, title: 'Updated Issue 1', description: 'Updated Description of Issue 1' };
    const response = await request(app)
      .put('/issues/1')
      .send(updatedIssue)
      .expect(200);

    expect(response.body).toEqual(updatedIssue);
  });

  it('should delete an issue', async () => {
    await request(app)
      .delete('/issues/1')
      .expect(204);
  });
});
