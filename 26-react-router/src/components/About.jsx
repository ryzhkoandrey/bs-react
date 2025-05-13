import { Link } from 'react-router-dom';

const About = () => {
   return (
      <>
         <h1>About</h1>
         <Link to="/">Go to Home</Link>
         <br />
         <Link to="/contacts">Go to Contacts</Link>
      </>
   );
};

export default About;
