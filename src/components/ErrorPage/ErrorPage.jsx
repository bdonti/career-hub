import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-8">
      <h1>OOPS! PATH NOT FOUND!</h1>
      <Link className="btn btn-ghost mt-4" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
