import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useState, useEffect, cloneElement, Children } from "react";
import axios from "axios";

const MainLayout = (props) => {
    const { children, ...rest } = props;
    const [products , setProducts ] = useState([0]);
    const [searchValue , setSearchValue] = useState('');

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
        <>
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                {React.Children.map(props.children, child => {
                    return React.cloneElement(child, {searchValue}, null)
                })}
            <Footer/>
        </>
    );
}
export default MainLayout;