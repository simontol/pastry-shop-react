import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hideModal } from '../redux/modalReducer';
import { useDeleteProductMutation } from '../redux/storeApi';
import { ModalState } from '../redux/types';
import { RootState } from '../store';

const DeleteModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { show, product } = useSelector<RootState, ModalState>(state => state.modal);
  const [deleteProduct, response] = useDeleteProductMutation();

  useEffect(() => {
    if (response.isSuccess) {
      navigate('/');
      dispatch(hideModal());
    }
  }, [response, dispatch, navigate]);

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
