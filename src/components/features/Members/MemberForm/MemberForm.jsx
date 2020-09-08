import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { genders, roles } from '../../../../shared/fixtures/commons';
import { yupResolver } from '@hookform/resolvers';

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
    defaultValues: member || defaultValues,
    resolver: resolver,
  });

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <input type='hidden' name='id' ref={register} />
      <table>
        <tr>
          <td>
            <label>Email</label>
          </td>
          <td>
            <input type='text' name='email' ref={register} />
          </td>
          <div className='error'>{errors.email && errors.email.message}</div>
        </tr>
        <tr>
          <td>
            <label>Name</label>
          </td>
          <td>
            <input type='text' name='name' ref={register} />
          </td>
          <td>
            <div className='error'>{errors.name && errors.name.message}</div>
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
            <div className='error'>{errors.role && errors.role.message}</div>
          </td>
        </tr>
        <tr>
          <td>
            <label>Gender</label>
          </td>
          <td>
            {genders.map((gen) => (
              <div key={gen.value}>
                <input type='radio' name='gender' value={gen.value} ref={register} />
                <span for={gen.value}>{gen.name}</span>
              </div>
            ))}
          </td>
          <td>
            <div className='error'>{errors.gender && errors.gender.message}</div>
          </td>
        </tr>
      </table>
      <br></br>
      <button type='submit'>Ok</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default MemberForm;
