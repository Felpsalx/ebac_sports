import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type carrinhoItemState = {
  itens: Produto[]
}
const initialState: carrinhoItemState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((produtos) => produtos.id === produto.id)) {
        alert('item ja no carrinho')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { addCart } = carrinhoSlice.actions
export default carrinhoSlice.reducer
