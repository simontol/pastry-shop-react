import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "./redux/modalReducer";
import { ProductModal } from "./redux/types";
import { useDeleteProductMutation } from "./redux/storeApi";
import { useEffect } from "react";

const ProductDelete = () => {
  const dispatch = useDispatch();
  const { show, data: product } = useSelector<any, ProductModal>(state => state.modal);
  const className = `modal ${show === 'ProductDelete' ? 'd-block' : 'd-none'}`;
  const [deleteProduct, response] = useDeleteProductMutation();

  useEffect(() => {
    if (response.isSuccess) {
      dispatch(hideModal());
    }
  }, [response, dispatch]);

  if (!product) return null;

  return (
    <div className={className}>
      <section className="modal__body">
        <div className="modal__description">
          Do you wish to delete {product.data.title}?
        </div>
        <div className="modal__buttons">
          <button
            className="red"
            type="button"
            onClick={() => deleteProduct(product.id)}>
            Confirm
          </button>
          <button
            type="button"
            onClick={() => dispatch(hideModal())}>
            Cancel
          </button>
        </div>
      </section>
    </div>
  )
}

export default ProductDelete
