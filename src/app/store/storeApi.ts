import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pagination, Product, ProductResponse, Store } from './types'

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}stores/${import.meta.env.VITE_STORE_ID}` }),
  endpoints: (builder) => ({
    store: builder.query<Store, void>({
      query: () => `/`,
    }),
    products: builder.query<ProductResponse, Pagination>({
      query: ({ page = 1, elements = 5}) => `/products?page=${page}&elements=${elements}`,
    }),
    productById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const { useProductByIdQuery, useProductsQuery, useStoreQuery } = storeApi
