import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import { hideModal } from './redux/modalReducer';
import { useNewProductMutation } from './redux/storeApi';
import { FormInputs, ModalState, ProductData } from './redux/types';
import Loader from './Loader';
import ReviewInput from './ReviewInput';
import InputSelect from './InputSelect';

const ProductModal = () => {
  const dispatch = useDispatch();
  const { show } = useSelector<any, ModalState>(state => state.modal);
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

  const close = () => {
    reset({});
    dispatch(hideModal());
  };
  if (show !== 'ProductModal') return null;

  return (
    <div className='modal'>
      <Loader loading={ response.isLoading } />
      <section className='modal__body'>
        <div className='modal__title'>Create new product</div>
        <FormProvider { ...methods }>
          <form onSubmit={ handleSubmit(onSubmit) }>
            <Input name='title' required />
            <Input name='description' required />
            <Input name='category' required />
            <Input name='price' required type='number' />
            <InputSelect />
            <ReviewInput />
            <div className='modal__buttons'>
              <button type='submit' className='red'>
                Save
              </button>
              <button type='button' onClick={ close }>
                Cancel
              </button>
            </div>
          </form>
        </FormProvider>
      </section>
    </div>
  );
};

export default ProductModal;
