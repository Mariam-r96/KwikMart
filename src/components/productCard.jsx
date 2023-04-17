import React, {useState, useEffect} from "react";

const ProductCard = (props) => {
  const { index, product , quantity, setQuantity, addToCart ,incrementQuantity , decrementQuantity} = props;
    const [favourite , setFavourite ] = useState(undefined);
    const [showButton, setShowButton] = useState(true);

    const handleClick = (item) => {
        addToCart(item);
        setShowButton(false);
    }

    const handleDecrement = (item) => {
        if(item.qty > 1){
            decrementQuantity(item);
        } else {
            decrementQuantity(item);
            setShowButton(true);
        }
    }

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
                {showButton ? 
                    <button 
                    className='bg-sky-400 w-4/5 px-6 py-4 text-white rounded-3xl' 
                    onClick={e => handleClick(product)}>ADD TO CART</button>
                    :
                    <div className='flex rounded-3xl w-4/5 mx-auto'>
                        <button 
                        onClick={()=> handleDecrement(product)}
                        className={`bg-gray-300 px-6 text-lg text-white rounded-l-3xl`}>-</button>
                        <input className="w-full py-3 text-center border-l border-gray-300 focus:shadow-none focus:border-gray-300 focus:ring-0" readOnly type="text" value={product.qty}/>
                        <button 
                        onClick={()=> incrementQuantity(product)}
                        className={`bg-ternary-400 px-6 text-lg rounded-r-3xl`}>+</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductCard;