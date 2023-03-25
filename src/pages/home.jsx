import React , {useState , useEffect} from 'react';
import axios from 'axios';

export default function Home(){
    const [products , setProducts ] = useState([0]);
    const [favourite , setFavourite ] = useState(undefined);
  
    useEffect(() => {
      axios.get(`https://shodai.herokuapp.com/api/products`)
      .then( response => {
        setProducts(response.data);
      })
      .catch( error =>{
        console.log(error);
      });
    }, []);

    console.log("produtcs", products)
    return(
        <div className='container mt-5'>
            <h1 className='text-lg mb-8'>ALL PRODUCTS</h1>

            <div className='grid grid-cols-5 items-start'>
                {products && products.length > 0 && products.map((product , key) => {
                    return(
                        <div key={key} className='border border-gray-200 h-full'>
                            <div className='h-36 w-full p-3 relative'>
                                <img 
                                src={product.image}
                                className='w-full h-full object-contain'/>
                                <span class="material-icons absolute top-3 right-4" onClick={ e => setFavourite(key)}>
                                    {favourite == key ? 'favorite' : 'favorite_border'}
                                </span>
                                {/* <span class="material-icons absolute top-6 right-4">favorite_border</span> */}
                            </div>
                            <div className='p-4 h-32'>
                                <h5 className='text-gray-800 mt-3'>{product.title}</h5>
                                <p className='mt-3 text-red-500'>$ {product.price}</p>
                            </div>
                            <div className='text-center p-6'>
                                <button className='bg-sky-400 px-6 py-3 text-white rounded-xl'>ADD TO CART</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}