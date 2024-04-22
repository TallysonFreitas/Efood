import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PratoType } from '../../models/Prato'

type Props = {
  pedidos: PratoType[]
}

const initialState: Props = {
  pedidos: []
}

const pratosSlice = createSlice({
  name: 'pratos',
  initialState,
  reducers: {
    adicionaPrato: (state, action: PayloadAction<PratoType>) => {
      state.pedidos = [...state.pedidos, action.payload]
    },
    removePrato: (state, action: PayloadAction<number>) => {
      state.pedidos = state.pedidos.filter((each) => each.id !== action.payload)
    },
    limpaCart: (state) => {
      state.pedidos = []
    }
  }
})

export const { adicionaPrato, removePrato, limpaCart } = pratosSlice.actions
export default pratosSlice.reducer
