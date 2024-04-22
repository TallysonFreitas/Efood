import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PratoType } from '../../models/Prato'

type Props = {
  orders: PratoType[]
}

const initialState: Props = {
  orders: []
}

const platesSlice = createSlice({
  name: 'plates',
  initialState,
  reducers: {
    addPlate: (state, action: PayloadAction<PratoType>) => {
      state.orders = [...state.orders, action.payload]
    },
    removePlate: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter((each) => each.id !== action.payload)
    },
    clearCart: (state) => {
      state.orders = []
    }
  }
})

export const { addPlate, removePlate, clearCart } = platesSlice.actions
export default platesSlice.reducer
