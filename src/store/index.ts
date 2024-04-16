import { configureStore } from '@reduxjs/toolkit'
import pratosSlice from './Reducers/PratosReducer'
import api from '../services/api'

const store = configureStore({
  reducer: { pedidos: pratosSlice, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
