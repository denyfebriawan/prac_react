import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";
import getProducts from "../services/products.service";
import { getUsername } from "../services/auth.service";

// const products = [
//   {
//     id: 1,
//     title: "Nike",
//     image:
//       "https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2upDjU33kEx1UwHaB_AdENVWZLHPwVYM-LGb7TLR8W8=",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde consectetur distinctio ex dolorem et. Accusamus consectetur vitae sequi reprehenderit dolores odio, magni recusandae voluptatibus asperiores delectus eveniet tempora.",
//     price: 1000000,
//   },

//   {
//     id: 2,
//     title: "Adidas",
//     image:
//       "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde consectetur distinctio ex dolorem et.",
//     price: 3500000,
//   },

//   {
//     id: 4,
//     title: "Bata",
//     image:
//       "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde consectetur distinctio ex dolorem et.",
//     price: 3500000,
//   },

//   {
//     id: 3,
//     title: "Jordan",
//     image:
//       "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 5500000,
//   },
// ];

const ProductPage = () => {
  const [cart, setCart] = useState("");

  const [username, setUsername] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = getUsername(token);
      setUsername(user);
    } else {
      window.location.href = "/login";
    }
  });

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    setCart(
      localStorage.getItem("cart") !== null
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
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

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}
        <Button variant="ml-5 bg-red-700" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center p-3">
        <div className="w-3/5 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        $
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        $
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>Total Price</td>
                <td>
                  $
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
