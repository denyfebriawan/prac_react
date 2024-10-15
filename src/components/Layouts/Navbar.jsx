import { useContext, useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  const cart = useSelector((state) => state.cart.data);

  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button variant="ml-5 bg-red-700" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        {totalCart}
      </div>
      <button
        className="bg-black text-white rounded mx-3 p-2"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Navbar;
