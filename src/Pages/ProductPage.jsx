import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";

const products = [
  {
    id: 1,
    title: "Nike",
    image:
      "https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2upDjU33kEx1UwHaB_AdENVWZLHPwVYM-LGb7TLR8W8=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde consectetur distinctio ex dolorem et. Accusamus consectetur vitae sequi reprehenderit dolores odio, magni recusandae voluptatibus asperiores delectus eveniet tempora.",
    price: 1000000,
  },

  {
    id: 2,
    title: "Adidas",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde consectetur distinctio ex dolorem et.",
    price: 3500000,
  },

  {
    id: 4,
    title: "Bata",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde consectetur distinctio ex dolorem et.",
    price: 3500000,
  },

  {
    id: 3,
    title: "Jordan",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 5500000,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Nike",
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-red-700" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center p-3">
        <div className="w-3/5 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header urlImage={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/5">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
