import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ProductCard from "../../components/productCard";
import BreadCrumb from "../../components/breadcrumb";
import PuffLoader from "react-spinners/PuffLoader";

const CategoryBasedProducts = (props) => {
  const {
    cart,
    setCart,
    quantity,
    setQuantity,
    addToCart,
    incrementQuantity,
    decrementQuantity,
  } = props;
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const query = router.query;
  const product_category_id = query.id ? query.id : "";
  const product_category_title = query.productCategory
    ? query.productCategory.replace(/-/g, " ")
    : "";

  useEffect(() => {
    const storage_cartItems = JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    axios
      .get(
        `https://shodai.herokuapp.com/api/category/${
          query.productCategory ? query.productCategory : ""
        }`
      )
      .then((response) => {
        if (storage_cartItems.length > 0) {
          let updated_cart = [...response.data];
          storage_cartItems.forEach((item) => {
            response.data.forEach((data, index) => {
              if (item._id == data._id) {
                Object.assign(data, { qty: item.qty });
                updated_cart = [...response.data];
              }
            });
          });
          setProducts(updated_cart);
        } else {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query.productCategory]);

  return (
    <div className="container mt-5 px-4">
      <BreadCrumb />
      <h1 className="my-8 uppercase">{product_category_title}</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 items-start gap-6">
        {products && products.length > 0 ? (
          products.map((product, key) => {
            return (
              <ProductCard
                key={key}
                index={key}
                product={product}
                cart={cart}
                setCart={setCart}
                quantity={quantity}
                setQuantity={setQuantity}
                addToCart={addToCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            );
          })
        ) : (
          <PuffLoader cssOverride={{ textAlign: "center" }} color="#eab308" />
        )}
      </div>
    </div>
  );
};

export default CategoryBasedProducts;
