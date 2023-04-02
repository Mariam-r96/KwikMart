import React , {useState , useEffect} from 'react';
import ProductCard from '../components/productCard';
import axios from 'axios';

export default function Home(props){
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
    
    return(
        <div className='container mt-5 px-4'>
            <h1 className='text-lg mb-8'>ALL PRODUCTS</h1>

            <div className='grid md:grid-cols-3 lg:grid-cols-5 items-start'>
                {products && products.length > 0 && products.map((product , key) => {
                    return(
                        <ProductCard
                            key={key}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}