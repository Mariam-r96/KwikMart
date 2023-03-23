import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from '@/styles/header.module.css';

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
     type: 'group', name: 'group1', items: [
       { value: 'three', label: 'Three', className: 'myOptionClassName' },
       { value: 'four', label: 'Four' }
     ]
    },
    {
     type: 'group', name: 'group2', items: [
       { value: 'five', label: 'Five' },
       { value: 'six', label: 'Six' }
     ]
    }
  ];

const defaultOption = options[0];

const Header = () => {
    return(
       <header className="container">
        <div className="flex items-center py-6 border-b border-gray-100">
            <a href="#" className="flex items-center">
                <span class="material-symbols-rounded text-ternary-400 mr-2 text-4xl font-medium">shopping_cart</span>
                <span className="text-primary-900 font-bold text-xl">KwikMart</span>
            </a>
            <div className="relative ml-auto mr-5">
                <input className="bg-gray-100 p-3 rounded-md w-96" type="text" placeholder="Search"/>
                <span class="material-symbols-rounded absolute right-4 top-1/2 -translate-y-1/2">search</span>
            </div>
            <span class="material-symbols-rounded cursor-pointer text-3xl mr-5">account_circle</span>
            <div className="cart relative cursor-pointer">
                <span class="material-symbols-rounded text-red-600 p-2 bg-red-200 rounded-full">local_mall</span>
                <span className="rounded-full bg-red-600 text-white text-[12px] text-center w-5 h-5 leading-5 absolute -top-2 -right-1">0</span>
            </div>
        </div>
        <div className="py-6">
        <Dropdown 
        options={options}  
        value={defaultOption} 
        placeholder="Select an option"
        controlClassName={styles.custom_dropdown} />;
        </div>
       </header>
    );
}

export default Header ;