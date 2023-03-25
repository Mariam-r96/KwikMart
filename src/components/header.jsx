import React , {useEffect , useState} from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from '@/styles/header.module.scss';
import axios from "axios";

const Header = () => {

  const [categories , setCategories ] = useState([0]);
  const router = useRouter();

  useEffect(() => {
    axios.get(`https://shodai.herokuapp.com/api/products/categories`)
    .then( response => {
      setCategories(response.data);
    })
    .catch( error =>{
      console.log(error);
    });
  }, []);

  const category_options = categories.map(category => {
    return category.title;
  })

  category_options.unshift({value : 'All  categories' , label : 'All categories' });
  
  const menuItems = [
    {
      title : "Home",
      url :'/'
    },
    {
      title : "Wishlist",
      url :'/'
    },
    {
      title : "My Account",
      url :'/'
    },
    {
      title : "Contact",
      url :'/'
    },
  ];

  const onDropdownSelect = (e) => {
    const str = e.value.replace(/\s/g, '');
    router.push(`/category/${str}`);
  }

  return(
    <header className="container border-gray-100 border-b">
    <div className="flex items-center py-6 border-gray-100 border-b">
        <a href="#" className="flex items-center">
            <span className="material-symbols-rounded text-ternary-400 mr-2 text-4xl font-medium">shopping_cart</span>
            <span className="text-primary-900 font-bold text-xl">KwikMart</span>
        </a>
        <div className="relative ml-auto mr-5">
            <input className="bg-gray-100 p-3 rounded-md w-96" type="text" placeholder="Search"/>
            <span className="material-symbols-rounded absolute right-4 top-1/2 -translate-y-1/2">search</span>
        </div>
        <span className="material-symbols-rounded cursor-pointer text-3xl mr-5">account_circle</span>
        <div className="cart relative cursor-pointer">
            <span className="material-symbols-rounded text-red-600 p-2 bg-red-200 rounded-full">local_mall</span>
            <span className="rounded-full bg-red-600 text-white text-[12px] text-center w-5 h-5 leading-5 absolute -top-2 -right-1">0</span>
        </div>
    </div>
    <div className="py-6 flex justify-between items-center">
      <Dropdown 
      options={category_options}  
      value={category_options[0]} 
      onChange={e => onDropdownSelect(e)}
      placeholder="Categories"
      arrowClosed={<span className={`${styles.dropdown_arrow} ${styles.arrow_down}`}/>}
      arrowOpen={<span className={`${styles.dropdown_arrow} ${styles.arrow_up}`}/>}
      controlClassName={styles.custom_dropdown} 
      menuClassName={styles.dropdown_menu} />

      <nav>
        <ul className="flex items-center">
          {menuItems && menuItems.length > 0 && menuItems.map( (item , key ) => {
            return(
              <li key={key} className="py-2 px-4 rounded-3xl hover:bg-secondary-100 hover:text-secondary-500 mr-4 last-of-type:mr-0">
                <Link href={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
    </header>
  );
}

export default Header ;