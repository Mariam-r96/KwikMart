import React, {useState, useEffect} from "react";

const ProductCard = (props) => {
  const { index, product ,cart, setCart, quantity, setQuantity, addToCart } = props;
  // const cartItems = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
    const [favourite , setFavourite ] = useState(undefined);
    // const [quantity , setQuantity] = useState(0);
    // const [cart , setCart] = useState(cartItems);

    // useEffect(()=>{

    //   // setCart(cartItems);
    //   localStorage.setItem("cart" , JSON.stringify(cart));
    // },[cart]);
    // console.log(cart , "Cart change");

    // const addToCart = (item) =>{
    //     let cartItemCookie =  localStorage.getItem("cart") ?  localStorage.getItem("cart") : null ;
    //     let cartItems = JSON.parse(cartItemCookie) ? JSON.parse(cartItemCookie) : [];
    //     // setCart(cartItems);

    //     if(cartItemCookie == null){
    //         Object.assign(item, {qty: 1});
    //         localStorage.setItem("cart" , JSON.stringify([item]));
    //     } else {

    //         // cartItems.forEach((cartItem, key) => {
    //         //     if(item._id == cartItem._id){
    //         //         console.log("matches" , item._id, cartItem._id)
    //         //         cartItem.qty =  cartItem.qty + 1;
    //         //         cartItems[key] = cartItem;
    //         //         localStorage.setItem("cart" , JSON.stringify(cartItems));
    //         //         return ;
    //         //     } else {
    //         //         console.log("new prod",  item._id, cartItem._id)
    //         //         Object.assign(item, {qty: 1});
    //         //         cartItems.push(item);
    //         //         console.log(cartItems)
    //         //         localStorage.setItem("cart" , JSON.stringify(cartItems));
    //         //         return;
    //         //     }
    //         // });

    //         // localStorage.setItem("cart" , JSON.stringify(cartItems));
    //     }

    // }



    // const addToCart = (item) =>{
      // let exisitng_cart = cart;
      // exisitng_cart = [...cart , item]
      // if(cart.indexOf(item) !== -1) {
      //   // return;
      // } else {
        // setCart([...cart, item]);
        // lol.push(item)
        // }
        // localStorage.setItem("cart" , JSON.stringify(exisitng_cart));
        // setCart(exisitng_cart);
      // }

    return(
        <div key={index} className='border border-gray-200 h-full'>
            <div className='h-36 w-full p-3 relative'>
                <img 
                src={product.image ? product.image : '/assets/no-image.png'}
                className='w-full h-full object-contain'/>
                <span className="material-icons absolute top-3 right-4 cursor-pointer" onClick={ e => setFavourite(key)}>
                    {/* {favourite == key ? 'favorite' : 'favorite_border'} */}
                    favorite_border
                </span>
            </div>
            <div className='p-4 h-32'>
                <h5 className='text-gray-800 mt-3'>{product.title}</h5>
                <p className='mt-3 text-red-500'>$ {product.price}</p>
            </div>
            <div className='text-center p-6'>
                <button className='bg-sky-400 px-6 py-3 text-white rounded-xl' onClick={e => addToCart(product)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductCard;