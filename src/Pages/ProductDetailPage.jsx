import { useParams } from "react-router-dom";
import { getProductDetail } from "../services/products.service";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    const fectProductDetail = async () => {
      try {
        const response = await getProductDetail(id);
        setProductDetail(response);
      } catch (error) {
        console.error("Error fetching data :", error);
      }
    };

    fectProductDetail();
    // setProductDetail(getProductDetail(id));
  }, [id]);


  return (
    <div>
      <div>Detail : {productDetail.id} </div>
    </div>
  );
};

export default ProductDetailPage;
