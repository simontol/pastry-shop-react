import { useParams } from 'react-router-dom';
import { useProductByIdQuery } from '../redux/storeApi';
import { parsePrice } from '../utils';

const ProductDetails = () => {
  const { id: productId } = useParams();
  const { data: product } = useProductByIdQuery(productId || '');

  if (!product) return null;

  const {
    title, description, price,
    category, employee, reviews,
  } = product;
  return (
    <div className='product__details'>
      <div className='product__title'>{title}</div>
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
    </div>
  );
};

export default ProductDetails;
