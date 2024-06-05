/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-04 22:10:28
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-05 18:14:28
 * @FilePath: /siteman/client/src/app/page.test.tsx
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';
import fetchMock from 'jest-fetch-mock';

// Before each test, enable the fetch mock
beforeEach(() => {
  fetchMock.enableMocks();
});

// After each test, clear the fetch mock
afterEach(() => {
  fetchMock.resetMocks();
});

describe('Test read method', () => {
  it('should render with default text',async () => {
    render(<Page/>);
    fetchMock.mockResponseOnce(JSON.stringify({ id: 0 }));

    const btn = screen.getByTestId('readButton')
    const text = screen.getByTestId('id');
    await fireEvent.click(btn)
    expect(text).toHaveTextContent('ID:0');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

});


