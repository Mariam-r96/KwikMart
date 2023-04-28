import { Table } from "flowbite-react";
import BreadCrumb from "../../../components/breadcrumb"

const OrderReceived = (props) => {
    const {
        cart,
        subTotal,
      } = props;

    return(
        <div className="container px-6 mt-5">
            <BreadCrumb/>

            <div className="border-2 border-green-400 border-dashed p-8 mt-7 text-center">
               <span className="text-green-400 font-semibold text-xl">Thank You! Your order has been received.</span>
            </div>
            
            <div className="border-rounded my-5 p-5 shadow-lg bg-white grid grid-cols-4">
                <div>
                    <p className="text-sm">Order Number</p>
                    <p className="font-semibold">1234</p>
                </div>
                <div>
                    <p className="text-sm">Date</p>
                    <p className="font-semibold">1234</p>
                </div>
                <div>
                    <p className="text-sm">Total</p>
                    <p className="font-semibold">1234</p>
                </div>
                <div>
                    <p className="text-sm">Payment Method</p>
                    <p className="font-semibold">Cash on delivery</p>
                </div>
            </div>

            <h2 className="mt-10 mb-4 font-semibold">ORDER DETAILS</h2>
            <Table>
            <Table.Body className="divide-y">
                <Table.Row >
                        <Table.Cell className="border-r border-gray-200 font-semibold text-gray-800">Product</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-semibold text-gray-800">Total</Table.Cell>
                </Table.Row>
                    {cart.map((item, key) => {
                    return (
                        <Table.Row key={key} className="bg-white">
                            <Table.Cell className="border-r border-gray-200 font-medium text-gray-600 dark:text-white flex items-center">
                                <h5 className="font-medium text-sm">{item.title} x {item.qty}</h5>
                            </Table.Cell>
                            <Table.Cell>
                                <span className="font-medium">
                                ${(item.price * item.qty).toFixed(2)}
                                </span>
                            </Table.Cell>
                        </Table.Row>
                    );
                    })}
                    <Table.Row >
                        <Table.Cell className="border-r border-gray-200 font-semibold text-gray-800">Subtotal</Table.Cell>
                        <Table.Cell className="whitespace-nowrap text-gray-600">${subTotal.toFixed(2)}</Table.Cell>
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell className="border-r border-gray-200 font-semibold text-gray-800">Shipping cost</Table.Cell>
                        <Table.Cell className="whitespace-nowrap text-gray-600">$25</Table.Cell>
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell className="border-r border-gray-200 font-semibold text-gray-800">Payment method</Table.Cell>
                        <Table.Cell className="whitespace-nowrap text-gray-600">Cash</Table.Cell>
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell className="border-r border-gray-200 font-semibold text-gray-800">Total</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-semibold text-gray-800">${(subTotal+25).toFixed(2)}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

        </div>
    )
}

export default OrderReceived;