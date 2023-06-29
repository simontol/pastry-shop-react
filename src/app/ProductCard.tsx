import { useDispatch } from 'react-redux';
import { showModal } from './redux/modalReducer';
import { Product } from './redux/types';

type Props = {
  product: Product,
}

const parsePrice = (price: string | number): string => {
    if (typeof price === 'string') {
        const p = parseFloat(price);
        if (isNaN(p)) return '';
        return p.toFixed(2);
    }
    return price.toFixed(2);
}

const ProductCard = ({ product }: Props) => {
    const dispatch = useDispatch();
    const { data: { title, category, price, employee, description, reviews } } = product;
    const openModal = (type: string) => {
        dispatch(showModal({ show: type, product }))
    }
    return (
        <>
            <div className='product__card'>
                <h2 className='product__title'>{title}</h2>
                <div className='product__price'>{parsePrice(price)} €</div>
                <div className='product__category'>{category}</div>
                <div className='product__employee'>{employee}</div>
                <div className='product__description'>{description}</div>
                {reviews && <div className='product__reviews'>
                    {reviews.map(review => (<div key={ review }>{review}</div>))}
                </div>}
                <div className='product__buttons'>
                    <button className='red' onClick={ () => openModal('DeleteModal') }>DELETE</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard
