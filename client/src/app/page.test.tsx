/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-04 22:10:28
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-04 22:16:08
 * @FilePath: /siteman/client/src/app/page.test.tsx
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';

describe('Test read method', () => {
  it('should render with default text', () => {
    render(<Page params={true}/>);

    const element = screen.getByText(/Id:1/i);

    expect(element).toBeInTheDocument();
  });


});


