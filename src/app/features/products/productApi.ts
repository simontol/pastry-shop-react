import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pagination, Product, ProductResponse } from './product'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}stores/${import.meta.env.VITE_STORE_ID}/` }),
  endpoints: (builder) => ({
    products: builder.query<ProductResponse, Pagination>({
      query: ({ page = 1, elements = 5}) => `products?page=${page}&elements=${elements}`,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const { useGetProductByIdQuery, useProductsQuery } = productApi
