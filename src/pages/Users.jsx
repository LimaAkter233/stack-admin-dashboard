import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetUsersListQuery } from "../../api/api";
import DefaultLayout from "./layout/DefaultLayout";
import { Link } from "react-router-dom";
import Edit from "../images/icon/icon-edit.svg";
import Trash from "../images/icon/icon-trash.svg";
import Minus from "../images/icon/minus.svg";
import ArrowDown from "../images/icon/arrow-down.svg";
import User1 from "../images/user/user-01.png";
const Users = () => {
  const dispatch = useDispatch();
  const { data: users, error, isLoading } = useGetUsersListQuery(2);

  // useEffect(() => {}, [dispatch]);
  useEffect(() => {
    console.log("Users data from API:", users);
  }, [dispatch, users]);
  return (
    <DefaultLayout>
      <div className="shadow-md sm:rounded-lg w-full mb-4 mt-5 px-4 min-h-screen">
        <div className="flex items-center justify-between ">
          <h1>User List</h1>
          <Link
            to="/"
            className="focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Logout
          </Link>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : users && users.data.length > 0 ? (
          <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="">
                      <div className="">
                        <img
                          className="w-4 h-4 border border-secondary border-solid rounded "
                          src={Minus}
                          alt="minus"
                        />
                      </div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 flex">
                    User Info
                    <img
                      className="w-4 h-4  "
                      src={ArrowDown}
                      alt="ArrowDown"
                    />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    About
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.data.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-${user.id}`}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-primary rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={`checkbox-${user.id}`}
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.avatar}
                        alt={`User image`}
                      />
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {user.first_name} {user.last_name}
                        </div>
                        <div className="font-normal text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 font-semibold text-sm">
                        {user.title}
                      </div>
                      <div className="text-gray-500 text-sm font-light">
                        {user.first_name} {user.last_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 flex items-center">
                      <div
                        className={
                          "flex items-start text-success bg-success-50 text-success-700 text-error-500 bg-error-50 text-error-700 py-0.5 px-2 rounded-2xl mr-5"
                        }
                      >
                        This is dummy status
                        {/* {user.status} */}
                      </div>
                      <div className="icon p-2.5 flex items-center">
                        <img
                          className="h-4 w-4 mr-5 font-semibold"
                          src={Trash}
                          alt={`Trash icon for User`}
                        />
                        <img
                          className="h-10 w-5 font-semibold"
                          src={Edit}
                          alt={`Edit icon for User`}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* {users.data.map((user) => (
              <div key={user.id}>
                <p>
                  Name: {user.first_name} {user.last_name}
                </p>
                <p>Email: {user.email}</p>
              </div>
            ))} */}
          </div>
        ) : (
          <>
            <p className="text-2xl text-error-500">No users available.</p>
            <div className="flex items-center ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="">
                        <div className="">
                          <img
                            className="w-4 h-4 border border-secondary border-solid rounded "
                            src={Minus}
                            alt="minus"
                          />
                        </div>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 flex">
                      User Info
                      <img
                        className="w-4 h-4  "
                        src={ArrowDown}
                        alt="ArrowDown"
                      />
                    </th>
                    <th scope="col" className="px-6 py-3">
                      About
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox`}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-primary rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor={`checkbox`} className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={User1}
                        alt={`User image`}
                      />
                      <div className="ps-3">
                        <div className="text-base font-semibold">name</div>
                        <div className="font-normal text-gray-500">
                          user1@gmail.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 font-semibold text-sm">
                        THis is dummy title
                      </div>
                      <div className="text-gray-500 text-sm font-light">
                        THis is dummy title
                      </div>
                    </td>
                    <td className="px-6 py-4 flex items-center">
                      <div
                        className={
                          "flex items-start  text-success bg-success-50 text-success-700 py-0.5 px-2 rounded-2xl mr-5"
                        }
                      >
                        This is status
                      </div>
                      <div className="icon p-2.5 flex items-center">
                        <img
                          className="h-4 w-4 mr-5 font-semibold"
                          src={Trash}
                          alt={`Trash icon for User`}
                        />
                        <img
                          className="h-10 w-5 font-semibold"
                          src={Edit}
                          alt={`Edit icon for User `}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between p-4">
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
              <div>
                <span>1</span> of <span>2</span>
              </div>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Users;
