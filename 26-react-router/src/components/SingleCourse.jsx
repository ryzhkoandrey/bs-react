import { Link, useParams } from 'react-router-dom';
import courses from '../data/courses.js';

const SingleCourse = () => {
   const params = useParams();
   const { title, slug, id } = courses.find((course) => course.slug === params.slug);

   return (
      <>
         <h1>{title}</h1>
         <h2>{slug}</h2>
         <h3>{id}</h3>
         <Link to=".." relative="path">
            All courses
         </Link>
      </>
   );
};

export default SingleCourse;
