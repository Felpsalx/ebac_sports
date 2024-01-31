import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import apiItens from '../services/api'
export const store = configureStore({
  reducer: {
    carrinhoItens: carrinhoReducer,
    [apiItens.reducerPath]: apiItens.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiItens.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
