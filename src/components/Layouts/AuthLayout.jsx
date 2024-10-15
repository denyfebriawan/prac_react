import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  console.log(isDarkMode);

  const { children, title, type } = props;
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 text-white rounded p-2"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <NavAuth type={type} />
      </div>
    </div>
  );
};

const NavAuth = ({ type }) => {
  if (type === "login") {
    return (
      <p className="flex justify-center mt-3 text-sm">
        Dont have an account?
        <Link to="/register" className="text-blue-700 mx-2 ">
          Sign up!
        </Link>
      </p>
    );
  } else {
    return (
      <p className="flex justify-center mt-3 text-sm">
        Already have an account?
        <Link to="/login" className="text-blue-700 mx-2">
          Sign in!
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
