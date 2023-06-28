import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { hideModal } from "./redux/modalReducer";
import { useNewProductMutation } from "./redux/storeApi";
import { ModalState, Product } from "./redux/types";

export type Inputs = {
  title: string,
  category: string,
  price: number,
  employee: string,
  description: string,
  reviews?: string[],
}

const ProductModal = () => {
  const dispatch = useDispatch();
  const { show } = useSelector<any, ModalState>(state => state.modal);
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm<Inputs>();
  const [createProduct, createResponse] = useNewProductMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newProduct: Product = {
      id: '',
      data,
    }
    createProduct(newProduct);
  };

  if (show !== 'ProductModal') return null;

  return (
    <div className='modal'>
      <section className="modal__body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="title" errors={errors} required />
          <Input register={register} name="description" errors={errors} required />
          <Input register={register} name="category" errors={errors} required />
          <div className="modal__buttons">
            <button type="submit">
              Save
            </button>
            <button type="button" onClick={() => dispatch(hideModal())}>
              Close
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ProductModal
