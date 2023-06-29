import { useDispatch } from 'react-redux';
import { showModal } from './redux/modalReducer';
import { Product } from './redux/types';

type Props = {
  product: Product,
}

const parsePrice = (price: string | number): string => {
  if (typeof price === 'string') {
    const p = parseFloat(price);
    if (Number.isNaN(p)) return '';
    return p.toFixed(2);
  }
  return price.toFixed(2);
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const {
    data: {
      title, category, price, employee, description, reviews,
    },
  } = product;
  const openModal = (type: string) => {
    dispatch(showModal({ show: type, product }));
  };
  return (
    <div className='product__card'>
      <h2 className='product__title'>{title}</h2>
      <div className='product__description'><span>Description:</span> {description}</div>
      <div className='product__category'><span>Category:</span> {category}</div>
      <div className='product__price'><span>Price:</span> {parsePrice(price)} €</div>
      <div className='product__employee'><span>Employee:</span> {employee}</div>
      {reviews && (
        <div className='product__reviews'>
          <span>Reviews:</span>
          {reviews.map(review => (<div key={review}>{review}</div>))}
        </div>
      )}
      <div className='product__spacer'></div>
      <div className='product__buttons'>
        <button className='red' onClick={() => openModal('DeleteModal')}>DELETE</button>
      </div>
    </div>
  );
};

export default ProductCard;
