import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addCart } from "../cart/cartSlice";
import AddToCartForm from "../cart/AddCartForm";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null); // Sử dụng null thay vì mảng

  const handleAddCart = ({ quantity }) => {
    console.log({ quantity });

    const action = addCart({
      id: product.id_pr,
      product,
      quantity,
    });

    console.log(action);
    dispatch(action);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/product/${id}`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Đang tải...</div>;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageProduct}
            alt={product.productName}
            height={400}
            width={400}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.productName}</h1>
          <p className="lead fw-bolder">
            Đánh giá: {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-semibold my-4">
            {product.priceProduct} VNĐ
          </h3>
          <p className="lead">{product.descriptionProduct}</p>
          <AddToCartForm onSubmit={handleAddCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
