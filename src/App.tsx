import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import DeleteModal from './app/DeleteModal';
import Header from './app/Header';
import Loader from './app/Loader';
import ProductCard from './app/ProductCard';
import ProductModal from './app/ProductModal';
import { useDeleteProductMutation, useProductsQuery, useStoreQuery } from './app/redux/storeApi';
import { RootState } from './app/store';
import 'react-toastify/dist/ReactToastify.css';

type ErrorResponse = {
  error: string
}

const App = () => {
  const { data: store, error: storeError } = useStoreQuery();
  const { data, error: productsError, isLoading } = useProductsQuery({ page: 1, elements: 10 });
  const [, deleteResponse] = useDeleteProductMutation();
  const listView = useSelector<RootState, string>(state => state.view.list);

  useEffect(() => {
    const error = (storeError || productsError || deleteResponse.error) as ErrorResponse;
    if (error) {
      toast.error(`Error: ${ error.error }`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [productsError, storeError, deleteResponse]);

  return (
    <>
      <Header store={ store } />
      <div className={ `product__list product__list--${ listView }` }>
        {data?.list.map(product => (<ProductCard key={ product.id } product={ product } />))}
      </div>
      <DeleteModal />
      <ProductModal />
      <Loader loading={ isLoading || deleteResponse.isLoading } />
      <ToastContainer autoClose={ 5000 } />
    </>
  );
};

export default App;
