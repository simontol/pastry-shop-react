import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { showModal } from '../redux/modalReducer';
import { useProductByIdQuery } from '../redux/storeApi';
import { parsePrice } from '../utils';
import Loader from './Loader';
import { ErrorResponse } from '../redux/types';

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: product, isLoading, error } = useProductByIdQuery(id || '');

  useEffect(() => {
    if (error) {
      const err = error as ErrorResponse;
      toast.error(`Error: ${ err.status } - Not Found`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      navigate('/');
    }
  }, [error, navigate]);

  if (!product) return null;

  const {
    title, description, price,
    category, employee, reviews = [],
  } = product;

  const openModal = () => {
    dispatch(showModal({ show: 'DeleteModal', product: { data: product, id: id || '' } }));
  };
  return (
    <div className='product__details container'>
      <Loader loading={ isLoading } />
      <div className='product__details__title'>{title}</div>
      <div className='product__details__description'>
        <div className='label'>Description:</div>
        {' '}
        {description}
      </div>
      <div className='product__details__category'>
        <div className='label d-inline'>Category:</div>
        {' '}
        {category}
      </div>
      <div className='product__details__price'>
        <div className='label d-inline'>Price:</div>
        {' '}
        {parsePrice(price)}
        {' '}
        €
      </div>
      <div className='product__details__employee'>
        <div className='label d-inline'>Employee:</div>
        {' '}
        {employee}
      </div>
      <div className='product__details__reviews'>
        <div className='label'>Reviews:</div>
        <ul>
          {reviews.map(review => (<li key={ review }>{review}</li>))}
        </ul>
      </div>
      <div className='product__details__buttons'>
        <button onClick={ () => navigate('/') }>Back</button>
        <button className='red' onClick={ openModal }>Delete</button>
      </div>
    </div>
  );
};

export default ProductDetails;
