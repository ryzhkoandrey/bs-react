import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
   name: 'books',
   initialState,
   reducers: {
      addBook: (state, action) => {
         state.push(action.payload);
      },

      deleteBook: (state, action) => {
         return state.filter((book) => book.id !== action.payload);
      },

      toggleFavorite: (state, action) => {
         const targetBook = state.find((book) => book.id === action.payload);
         if (targetBook) {
            targetBook.isFavorite = !targetBook.isFavorite;
         }
      },
   },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
