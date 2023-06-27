import { Product } from './store/types'

type Props ={
  product: Product,
}

const ProductCard = ({ product }: Props) => {
  const {data: { title, category, price, employee, description, reviews}} = product;
  return (
    <div className='product__card'>
      <h2>{ title }</h2>
      <div>{ price.toFixed(2) } €</div>
      <div>{ category }</div>
      <div>{ employee }</div>
      <div>{ description }</div>
      {reviews && <div>{ reviews.map(review => (<div>{review}</div>)) }</div>}
      <div className='product__buttons'>
        <button>EDIT</button>
        <button className='red'>DELETE</button>
      </div>
    </div>
  )
}

export default ProductCard
