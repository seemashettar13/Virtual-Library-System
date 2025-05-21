
import { createSlice } from '@reduxjs/toolkit';
import dummyBooks from '../data/dummyBooks'

const initialState = {
    items: dummyBooks,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.items.push({ id: Date.now(), ...action.payload });
        },
    },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;