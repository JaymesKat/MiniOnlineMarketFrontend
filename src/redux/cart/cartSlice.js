import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementQuantity: (state, action) => {
            const itemToUpdate = state.cartItems.find(item => item.productId == action.payload)
            itemToUpdate.quantity++;

            state.cartItems = [
                ...state.cartItems.filter(item=> item.productId !== itemToUpdate.productId),
                itemToUpdate
            ]
        },
        decrementQuantity: (state, action) => {
            const itemToUpdate = state.cartItems.find(item => item.productId == action.payload)
            itemToUpdate.quantity--;
            state.cartItems = [
                ...state.cartItems.filter(item=> item.productId !== itemToUpdate.productId),
                itemToUpdate
            ]
        },
        addCartItem: (state, action) => {
            const item = state.cartItems.find(item => item.productId == action.payload.productId)
            console.log(item);
            console.log("Action: "+action.payload.productId)
            if (item) {
                item.quantity++;
                state.cartItems = [
                    ...state.cartItems.filter(aItem=> aItem.productId !== item.productId),
                    item
                ]
                return;
            }
            state.cartItems = [
                ...state.cartItems,
                action.payload
            ];
        },
        removeCartItem: (state, action) => {
            state.cartItems = [
                ...state.cartItems.filter(item=> item.productId !== action.payload)
            ];
        },
    },
})

export const { incrementQuantity, decrementQuantity, addCartItem, removeCartItem } = cartSlice.actions

export default cartSlice.reducer