import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
   addBook,
   fetchBook,
   selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import createBookWithID from '../../utils/createBookWithID';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
   const dispatch = useDispatch();

   const handleAddRandomBook = () => {
      const randomIndex = Math.floor(Math.random() * booksData.length);
      const randomBook = booksData[randomIndex];
      dispatch(addBook(createBookWithID(randomBook, 'random')));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (title && author) {
         dispatch(addBook(createBookWithID({ title, author }, 'manual')));
         setTitle('');
         setAuthor('');
      } else {
         dispatch(setError('You must fill title and author'));
      }
   };

   const handleAddRandomBookViaAPI = () => {
      dispatch(fetchBook('http://localhost:4000/random-book-delayed'));
   };

   return (
      <div className="app-block book-form">
         <h2>Add a New book</h2>

         <form onSubmit={handleSubmit}>
            {/* Title */}
            <div>
               <label htmlFor="title">Title: </label>
               <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>

            {/* Author */}
            <div>
               <label htmlFor="author">Author: </label>
               <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
               />
            </div>

            {/* Add Book */}
            <button type="submit">Add Book</button>

            {/* Add Random */}
            <button type="button" onClick={handleAddRandomBook}>
               Add Random
            </button>

            {/* Add Random via API */}
            <button
               type="button"
               onClick={handleAddRandomBookViaAPI}
               disabled={isLoadingViaAPI}
            >
               {isLoadingViaAPI ? (
                  <>
                     <span>Loading Book...</span>
                     <FaSpinner className="spinner" />
                  </>
               ) : (
                  'Add Random via API'
               )}
            </button>
         </form>
      </div>
   );
};

export default BookForm;
