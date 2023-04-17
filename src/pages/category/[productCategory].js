import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import ProductCard from "../../components/productCard";
import BreadCrumb from "../../components/breadcrumb";

const CategoryBasedProducts = (props) => {
    const {cart, setCart, quantity, setQuantity, addToCart , incrementQuantity, decrementQuantity} = props;
    const [products , setProducts ] = useState([]);
    const router = useRouter();
    const query = router.query;
    const product_category_id = (query.id ? query.id : '');
    const product_category_title = (query.productCategory ? query.productCategory.replace(/-/g,' ') : '');

    useEffect(() => {
        axios.get(`https://shodai.herokuapp.com/api/products`)
        .then( response => {
          setProducts(response.data);
        })
        .catch( error =>{
          console.log(error);
        });
      }, []);

    return(
        <div className="container mt-5 px-4">
            <BreadCrumb/>
            <h1 className='ext-lg my-8 uppercase'>{product_category_title}</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 items-start gap-6'>
                {products && products.length > 0 && products.map( (product , key) => {
                    if(product){
                        if(product.category == product_category_id){
                            return(
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
                    }
                })}
            </div>
            
        </div>
    );
}

export default CategoryBasedProducts;