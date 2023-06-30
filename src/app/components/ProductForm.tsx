import { useCallback, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useNewProductMutation } from '../redux/storeApi';
import { FormInputs, ProductData } from '../redux/types';
import Input from './Input';
import InputSelect from './InputSelect';
import Loader from './Loader';
import ReviewInput from './ReviewInput';

const ProductForm = () => {
  const navigate = useNavigate();
  const methods = useForm<FormInputs>();
  const { handleSubmit, reset } = methods;
  const [createProduct, response] = useNewProductMutation();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const formData: ProductData = {
      ...data,
      reviews: data.reviews?.map(r => r.value) || [],
    };
    createProduct(formData);
  };
  const back = useCallback(() => {
    reset({});
    navigate('/');
  }, [reset, navigate]);

  useEffect(() => {
    if (response.isSuccess) {
      back();
    }
  }, [response, back]);

  return (
    <div className='product-form container'>
      <Loader loading={ response.isLoading } />
      <section className='product-form__body'>
        <div className='product-form__title'>Create new product</div>
        <div className='product-form__content'>
          <FormProvider { ...methods }>
            <form onSubmit={ handleSubmit(onSubmit) }>
              <Input name='title' required />
              <Input name='description' required />
              <Input name='category' required />
              <Input name='price' required type='number' />
              <InputSelect />
              <ReviewInput />
              <div className='product-form__buttons'>
                <button type='submit' className='red'>
                  Save
                </button>
                <button type='button' onClick={ back }>
                  Cancel
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </section>
    </div>
  );
};

export default ProductForm;
