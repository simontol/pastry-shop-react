import Header from './app/Header'
import Loader from './app/Loader'
import ProductCard from './app/ProductCard'
import ProductDelete from './app/ProductDelete'
import ProductEdit from './app/ProductEdit'
import { useDeleteProductMutation, useProductsQuery } from './app/redux/storeApi'

function App() {
  const { data, error, isLoading } = useProductsQuery({ page: 1, elements: 5});
  const [,response] = useDeleteProductMutation();

  return (
    <>
      <Header />
      <div className='product__list'>
        {data?.list.map(product => (<ProductCard key={ product.id } product={ product }/>))}
      </div>
      { error && <div>Error</div>}
      <ProductDelete />
      <ProductEdit />
      <Loader loading={ isLoading || response.isLoading }/>
    </>
  )
}

export default App
