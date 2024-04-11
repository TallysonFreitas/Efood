import { configureStore } from '@reduxjs/toolkit'
import pratosSlice from './Reducers/PratosReducer'

const store = configureStore({
  reducer: { pedidos: pratosSlice }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
