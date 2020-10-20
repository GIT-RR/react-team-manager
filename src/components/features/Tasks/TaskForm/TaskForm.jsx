import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { roles, statuses } from '../../../../shared/fixtures/commons';

const defaultValues = {
  id: null,
  role: null,
  description: null,
  status: 0,
};

const resolver = yupResolver(
  yup.object().shape({
    id: yup
      .number()
      .transform((value) => (isNaN(value) ? null : value))
      .nullable(),
    role: yup.string().required('Required !'),
    description: yup.string().required('Required !'),
    status: yup.number().required('Required !'),
  })
);

const TaskForm = ({ task = null, onSuccess, onCancel }) => {
  const { handleSubmit, errors, register } = useForm({
    defaultValues: task || defaultValues,
    resolver,
  });

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <input type='hidden' name='id' ref={register} />
      <table>
        <tr>
          <td>
            <label>Area</label>
          </td>
          <td>
            <select ref={register} name='role'>
              <option value=''></option>
              {roles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.name}
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
            <label>Description</label>
          </td>
          <td>
            <input type='text' name='description' ref={register} />
          </td>
          <td>
            <div className='error'>{errors.description && errors.description.message}</div>
          </td>
        </tr>
        <tr>
          <td>
            <label>Status</label>
          </td>
          <td>
            <select ref={register} name={'status'}>
              <option value=''></option>
              {statuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.name}
                </option>
              ))}
            </select>
          </td>
          <td>
            <div className='error'>{errors.status && errors.status.message}</div>
          </td>
        </tr>
      </table>
      <br></br>
      <button type='submit'>Ok</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TaskForm;
