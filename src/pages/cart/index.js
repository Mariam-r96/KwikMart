import { useEffect, useState } from "react";
import Link from "next/link";
import BreadCrumb from "../../components/breadcrumb";
import { Table } from "flowbite-react";
import Dropdown from "react-dropdown";
import axios from "axios";

const Cart = (props) => {
  const {
    cart,
    subTotal,
    incrementQuantity,
    decrementQuantity,
    deleteCartItem,
  } = props;

//   useEffect(() => {
//     axios.post(`https://shodai.herokuapp.com/api/orders` , {cart})
//     .then( response => {
//       console.log(response);
//     })
//     .catch( error =>{
//       console.log(error);
//     });
//   }, []);

  const [expand, setExpand] = useState(false);

  const options = [
    'Mirpur', 'Dhanmondi', 'Gulshan' , 'Bashundhara' , 'Banani'
  ];

  return (
    <div className="container mt-5 px-4">
      <BreadCrumb />
      {cart && cart.length > 0 ? (
        <div className="grid grid-cols-12 mt-8 gap-8">
            <div className="col-span-full md:col-span-8">
                <Table>
                <Table.Head>
                    <Table.HeadCell>Product</Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">Price (qty : 1)</Table.HeadCell>
                    <Table.HeadCell>Quantity</Table.HeadCell>
                    <Table.HeadCell>Subtotal</Table.HeadCell>
                    <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {cart.map((item, key) => {
                    return (
                        <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center">
                            <div className="h-full w-10 mr-4">
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                            />
                            </div>
                            <h5 className="font-medium text-sm">{item.title}</h5>
                        </Table.Cell>
                        <Table.Cell>${item.price}</Table.Cell>
                        <Table.Cell>
                            <div className="flex items-center">
                            <button
                                onClick={() => decrementQuantity(item)}
                                className={`bg-gray-300 text-gray-900 w-6 h-6 text-md rounded-full`}
                            >
                                -
                            </button>
                            <span className="px-3 text-gray-900">{item.qty}</span>
                            <button
                                onClick={() => incrementQuantity(item)}
                                className={`bg-gray-300 text-gray-900 w-6 h-6 text-md rounded-full`}
                            >
                                +
                            </button>
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <span className="font-medium">
                            ${(item.price * item.qty).toFixed(2)}
                            </span>
                        </Table.Cell>
                        <Table.Cell>
                            <span
                            onClick={() => deleteCartItem(item)}
                            className="material-icons text-sm font-bold text-red-600 cursor-pointer"
                            >
                            close
                            </span>
                        </Table.Cell>
                        </Table.Row>
                    );
                    })}
                </Table.Body>
                </Table>
                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                <div className="flex items-center justify-between md:justify-start">
                    <input
                    type="text"
                    className="bg-gray-100 border-0 rounded-md font-sans w-3/5 md:w-auto"
                    placeholder="Coupon code"
                    />
                    <button className="bg-primary-900 px-5 py-2 text-white rounded-md ml-3 text-sm">
                    Apply Coupon
                    </button>
                </div>
                <button className="bg-primary-900 px-5 py-2 text-white rounded-md ml-3 text-sm mt-4 w-full md:mt-0 md:w-auto">
                    Remove All
                </button>
                </div>
            </div>
            <div className="col-span-full md:col-span-4">
                <div className="border border-gray-200 rounded-md p-4">
                    <div className="py-2 border-b border-gray-200 text-lg">Cart Totals</div>
                    <div className="py-3 border-b border-gray-200 flex justify-between items-center">
                        <span className="font-medium">Subtotal</span>
                        <span className="font-medium"> ${subTotal.toFixed(2)}</span>
                    </div>
                    <div className="py-3 border-b border-gray-200 flex justify-between items-center">
                        <span className="font-medium">Shipping</span>
                        <div className="flex flex-col text-right w-1/2">
                            <span>$25</span>
                            <span 
                            onClick={e => setExpand(!expand)}
                            className="text-secondary-400 text-sm font-medium cursor-pointer hover:underline">Change address</span>
                            <div className={`${expand ? 'max-h-[277px]' : 'max-h-0'} overflow-hidden mt-5 transition-all ease-linear duration-500`}>
                                <Dropdown 
                                options={options} 
                                value={options[0]} 
                                className="cart-custom-dropdown"
                                placeholder="Select your region" />
                                <input className="w-full mt-3 bg-gray-200 border-0 rounded-md" type="text" placeholder="Address"/>
                                <button className="bg-primary-900 mt-4 px-5 py-2 text-white rounded-md text-sm">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 border-b border-gray-200 flex justify-between items-center">
                        <span className="font-medium">Total</span>
                        <span className="font-medium text-lg"> ${(subTotal+ 25).toFixed(2)}</span>
                    </div>
                    <Link href={`/checkout`} 
                    className="bg-ternary-400 block text-center mt-4 px-5 py-3 text-primary-900 font-medium rounded-md text-sm">
                        Proceed to checkout
                    </Link>
                </div>
            </div>
        </div>
      ) 
      : 
        <div className="p-10 flex justify-center flex-col items-center">
            <span className="material-icons bg-gray-300 rounded-full px-8 py-7 text-4xl text-red-600">
            local_mall
            </span>
            <h5 className="font-medium mt-4 text-xl font-sans uppercase text-red-600">
            Your cart is currently empty
            </h5>
            <Link href={`/`} 
            className="bg-primary-900 px-6 py-3 rounded-3xl text-white mt-5">Return to Shop</Link>
        </div>
      }
    </div>
  );
};

export default Cart;
