import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
};

type CartState = {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{ id: string, title: string, price: number }>) {
            const itemIdex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIdex >= 0) {
                state.items[itemIdex].quantity++;
            } else {
                const newItem: CartItem = {
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1
                };
                state.items.push(newItem);
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const itemIdex = state.items.findIndex(item => item.id === action.payload);
            if (itemIdex >= 0) {
                const item = state.items[itemIdex];
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.items.splice(itemIdex, 1);
                }
            }
        }
    }
});


export const { addToCart, removeFromCart } = cartSlice.actions;