import { Link } from "react-router-dom";
const Error = ({ networkError }) => {
  return (
    <section className="errorpage">
      <h3>
        {networkError ? "There was an error" : "Sorry, we cant find that page"}
      </h3>
      <p style={{ marginTop: "0.5em" }}>
        {networkError ? (
          "It's not your fault. It's Onos'"
        ) : (
          <Link to="/">Back to home</Link>
        )}
      </p>
    </section>
  );
};

export default Error;
