import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartTotalAmoint: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload)
      state.cartTotalAmoint += 1
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
      state.cartTotalAmoint -= 1
    },
  },
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
