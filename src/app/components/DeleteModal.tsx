import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { hideModal } from '../redux/modalReducer';
import { useDeleteProductMutation } from '../redux/storeApi';
import { ModalState } from '../redux/types';

const DeleteModal = () => {
  const dispatch = useDispatch();
  const { show, product } = useSelector<any, ModalState>(state => state.modal);
  const [deleteProduct, response] = useDeleteProductMutation();

  useEffect(() => {
    if (response.isSuccess) {
      dispatch(hideModal());
    }
  }, [response, dispatch]);

  if (show !== 'DeleteModal' || !product) return null;

  return (
    <div className='modal'>
      <section className='modal__body'>
        <div className='modal__content'>
          <div className='modal__description'>
            Do you wish to delete
            {' '}
            {product.data.title}
            ?
          </div>
          <div className='modal__buttons'>
            <button
              className='red'
              type='button'
              onClick={ () => deleteProduct(product.id) }
            >
              Confirm
            </button>
            <button
              type='button'
              onClick={ () => dispatch(hideModal()) }
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteModal;
