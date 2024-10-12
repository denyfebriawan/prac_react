import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Terjadi error :", error);
  }
};

const getProductDetail = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Terjadi error :", error);
  }
  // axios
  //   .get(`https://fakestoreapi.com/products/${id}`)
  //   .then((res) => {
  //     callback(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

export { getProductDetail, getProducts };
