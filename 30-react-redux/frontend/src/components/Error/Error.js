import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectErrorMessage, clearError } from '../../redux/slices/errorSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = () => {
   const errorMessage = useSelector(selectErrorMessage);
   const dispatch = useDispatch();

   useEffect(() => {
      if (errorMessage) {
         toast.info(errorMessage);
         dispatch(clearError());
      }
   }, [errorMessage, dispatch]);

   return <ToastContainer position="top-right" autoClose={2000} theme="dark" />;
};

export default Error;
