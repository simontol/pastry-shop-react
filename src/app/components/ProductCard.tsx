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
      title, category, price, employee, reviews = [],
    },
  } = product;
  const openModal = () => {
    dispatch(showModal({ show: 'DeleteModal', product }));
  };
  return (
    <div className='product__card'>
      <div
        className='product__card__title'
        onClick={ () => navigate(`/products/${ id }`) }
      >
        {title}
      </div>
      <div className='product__card__field'>
        <span>Category:</span>
        {' '}
        {category}
      </div>
      <div className='product__card__field'>
        <span>Price:</span>
        {' '}
        {parsePrice(price)}
        {' '}
        €
      </div>
      <div className='product__card__field'>
        <span>Employee:</span>
        {' '}
        {employee}
      </div>
      <div className='product__card__field'>
        <span>Reviews:</span>
        <div className='badge'>{ reviews.length }</div>
      </div>
      <div className='product__spacer' />
      <div className='product__buttons'>
        <button className='red' onClick={ openModal }>DELETE</button>
      </div>
    </div>
  );
};

export default ProductCard;
