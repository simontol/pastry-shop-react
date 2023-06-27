import { useState } from 'react'
import './App.scss'
import Header from './app/Header'
import ProductCard from './app/ProductCard'
import { useProductsQuery } from './app/store/storeApi'

function App() {
  const storeId = import.meta.env.VITE_STORE_ID;
  const { data, error, isLoading } = useProductsQuery({ page: 1, elements: 5});

  return (
    <>
      <Header />
      <div className='product__list'>
        {data?.list.map(product => (<ProductCard key={ product.id } product={ product }/>))}
      </div>
      { error && <div></div>}
    </>
  )
}

export default App
