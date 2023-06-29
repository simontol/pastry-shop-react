import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pagination, Product, ProductData, ProductResponse, Store } from './types'

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${ import.meta.env.VITE_BASE_URL }stores/${ import.meta.env.VITE_STORE_ID }`,
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        store: builder.query<Store, void>({
            query: () => '',
        }),
        products: builder.query<ProductResponse, Pagination>({
            query: ({ page = 1, elements = 5 }) => `/products?page=${ page }&elements=${ elements }`,
            providesTags: ['Products'],
        }),
        productById: builder.query<Product, string>({
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
            }),
            invalidatesTags: ['Products'],
        }),
        updateProduct: builder.mutation<any, Product>({
            query: (product) => ({
                url: `/products/${ product.id }`,
                method: 'PUT',
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
    }),
})

export const {
    useProductByIdQuery,
    useProductsQuery,
    useStoreQuery,
    useDeleteProductMutation,
    useUpdateProductMutation,
    useNewProductMutation,
} = storeApi
