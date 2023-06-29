import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ProductCard from './ProductCard';
import { useProductsQuery } from '../redux/storeApi';

const ProductsList = () => {
  const { data } = useProductsQuery({ page: 1, elements: 10 });
  const listView = useSelector<RootState, string>(state => state.view.list);
  return (
    <div className={ `product__list product__list--${ listView }` }>
      {data?.list.map(product => (<ProductCard key={ product.id } product={ product } />))}
    </div>
  );
};

export default ProductsList;
