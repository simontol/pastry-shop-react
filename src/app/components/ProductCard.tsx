import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showModal } from '../redux/modalReducer';
import { Product } from '../redux/types';
import { parsePrice } from '../utils';

type Props = {
  product: Product,
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    id,
    data: {
      title, category, price, employee, description, reviews,
    },
  } = product;
  const openModal = (type: string) => {
    dispatch(showModal({ show: type, product }));
  };
  return (
    <div className='product__card'>
      <div
        className='product__title'
        onClick={ () => navigate(`/products/${ id }`) }
      >
        {title}
      </div>
      <div className='product__description'>
        <span>Description:</span>
        {' '}
        {description}
      </div>
      <div className='product__category'>
        <span>Category:</span>
        {' '}
        {category}
      </div>
      <div className='product__price'>
        <span>Price:</span>
        {' '}
        {parsePrice(price)}
        {' '}
        €
      </div>
      <div className='product__employee'>
        <span>Employee:</span>
        {' '}
        {employee}
      </div>
      {reviews && (
        <div className='product__reviews'>
          <span>Reviews:</span>
          {reviews.map(review => (<div key={ review }>{review}</div>))}
        </div>
      )}
      <div className='product__spacer' />
      <div className='product__buttons'>
        <button className='red' onClick={ () => openModal('DeleteModal') }>DELETE</button>
      </div>
    </div>
  );
};

export default ProductCard;
