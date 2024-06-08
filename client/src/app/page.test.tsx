/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-04 22:10:28
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-08 23:19:20
 * @FilePath: /siteman/client/src/app/page.test.tsx
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import IssueTracker from './page';

jest.mock('axios');

describe('IssueTracker', () => {
  const issues = [
    { id: 1, title: 'Issue 1', description: 'Description of Issue 1' },
    { id: 2, title: 'Issue 2', description: 'Description of Issue 2' },
    { id: 3, title: 'Issue 3', description: 'Description of Issue 3' },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: issues });
  });

  it('renders issue tracker', async () => {
    render(<IssueTracker />);

    expect(await screen.findByText('Issue Tracker')).toBeInTheDocument();
  });

  it('creates a new issue', async () => {
    axios.post.mockResolvedValue({
      data: { id: 4, title: 'Issue 4', description: 'Description of Issue 4' },
    });

    render(<IssueTracker />);

    fireEvent.change(screen.getByPlaceholderText('ID'), { target: { value: '4' } });
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Issue 4' } });
    fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Description of Issue 4' } });

    fireEvent.click(screen.getByText('Create Issue'));

    expect(await screen.findByText('Issue 4: Description of Issue 4')).toBeInTheDocument();
  });

});