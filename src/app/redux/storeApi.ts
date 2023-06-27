import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pagination, Product, ProductResponse, Store } from './types'

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}stores/${import.meta.env.VITE_STORE_ID}`,
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    store: builder.query<Store, void>({
      query: () => `/`,
    }),
    products: builder.query<ProductResponse, Pagination>({
      query: ({ page = 1, elements = 5 }) => `/products?page=${page}&elements=${elements}`,
      providesTags: ['Products'],
    }),
    productById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (payload) => ({
        url: '/products',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
})

export const { useProductByIdQuery, useProductsQuery, useStoreQuery, useDeleteProductMutation } = storeApi
