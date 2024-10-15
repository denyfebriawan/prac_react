/* eslint-disable react/prop-types */
import Button from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const CardProduct = (props) => {
  const { children } = props;
  const { isDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`w-full bg-gray-800 max-w-sm border border-gray-700 rounded-lg shadow m-2 flex flex-col justify-between ${
        isDarkMode && "bg-white"
      }`}
    >
      {children}
    </div>
  );
};

const Header = (props) => {
  const { urlImage } = props;
  return (
    <a href="#">
      <img
        className="p-8 rounded-t-lg h-60 w-full"
        src={urlImage}
        alt="product"
      />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5
          className={`text-xl font-semibold tracking-tight text-white ${
            isDarkMode && "text-black"
          }`}
        >
          {title.substring(0, 20)}...
        </h5>
        <p className={`text-m text-justify ${isDarkMode ? "text-black" : "text-white"}`}>
          {children.substring(0, 50)}...
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between p-3">
      <span className={`text-3xl font-bold ${isDarkMode ? "text-black" : "text-white"}`}>
        $
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button
        variant="bg-blue-700"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
