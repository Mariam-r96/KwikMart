import React , {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";


const ProductAd = (props) => {
    const {alignContent , title, subtitle, apiCategoryIndex , bgImg} = props;
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

      axios.get(`https://shodai.herokuapp.com/api/products/categories`)
      .then( response => {
        setCategories(response.data);
      })
      .catch( error =>{
        console.log(error);
      });
    }, []);

    const advertisement_category= categories[apiCategoryIndex] ? categories[apiCategoryIndex] : '';
    const category_name = advertisement_category ? advertisement_category.title.replace(/\s/g, '-').toLowerCase().replace(/&/g, 'and') : '';

    return(
        <Link 
        href={{
            pathname: `/category/${category_name}`,
            query: {
                id: `${advertisement_category._id}`
            },
          }}
          as={`/category/${category_name}`}
        
        style = {{backgroundImage : `url(${bgImg})`}}
        className={`flex 
        relative
        ${alignContent == 'left' ? 'justify-start' : ''}
        ${alignContent == 'right' ? 'justify-end' : ''}
        ${alignContent == 'center' ? 'justify-center' : ''}
        rounded-lg
        bg-cover bg-no-repeat 
        p-8 lg:p-9
        min-h-[300px] lg:min-h-[400px]
        before:content-['']
        before:absolute
        before:rounded-lg
        before:h-full
        before:w-full
        before:inset-0
        ${alignContent == 'left' || 'center' ? ' before:bg-gradient-to-l from-gray-50/10 to-black/60' : ' before:bg-gradient-to-r from-gray-50/10 to-black/60'}
        `}>
            <div className="text-content lg:max-w-[80%] text-white relative">
                <h3 className="font-bold  text-2xl font-sans">{title}</h3>
                <p className="mt-4">{subtitle}</p>
                <button className="p-3 rounded-lg text-white mt-10">Shop Now</button>
            </div>
        </Link>
    );
}

export default ProductAd;