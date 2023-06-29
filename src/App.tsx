import { useSelector } from 'react-redux';
import DeleteModal from './app/DeleteModal';
import Header from './app/Header';
import Loader from './app/Loader';
import ProductCard from './app/ProductCard';
import ProductModal from './app/ProductModal';
import { useDeleteProductMutation, useProductsQuery } from './app/redux/storeApi';
import { RootState } from './app/store';

const App = () => {
  const { data, error, isLoading } = useProductsQuery({ page: 1, elements: 10 });
  const [, response] = useDeleteProductMutation();
  const listView = useSelector<RootState, string>(state => state.view.list);

  return (
    <>
      <Header />
      <div className={`product__list product__list--${listView}`}>
        {data?.list.map(product => (<ProductCard key={ product.id } product={ product } />))}
      </div>
      { error && <div>Error</div>}
      <DeleteModal />
      <ProductModal />
      <Loader loading={ isLoading || response.isLoading } />
    </>
  );
};

export default App;
