import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from './redux/storeApi'
import modalReducer from './redux/modalReducer'

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(storeApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
