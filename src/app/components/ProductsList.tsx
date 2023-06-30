import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useProductsQuery } from '../redux/storeApi';
import { RootState } from '../store';
import Loader from './Loader';
import ProductCard from './ProductCard';

const pageElements = 8;

const ProductsList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProductsQuery({ page, elements: pageElements });
  const listView = useSelector<RootState, string>(state => state.view.list);
  const totalPages = Math.ceil((data?.length || pageElements) / pageElements);

  return (
    <div>
      <div className={ `product__list product__list--${ listView }` }>
        {data?.list.map(product => (<ProductCard key={ product.id } product={ product } />))}
      </div>
      <div className='pagination'>
        <button disabled={ page <= 1 } onClick={ () => setPage(page - 1) }>{ '<' }</button>
        <span className='badge'>{ page }</span>
        <button disabled={ page >= totalPages } onClick={ () => setPage(page + 1) }>{ '>' }</button>
      </div>
      <Loader loading={ isLoading } />
    </div>
  );
};

export default ProductsList;
