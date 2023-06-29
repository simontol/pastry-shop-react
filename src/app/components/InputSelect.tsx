import { useFormContext } from 'react-hook-form';
import { FormInputs } from '../redux/types';
import { useStoreQuery } from '../redux/storeApi';

const InputSelect = () => {
  const { data } = useStoreQuery();
  const { register, formState: { errors } } = useFormContext<FormInputs>();

  if (!data) return null;
  return (
    <div className='input'>
      <label htmlFor='employee'>Employee</label>
      <select { ...register('employee') }>
        {data.employees.map(employee => (
          <option key={ employee } value={ employee }>{employee}</option>
        ))}
      </select>
      {errors.employee && <span className='input__error'>This field is required</span>}
    </div>
  );
};

export default InputSelect;
