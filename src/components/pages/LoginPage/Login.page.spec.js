import { cleanup, fireEvent, render, wait } from '@testing-library/react';
import React from 'react';
import LoginPage from './LoginPage';
import { get } from 'react-hook-form';
import { authApi } from '../../../shared/apis';
import { act } from 'react-dom/test-utils';

describe('LoginPage', () => {
  let authApiLoginMock;

  beforeEach(() => {
    authApiLoginMock = jest.spyOn(authApi, 'login');
    authApiLoginMock.mockRejectedValue(new Error('abort'));
  });

  it('should not call login with invalid form', async () => {
    const { findByTestId } = render(<LoginPage />);

    const button = await findByTestId('login');
    fireEvent.click(button);
    expect(authApiLoginMock).not.toHaveBeenCalled();
  });

  it('should not call login with invalid email', async () => {
    const { findByTestId } = render(<LoginPage />);

    const email = await findByTestId('email');
    fireEvent.change(email, { target: { value: 'invalid email' } });

    const password = await findByTestId('password');
    fireEvent.change(password, { target: { value: 'password' } });

    const button = await findByTestId('login');
    fireEvent.click(button);
    expect(authApiLoginMock).not.toHaveBeenCalled();
  });

  it('should call login with valid form', async () => {
    const { findByTestId } = render(<LoginPage />);
    const email = await findByTestId('email');
    const password = await findByTestId('password');
    const button = await findByTestId('login');

    fireEvent.change(email, { target: { value: 'rui@mail.com' } });
    fireEvent.change(password, { target: { value: 'password' } });
    fireEvent.click(button);

    wait(() => {
      expect(authApiLoginMock).toHaveBeenCalled();
    });
  });
});
