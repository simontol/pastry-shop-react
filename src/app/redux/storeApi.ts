import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Pagination,
  ProductData, ProductResponse, StatsData, Store,
} from './types';

export const api = createApi({
  reducerPath: 'storeApi',

  baseQuery: fetchBaseQuery({
    baseUrl: `${ import.meta.env.VITE_BASE_URL }stores/${ import.meta.env.VITE_STORE_ID }`,
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    store: builder.query<Store, void>({
      query: () => '',
    }),
    products: builder.query<ProductResponse, Pagination | void>({
      query: (pagination) => (pagination
        ? `/products?page=${ pagination.page }&elements=${ pagination.elements }` : '/products'),
      providesTags: ['Products'],
    }),
    productById: builder.query<ProductData, string>({
      query: (id) => `/products/${ id }`,
    }),
    newProduct: builder.mutation<any, ProductData>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        responseHandler: 'text',
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${ id }`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
    stats: builder.query<StatsData[], void>({
      query: () => '/stats/categories',
    }),
  }),
});

export const {
  useProductByIdQuery,
  useProductsQuery,
  useStoreQuery,
  useDeleteProductMutation,
  useNewProductMutation,
  useStatsQuery,
} = api;
