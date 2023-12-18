/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import Header from "../Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="container-2xl mx-auto">
        <Header />
        <div className="container-xl mx-auto md:container md:mx-auto">
          {/* <Link
            to="/SignIn"
            className="focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Login
          </Link> */}

          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
