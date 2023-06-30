import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { api, useDeleteProductMutation, useStoreQuery } from '../redux/storeApi';
import DeleteModal from './DeleteModal';
import Header from './Header';
import Loader from './Loader';
import { ErrorResponse } from '../redux/types';

const PageWrapper = () => {
  const { data: store, error: storeError, isLoading } = useStoreQuery();
  const { error: productsError } = useSelector(api.endpoints.products.select());
  const [, deleteResponse] = useDeleteProductMutation();

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
      <Outlet />
      <DeleteModal />
      <Loader loading={ isLoading || deleteResponse.isLoading } />
      <ToastContainer autoClose={ 5000 } />
    </>
  );
};

export default PageWrapper;
