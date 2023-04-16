import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useState, useEffect, cloneElement, Children } from "react";
import axios from "axios";

const MainLayout = (props) => {
    const { children, ...rest } = props;
    const [products , setProducts ] = useState([0]);
    const [searchValue , setSearchValue] = useState('');
   
    const [quantity , setQuantity] = useState(0);
    const [totalItems , setTotalItems] = useState(0);
    const [cart , setCart] = useState([]);

    useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
      setCart(cartItems);
      setTotalItems(cartItems.length);
    }, []);

    useEffect(() => {
      axios.get(`https://shodai.herokuapp.com/api/products`)
      .then( response => {
        setProducts(response.data);
      })
      .catch( error =>{
        console.log(error);
      });
    }, []);

    const addToCart = (item) =>{
      if(cart.indexOf(item) !== -1){
        let existingItem_index = cart.indexOf(item);
        cart[existingItem_index].qty = cart[existingItem_index].qty + 1;
        localStorage.setItem("cart" , JSON.stringify(cart));
        return;
      }
      else {
        Object.assign(item, {qty: 1});
        let updated_cart = [...cart, item];
        setCart(updated_cart);
        setTotalItems(totalItems+1)
        localStorage.setItem("cart" , JSON.stringify(updated_cart));
      }
    }

    const deleteCartItem = (deletedItem) => {
      const updated_cart = cart.filter(item => {
        if(deletedItem._id !== item._id){
          return item;
        }
      })
      setCart(updated_cart);
      setTotalItems(totalItems-1);
      localStorage.setItem("cart" , JSON.stringify(updated_cart));
    }

    return(
        <>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} cart={cart} deleteCartItem={deleteCartItem} totalItems={totalItems}/>
                {React.Children.map(props.children, child => {
                    return React.cloneElement(child, {
                      cart , 
                      setCart, 
                      quantity, 
                      setQuantity,
                      addToCart,
                      deleteCartItem}, null)
                })}
            <Footer/>
        </>
    );
}
export default MainLayout;