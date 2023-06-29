import { useFormContext } from 'react-hook-form';
import { ProductData } from '../redux/types';

type Props = {
  name: 'title' | 'category' | 'price' | 'employee' | 'description',
  required?: boolean;
  type?: string;
}

const Input = ({ name, required = false, type = 'text' }: Props) => {
  const { register, formState: { errors } } = useFormContext<ProductData>();
  return (
    <div className='input'>
      <label htmlFor={ name }>{name}</label>
      <input
        type={ type }
        step={ type === 'number' ? '0.01' : undefined }
        min={ 0 }
        { ...register(name, { required }) }
      />
      {errors[name] && <span className='input__error'>This field is required</span>}
    </div>
  );
};

export default Input;
