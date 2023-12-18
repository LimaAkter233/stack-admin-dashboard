import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/UserSlice";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../images/logo/logo.svg";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { loading, error } = useSelector((state) => state.user);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
    }

    let userCredentials = {
      email,
      password,
    };

    try {
      const result = await dispatch(registerUser(userCredentials));

      if (registerUser.fulfilled.match(result)) {
        console.log("Successful registration. Redirecting to /signin");
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <section className="bg-white  border-stack-gray">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="rounded-lg border border-solid  border-borderGray bg-white shadow-xl md:mt-0 sm:max-w-md xl:p-0 h-[576px] w-[444px] ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex items-start md:space-y-6">
                <a
                  href="#"
                  className="flex items-start text-2xl font-semibold text-gray-900"
                >
                  <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
                  Stack
                </a>
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign Up to continue with Stack
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    className="border border-solid border-secondary text-gray-900 sm:text-sm rounded-lg focus:outline-secondary focus:placeholder:text-gray-900  block w-full p-2.5 inputShadow required:border-error-500  "
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    placeholder="*****"
                    className=" border border-solid border-secondary text-gray-900 sm:text-sm rounded-lg focus:outline-secondary focus:placeholder:text-gray-900  block w-full p-2.5 inputShadow required:border-error-500 "
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleRegister}
                  className="w-full text-white bg-primary hover:bg-primary-700  shadow-button focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-secondaryText">
                  Already have an account?{" "}
                  <Link to="/">
                    <a
                      href="#"
                      className="font-medium text-blue hover:underline"
                    >
                      Sign in
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
