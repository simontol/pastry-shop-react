import { useFormContext } from 'react-hook-form';
import { FormInputs } from '../redux/types';
import { useStoreQuery } from '../redux/storeApi';

const InputSelect = () => {
  const { data } = useStoreQuery();
  const { register } = useFormContext<FormInputs>();

  if (!data) return null;
  return (
    <select { ...register('employee') }>
      {data.employees.map(employee => (
        <option key={ employee } value={ employee }>{employee}</option>
      ))}
    </select>
  );
};

export default InputSelect;
