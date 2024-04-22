import { configureStore } from '@reduxjs/toolkit'
import platesSlice from './Reducers/PratosReducer'
import api from '../services/api'

const store = configureStore({
  reducer: { orders: platesSlice, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
