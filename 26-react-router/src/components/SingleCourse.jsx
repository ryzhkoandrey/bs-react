import { useParams } from 'react-router-dom';
import courses from '../data/courses.js';

const SingleCourse = () => {
   const params = useParams();

   return <h1>{params.courseSlug}</h1>;
};

export default SingleCourse;
