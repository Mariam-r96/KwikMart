import React, {useState, useEffect} from "react";

const ProductCard = (props) => {
  const { index, product ,cart, setCart, quantity, setQuantity, addToCart } = props;
    const [favourite , setFavourite ] = useState(undefined);
  

    return(
        <div key={index} className='border border-gray-200 h-full'>
            <div className='h-36 w-full p-3 relative'>
                <img 
                src={product.image ? product.image : '/assets/no-image.png'}
                className='w-full h-full object-contain'/>
                <span className="material-icons absolute top-3 right-4 cursor-pointer" onClick={ e => setFavourite(index)}>
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