import Link from "next/link";
import BreadCrumb from "../../components/breadcrumb";
import { Table } from "flowbite-react";

const Cart = (props) => {
  const {
    cart,
    subTotal,
    incrementQuantity,
    decrementQuantity,
    deleteCartItem,
  } = props;

  return (
    <div className="container mt-5">
      <BreadCrumb />
      {cart && cart.length > 0 ? (
        <div className="grid grid-cols-12 mt-8 gap-8">
            <div className="col-span-8">
                <Table>
                <Table.Head>
                    <Table.HeadCell>Product</Table.HeadCell>
                    <Table.HeadCell>Price (qty : 1)</Table.HeadCell>
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
                <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                    <input
                    type="text"
                    className="bg-gray-100 border-0 rounded-md font-sans"
                    placeholder="Coupon code"
                    />
                    <button className="bg-primary-900 px-5 py-2 text-white rounded-md ml-3 text-sm">
                    Apply Coupon
                    </button>
                </div>
                <button className="bg-primary-900 px-5 py-2 text-white rounded-md ml-3 text-sm">
                    Remove All
                </button>
                </div>
            </div>
            <div className="col-span-4">
                <div className="border border-gray-200 rounded-md px-3">
                    <div className="py-2 border-b border-gray-200 text-lg">Cart Totals</div>
                    <div className="py-3 border-b border-gray-200 flex justify-between items-center">
                        <span className="font-medium">Subtotal</span>
                        <span className="font-medium"> ${subTotal.toFixed(2)}</span>
                    </div>
                    <div className="py-3 border-b border-gray-200 flex justify-between items-center">
                        <span className="font-medium">Shipping</span>
                        <div className="flex flex-col text-right">
                            <span>$25</span>
                            <span className="text-secondary-400 text-sm font-medium cursor-pointer hover:underline">Change address</span>
                            <div>
                                
                            </div>
                        </div>
                    </div>
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
