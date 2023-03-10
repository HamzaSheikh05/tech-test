import { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../assets/InvalidPage.png";

export const InvalidUrl = () => {
  useEffect(() => {
    document.title = `Error 404: Invalid URL`;
  });
  return (
    <section className="flex flex-col justify-center px-3 bg-light-mode dark:bg-dark-mode">
      <div className="animate-pulse flex flex-col items-center my-3">
        <p className="text-6xl font-bold text-blue-500 font-burtons my-10 dark:text-blue-300">
          Error 404: Page Not Found!
        </p>
        <div className="max-w-lg">
          <img className="rounded" src={ErrorImage} alt="404 error" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to="/">
          <button className="w-64 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Redirect to Home
          </button>
        </Link>
      </div>
    </section>
  );
};
