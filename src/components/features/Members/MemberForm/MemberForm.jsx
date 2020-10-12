import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { genders, roles } from '../../../../shared/fixtures/commons';
import { yupResolver } from '@hookform/resolvers';
import ErrorMessage from '../../../shared/ErrorMessage/ErrorMessage';

const defaultValues = {
  id: null,
  email: null,
  name: null,
  gender: null,
  role: null,
};

const resolver = yupResolver(
  yup.object().shape({
    id: yup
      .number()
      .transform((value) => (isNaN(value) ? null : value))
      .nullable(),
    email: yup.string().email('Invalid format !').required('Required !'),
    name: yup.string().required('Required !'),
    gender: yup.string().required('Required !'),
    role: yup.string(),
  })
);

const MemberForm = ({ member = null, onSuccess, onCancel }) => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onBlur',
    defaultValues: member || defaultValues,
    resolver: resolver,
  });

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <input type='hidden' name='id' ref={register} />
      <table>
        <tbody>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input type='text' name='email' ref={register} />
            </td>
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          </tr>
          <tr>
            <td>
              <label>Name</label>
            </td>
            <td>
              <input type='text' name='name' ref={register} />
            </td>
            <td>
              <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>
            </td>
          </tr>
          <tr>
            <td>
              <label>Role</label>
            </td>
            <td>
              <select ref={register} name={'role'}>
                <option value=''></option>
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.name}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <ErrorMessage>{errors.role && errors.role.message}</ErrorMessage>
            </td>
          </tr>
          <tr>
            <td>
              <label>Gender</label>
            </td>
            <td>
              {genders.map((gen) => (
                <React.Fragment key={gen.value}>
                  <input type='radio' name='gender' value={gen.value} ref={register} />
                  <span htmlFor={gen.value}>{gen.name}</span>
                </React.Fragment>
              ))}
            </td>
            <td>
              <ErrorMessage>{errors.gender && errors.gender.message}</ErrorMessage>
            </td>
          </tr>
        </tbody>
      </table>

      <button type='submit'>Ok</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default MemberForm;
