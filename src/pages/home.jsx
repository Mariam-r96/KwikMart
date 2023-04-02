import React , { useState , useEffect} from 'react';
import ProductCard from '../components/productCard';
import axios from 'axios';
import ProductAd from '../components/productAdvertise';

const Home = (props) =>{
    const [products , setProducts ] = useState([]);
    const [categories , setCategories ] = useState([]);
  
    useEffect(() => {
      axios.get(`https://shodai.herokuapp.com/api/products`)
      .then( response => {
        setProducts(response.data);
      })
      .catch( error =>{
        console.log(error);
      });
    }, []);

    // const advertisement1_category_id = categories[0] ? categories[0]._id : '';

    // const advertisement1_product = products.map(product => {
    //     // if(product.category == advertisement1_category_id){
    //     //     return product;
    //     // }
    // })

    // console.log(advertisement1_category_id)
    
    return(
        <div className='container mt-5 px-4'>
            <div className='grid grid-cols-12 gap-8 mt-8'>
                <div className='col-span-full md:col-span-8'>
                    <ProductAd
                     bgImg={'/assets/grocery-shopping.jpg'}
                     apiCategoryIndex={'2'}
                     alignContent={'right'}
                     title={'Feed your family the best'}
                     subtitle = {'KwikMart Weekend Discount '}/>
                </div>
                <div className='col-span-full md:col-span-4'>
                    <ProductAd
                    bgImg={'/assets/baby.jpg'}
                    apiCategoryIndex={'5'}
                    alignContent={'center'}
                    title={'Trust us for your baby’s daily care'}
                    subtitle = {'KwikMart Weekend Discount '}/>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-8 mt-8'>
                <div className='col-span-full md:col-span-6'>
                    <ProductAd
                     bgImg={'/assets/office.jpg'}
                     apiCategoryIndex={'4'}
                     alignContent={'left'}
                     title={'Get your work done by shopping with us'}
                     subtitle = {'KwikMart Weekend Discount '}/>
                </div>
                <div className='col-span-full md:col-span-6'>
                    <ProductAd
                    bgImg={'/assets/beauty&health.jpg'}
                    apiCategoryIndex={'1'}
                    alignContent={'left'}
                    title={'Feel a new beauty experience.'}
                    subtitle = {'KwikMart Weekend Discount'}/>
                </div>
            </div>

            {/* <div className='grid md:grid-cols-3 lg:grid-cols-5 items-start'>
                {products && products.length > 0 && products.map((product , key) => {
                    return(
                        <ProductCard
                            key={key}
                            index={key}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    );
                })}
            </div> */}
        </div>
    );
}

export default Home;