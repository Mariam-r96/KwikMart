import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductCard from "../../components/productCard";
import axios from "axios";
import { PuffLoader } from "react-spinners";

const SearchResults = (props) => {
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
  const searched_id = router.query.id;

  console.log(searched_id);

  useEffect(() => {
    axios
      .get(`https://shodai.herokuapp.com/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-5 px-4">
      <h1 className="text-lg mb-8">YOUR SEARCHED PRODUCT</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 items-start gap-6">
        {products && products.length > 0 ? (
          products.map((product, key) => {
            if (product && product._id == searched_id) {
              return (
                <ProductCard
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
            }
          })
        ) : (
          <PuffLoader cssOverride={{ textAlign: "center" }} color="#eab308" />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
