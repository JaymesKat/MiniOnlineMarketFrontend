import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementQuantity: (state, action) => {
            const itemToUpdate = state.cartItems.find(item => item.productId === action.payload)
            itemToUpdate.quantity++;

            state.cartItems = [
                ...state.cartItems.filter(item=> item.productId !== itemToUpdate.productId),
                itemToUpdate
            ]
        },
        decrementQuantity: (state, action) => {
            const itemToUpdate = state.cartItems.find(item => item.productId === action.payload)
            itemToUpdate.quantity--;
            state.cartItems = [
                ...state.cartItems.filter(item=> item.productId !== itemToUpdate.productId),
                itemToUpdate.productId]
        },
        addCartItem: (state, action) => {
            state.cartItems = [
                ...state.cartItems,
                action.payload
            ];
        },
        removeCartItem: (state, action) => {
            state.items = [
                ...state.cartItems.filter(item=> item.productId !== action.payload)
            ];
        },
    },
})

export const { incrementQuantity, decrementQuantity, addCartItem, removeCartItem } = cartSlice.actions

export default cartSlice.reducer