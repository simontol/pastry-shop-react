import { useDispatch, useSelector } from "react-redux"
import { ProductModal } from "./redux/types"
import { hideModal } from "./redux/modalReducer";


const ProductEdit = () => {
  const dispatch = useDispatch();
  const { show, data: product } = useSelector<any, ProductModal>(state => state.modal);
  const className = `modal ${show === 'ProductEdit' ? 'd-block' : 'd-none' }`;
  return (
    <div className={ className }>
      <section className="modal__body">
        <div>{ product?.data.title }</div>
        <button type="button" onClick={ () => dispatch(hideModal())}>
          Close
        </button>
      </section>
    </div>
  )
}

export default ProductEdit
