import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import './BookList.css';

const BookList = () => {
   const books = useSelector((state) => state.books);
   const dispatch = useDispatch();

   const handleDeleteBook = (id) => {
      dispatch(deleteBook(id));
   };

   const handleToggleFavorite = (id) => {
      dispatch(toggleFavorite(id));
   };

   return (
      <div className="app-block book-list">
         <h2>Book List</h2>

         {books.length === 0 ? (
            <p>No books available</p>
         ) : (
            <ul>
               {books.map((book, i) => (
                  <li key={book.id}>
                     <div className="book-info">
                        {i + 1}. {book.title} by <strong>{book.author}</strong>
                     </div>

                     <div className="book-actions">
                        {book.isFavorite ? (
                           <BsBookmarkStarFill
                              className="star-icon"
                              onClick={() => handleToggleFavorite(book.id)}
                           />
                        ) : (
                           <BsBookmarkStar
                              className="star-icon"
                              onClick={() => handleToggleFavorite(book.id)}
                           />
                        )}

                        <button onClick={() => handleDeleteBook(book.id)}>
                           Delete
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default BookList;
