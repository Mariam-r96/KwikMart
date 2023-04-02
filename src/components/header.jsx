import React , {useEffect , useState, createContext} from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import 'react-dropdown/style.css';
import styles from '@/styles/header.module.scss';
import axios from "axios";

const Header = () => {
  const [categories , setCategories ] = useState([0]);
  const [products , setProducts ] = useState([0]);
  const [filteredProducts , setFilteredProducts ] = useState([]);
  const [showList , setShowList] = useState(false);
  const router = useRouter();

  useEffect(() => {
    axios.get(`https://shodai.herokuapp.com/api/products/categories`)
    .then( response => {
      setCategories(response.data);
    })
    .catch( error =>{
      console.log(error);
    });

    axios.get(`https://shodai.herokuapp.com/api/products`)
    .then( response => {
      setProducts(response.data);
    })
    .catch( error =>{
      console.log(error);
    });
  }, []);

  // category_options.unshift({value : 'All  categories' , label : 'All categories' });
  
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

  const onDropdownSelect = (title, id) => {
    const str = title.replace(/\s/g, '-');
    router.push(`/category/${str}?id=${id}`,`/category/${str}`);
  }

  const filterSearch = (e) => {
    if(e.target.value == ''){
      setFilteredProducts([]);
    } else {
      const filtered_products = products.filter(product => {
        if(product) {
            if(product.title.toLowerCase().includes(e.target.value.toLowerCase())){
                return product;
            } else {
              return 0;
            }
        }
      });
      setFilteredProducts(filtered_products);
    }
  }

  const selectFilteredItem = (title, id) => {
    const str = title.replace(/\s/g, '-');
    router.push({ pathname: 'search', query: { q: str , id: id } }, `/search/?q=${str}`);
  }

  const handleBlur = (e) => {
    window.addEventListener("click" , event => {
      if(event.target.classList.contains("search-list-item") || event.target == e.target){
      } else {
        closeFilteredList();
      }
     })
  }
  
  const closeFilteredList= () =>{
    setShowList(false);
   }

  return(
    <header className="container border-gray-100 border-b">
    <div className="flex items-center py-6 border-gray-100 border-b">
        <Link href={`/`} className="flex items-center">
            <span className="material-symbols-rounded text-ternary-500 mr-2 text-4xl font-medium">shopping_cart</span>
            <span className="text-primary-900 font-bold text-xl">KwikMart</span>
        </Link>
        <div className="relative ml-auto mr-5">
            <input 
            className="bg-gray-100 p-3 rounded-md w-96 header-search-field" 
            onChange={e => filterSearch(e)} 
            onFocus={() => setShowList(true)}
            onBlur={(e) => handleBlur(e)}
            type="text" 
            placeholder="Search"/>
            <span className="material-symbols-rounded absolute right-4 top-1/2 -translate-y-1/2">search</span>

            <ul className={`${showList && filteredProducts.length > 0 ? '' : 'hidden'} absolute w-full bg-white shadow-md top-14 max-h-64 overflow-y-auto z-10`}>
              {filteredProducts && filteredProducts.length > 0 && filteredProducts.map((filteredItem , key) => {
                return(
                  <li 
                  key={key} 
                  className="search-list-item px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-secondary-50"
                  onClick={e => selectFilteredItem(filteredItem.title, filteredItem._id)}>
                    <div className="flex items-center pointer-events-none">
                      <div className="w-12 mr-4">
                        <img className="w-full h-full object-cover" src={filteredItem.image} />
                      </div>
                       <p>{filteredItem.title}</p> 
                    </div>
                  </li>
                )
              })}
            </ul>
        </div>
        <span className="material-symbols-rounded cursor-pointer text-3xl mr-5">account_circle</span>
        <div className="cart relative cursor-pointer">
            <span className="material-symbols-rounded text-red-600 p-2 bg-red-200 rounded-full">local_mall</span>
            <span className="rounded-full bg-red-600 text-white text-[12px] text-center w-5 h-5 leading-5 absolute -top-2 -right-1">0</span>
        </div>
    </div>
    <div className="py-6 flex justify-between items-center">
      <Dropdown
      className={styles.dropdown_menu} 
      
        label="Select Category"
      >
        {categories.length > 0 && categories.map((option, key) => {
          return(
            <Dropdown.Item key={key} onClick={e => onDropdownSelect(option.title, option._id)}>
              {option.title}
            </Dropdown.Item>
          )
        })}
      </Dropdown>

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