import { useDispatch } from 'react-redux';
import { showModal } from './redux/modalReducer';
import { Product } from './redux/types';

type Props = {
  product: Product,
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const { data: { title, category, price, employee, description, reviews } } = product;
  const openModal = (type: string) => {
    dispatch(showModal({ show: type, data: product }))
  }
  return (
    <>
      <div className='product__card'>
        <h2 className='product__title'>{title}</h2>
        <div className='product__price'>{price.toFixed(2)} €</div>
        <div className='product__category'>{category}</div>
        <div className='product__employee'>{employee}</div>
        <div className='product__description'>{description}</div>
        {reviews && <div className='product__reviews'>{reviews.map(review => (<div key={review}>{review}</div>))}</div>}
        <div className='product__buttons'>
          <button onClick={() => openModal('ProductModal')}>EDIT</button>
          <button className='red' onClick={() => openModal('DeleteModal')}>DELETE</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard
