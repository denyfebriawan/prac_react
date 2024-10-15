import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/products.service";
import useLogin from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

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
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching all data :", error);
      }
    };

    fetchAllProduct();
  }, []);

  return (
    <Fragment>
      <div className="flex justify-center p-3">
        <div className="w-3/5 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header urlImage={product.image} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/5">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
