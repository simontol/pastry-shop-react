import { useDispatch, useSelector } from "react-redux"
import { ProductModalState } from "./redux/types"
import { hideModal } from "./redux/modalReducer";
import { useForm, SubmitHandler } from "react-hook-form"
import Input from "./Input";

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
  const { show, data: product } = useSelector<any, ProductModalState>(state => state.modal);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>({ values: product?.data });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  if (show !== 'ProductModal') return null;

  return (
    <div className='modal'>
      <section className="modal__body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="title" errors={errors} required />
          <Input register={register} name="description" errors={errors} required />
          <Input register={register} name="category" errors={errors} required />
          <button type="button" onClick={() => dispatch(hideModal())}>
            Close
          </button>
        </form>
      </section>
    </div>
  )
}

export default ProductModal
