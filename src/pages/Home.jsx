import DefaultLayout from "./layout/DefaultLayout";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <DefaultLayout>
        <div className="shadow-md sm:rounded-lg w-full mb-4 mt-5 px-4 min-h-screen">
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl text-success-700">User List</h1>
            <Link
              to="/"
              className="focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Logout
            </Link>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
