import DeleteModal from './app/DeleteModal'
import Header from './app/Header'
import Loader from './app/Loader'
import ProductCard from './app/ProductCard'
import ProductModal from './app/ProductModal'
import { useDeleteProductMutation, useProductsQuery } from './app/redux/storeApi'

const App = () => {
    const { data, error, isLoading } = useProductsQuery({ page: 1, elements: 10});
    const [,response] = useDeleteProductMutation();

    return (
        <>
            <Header />
            <div className='product__list'>
                {data?.list.map(product => (<ProductCard key={ product.id } product={ product }/>))}
            </div>
            { error && <div>Error</div>}
            <DeleteModal />
            <ProductModal />
            <Loader loading={ isLoading || response.isLoading }/>
        </>
    )
}

export default App
