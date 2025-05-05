import { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
   const [posts, setPosts] = useState(null);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((json) => setPosts(json));
   }, []);

   console.log(posts);

   return (
      <div>
         <Post />
         <Post />
      </div>
   );
}

export default Posts;
