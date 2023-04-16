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
    const [subTotal , setSubTotal] = useState(0);

    useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
      setCart(cartItems);
      setTotalItems(cartItems.length);
      let totalAmount = 0;
      cartItems.map(item => {
        totalAmount += item.price; 
      });
      setSubTotal(totalAmount);
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

    const addToCart = (item) => {
      if(cart.indexOf(item) !== -1){
        let existing_cart = [...cart];
        let existingItem_index = cart.indexOf(item);
        existing_cart[existingItem_index].qty = existing_cart[existingItem_index].qty + 1;
        setCart(existing_cart);
        let new_subtotal = subTotal + item.price;
        setSubTotal(new_subtotal);
        localStorage.setItem("cart" , JSON.stringify(existing_cart));
        return;
      }
      else {
        Object.assign(item, {qty: 1});
        let updated_cart = [...cart, item];
        setCart(updated_cart);
        setTotalItems(totalItems+1)
        let new_subtotal = subTotal + item.price
        setSubTotal(new_subtotal);
        localStorage.setItem("cart" , JSON.stringify(updated_cart));
      }
    }

    const deleteCartItem = (deletedItem) => {
      const updated_cart = cart.filter(item => deletedItem._id !== item._id);
      setCart(updated_cart);
      setTotalItems(totalItems-1);
      localStorage.setItem("cart" , JSON.stringify(updated_cart));

      let new_subtotal = 0;
      updated_cart.map(item => {
        new_subtotal += (item.price*item.qty); 
      });
      setSubTotal(new_subtotal);
    }

    return(
        <>
            <Header 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            cart={cart} 
            deleteCartItem={deleteCartItem} 
            totalItems={totalItems}
            subTotal={subTotal}/>
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