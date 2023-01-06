import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className='errorpage'>
      <h3>Sorry, we cant find that page</h3>
      <p>
        <Link to='/'>Back to home</Link>
      </p>
    </section>
  );
};

export default Error;
