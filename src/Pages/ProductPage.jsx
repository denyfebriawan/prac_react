import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Nike",
    image:
      "https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2upDjU33kEx1UwHaB_AdENVWZLHPwVYM-LGb7TLR8W8=",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde consectetur distinctio ex dolorem et. Accusamus consectetur vitae sequi reprehenderit dolores odio, magni recusandae voluptatibus asperiores delectus eveniet tempora.",
    price: "Rp 1.000.000",
  },

  {
    id: 2,
    title: "Adidas",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga unde consectetur distinctio ex dolorem et.",
    price: "Rp 3.500.000",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center p-3">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header urlImage={product.image} />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
