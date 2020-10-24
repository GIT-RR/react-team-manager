import React from 'react';
import { authApi } from '../../../shared/apis';
import { useHistory } from 'react-router-dom';
import NotAuthLayout from '../../layouts/NotAuthLayout/NotAuthLayout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import './LoginPage.css';

const defaultValues = {
  email: null,
  password: null,
};

const resolver = yupResolver(
  yup.object().shape({
    email: yup.string().email('Invalid format !').required('Required !'),
    password: yup.string().required('Required !'),
  })
);

const LoginPage = () => {
  const history = useHistory();
  const { handleSubmit, errors, register } = useForm({
    defaultValues,
    resolver,
  });

  const handleLogin = async (formData) => {
    try {
      const loginData = await authApi.login(formData.email, formData.password);
      localStorage.setItem('authData', JSON.stringify(loginData));
      history.push('/members');
    } catch (ex) {
      alert(ex.message);
    }
  };

  return (
    <NotAuthLayout>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label>Email:</label>
        <br />
        <input type='text' ref={register} name='email' className='login-input' />
        <div className='error'>{errors.email && errors.email.message}</div>
        <br />
        <label>Password:</label>
        <br />
        <input type='password' ref={register} name='password' className='login-input' />
        <div className='error'>{errors.password && errors.password.message}</div>
        <br />
        <button type='submit'>Login</button>
      </form>
    </NotAuthLayout>
  );
};

export default LoginPage;
