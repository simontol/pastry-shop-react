import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ProductCard from './ProductCard';
import { useProductsQuery } from '../redux/storeApi';
import Loader from './Loader';

const ProductsList = () => {
  const { data, isLoading } = useProductsQuery({ page: 1, elements: 20 });
  const listView = useSelector<RootState, string>(state => state.view.list);
  return (
    <div>
      <div className={ `product__list product__list--${ listView }` }>
        {data?.list.map(product => (<ProductCard key={ product.id } product={ product } />))}
      </div>
      <Loader loading={ isLoading } />
    </div>
  );
};

export default ProductsList;
