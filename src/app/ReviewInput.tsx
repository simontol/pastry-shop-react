import { useFieldArray, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { FormInputs } from './redux/types';

const ReviewInput = () => {
  const { control, register } = useFormContext<FormInputs>();
  const { fields, append, remove } = useFieldArray<FormInputs>({
    control,
    name: 'reviews',
  });

  useEffect(() => {
    if (!fields.length) {
      append({ value: '' });
    }
  }, []);

  return (
    <div className='input__reviews'>
      <div className='input__reviews__header'>
        <label htmlFor='reviews'>Reviews</label>
        <i className='bi bi-plus-circle-fill' onClick={ () => append({ value: '' }) } />
      </div>
      {fields.map((field, index) => (
        <div className='input__reviews__field' key={ field.id }>
          <input
            { ...register(`reviews.${ index }.value`) }
          />
          <i className='bi bi-dash-circle-fill' onClick={ () => remove(index) } />
        </div>
      ))}
    </div>
  );
};

export default ReviewInput;
