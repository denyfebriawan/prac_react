/* eslint-disable react/prop-types */
import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow m-2 flex flex-col justify-between">
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
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)}...
        </h5>
        <p className="text-m text-white text-justify">
          {children.substring(0, 50)}...
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between p-3">
      <span className="text-3xl font-bold text-white">
        $
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button variant="bg-blue-700" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
