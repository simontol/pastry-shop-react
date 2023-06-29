import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import DeleteModal from './components/DeleteModal';
import Header from './components/Header';
import Loader from './components/Loader';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import { useDeleteProductMutation, useProductsQuery, useStoreQuery } from './redux/storeApi';
import { RootState } from './store';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './scss/index.scss';

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
