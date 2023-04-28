import BreadCrumb from "../../components/breadcrumb";
import Link from "next/link";
import { Radio, Label, Select, Textarea } from "flowbite-react";

const Checkout = (props) => {
    const {
        cart,
        subTotal,
      } = props;

    return(
        <div className="container mt-5 px-4">
            <BreadCrumb/>
            <div className="grid grid-cols-12 mt-8 gap-8">
            <div className="col-span-full md:col-span-8">
            <div className="border border-gray-200 rounded-md px-8 py-6">
                <h2 className="pb-4 border-b border-gray-200 font-medium">BILLING DETAILS</h2>
                <div className="flex justify-between items-center gap-6 mt-5">
                    <div className="inline-block w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="first_name"
                            color="gray"
                            value="First Name"
                        />
                        </div>
                        <input
                        className="border-0 w-full bg-gray-100 rounded-md p-3 text-sm focus:border-0 focus:ring-gray-300 outline-gray-200"
                        id="first_name"
                        required={true}
                        color="gray"
                        />
                    </div>
                    <div className="inline-block w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="last_name"
                            color="gray"
                            value="Last Name"
                        />
                        </div>
                        <input
                        className="border-0 w-full bg-gray-100 rounded-md p-3 text-sm focus:border-0 focus:ring-gray-300 outline-gray-200"
                        id="last_name"
                        required={true}
                        color="gray"
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="company"
                            color="gray"
                            value="Company Name (optional)"
                        />
                        </div>
                        <input
                        className="border-0 w-full bg-gray-100 rounded-md p-3 text-sm focus:border-0 focus:ring-gray-300 outline-gray-200"
                        id="company"
                        color="gray"
                        />
                </div>
                <div className="mt-5">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="region"
                            color="gray"
                            value="Select your region"
                        />
                        </div>
                        <Select
                            id="region"
                            required={true}
                        >
                            <option>
                            Mirpur
                            </option>
                            <option>
                            Dhanmondi
                            </option>
                            <option>
                            Gulshan
                            </option>
                            <option>
                            Banani
                            </option>
                            <option>
                            bashundhara
                            </option>
                        </Select>
                </div>
                <div className="mt-5">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="address"
                            color="gray"
                            value="Street address"
                        />
                        </div>
                        <input
                        className="border-0 w-full bg-gray-100 rounded-md p-3 text-sm focus:border-0 focus:ring-gray-300 outline-gray-200"
                        id="address"
                        placeholder="House number and street name"
                        color="gray"
                        />
                </div>
                <div className="flex justify-between items-center gap-6 mt-5">
                    <div className="inline-block w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="phone"
                            color="gray"
                            value="Phone number"
                        />
                        </div>
                        <input
                        className="border-0 w-full bg-gray-100 rounded-md p-3 text-sm focus:border-0 focus:ring-gray-300 outline-gray-200"
                        id="phone"
                        type="tel"
                        required={true}
                        color="gray"
                        />
                    </div>
                    <div className="inline-block w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            color="gray"
                            value="Email address"
                        />
                        </div>
                        <input
                        className="border-0 w-full bg-gray-100 rounded-md p-3 text-sm focus:border-0 focus:ring-gray-300 outline-gray-200"
                        id="email"
                        type="email"
                        required={true}
                        color="gray"
                        />
                    </div>
                </div>
                <hr className="my-6"/>
                <div id="textarea" className="mt-8">
                    <div className="mb-2 block">
                        <Label
                        htmlFor="note"
                        value="Your message"
                        />
                    </div>
                    <Textarea
                        id="note"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        rows={4}
                    />
                </div>
            </div>
            </div>
            <div className="col-span-full md:col-span-4">
                <div className="border-2 border-secondary-800 rounded-md px-5 py-6">
                    <div className="py-2 border-b border-gray-200 text-lg">Your Order</div>
                    <div className="py-3 border-b border-gray-200 flex justify-between text-gray-600 text-sm font-medium">
                        <span>Product</span>
                        <span>Subtotal</span>
                    </div>
                    <div className="py-2 border-b border-gray-200">
                        <ul className="py-2">
                            {cart && cart.length>0 && cart.map((item, key)=>{
                                return(
                                    <li key={key} className="flex justify-between items-center mb-2 last-of-type:mb-0">
                                        <div className="max-w-[50%] text-sm text-gray-600">{item.title} <b>x {item.qty}</b></div>
                                        <div className="text-gray-700">${item.price}</div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="py-3 border-b border-gray-200 flex justify-between items-center text-gray-600">
                        <span className="font-medium">Subtotal</span>
                        <span className="font-medium"> ${subTotal.toFixed(2)}</span>
                    </div>
                    <div className="py-3 border-b border-gray-200 flex justify-between items-center text-gray-600">
                        <span className="font-medium">Shipping</span>
                        <div className="flex flex-col text-right w-1/2">
                            <span>$25</span>
                        </div>
                    </div>
                    <div className="py-3 border-b border-gray-200 flex justify-between items-center">
                        <span className="font-medium text-gray-600">Total</span>
                        <span className="font-medium text-lg"> ${(subTotal+ 25).toFixed(2)}</span>
                    </div>
                    <div className="py-5 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <Radio
                            id="cash"
                            name="payment"
                            value="cash"
                            defaultChecked={true}
                            />
                            <Label htmlFor="cash">
                                Cash On Delivery 
                            </Label>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <Radio
                            id="card"
                            name="payment"
                            value="card"
                            />
                            <Label htmlFor="card">
                                Card Payment
                            </Label>
                        </div>
                        <p className="text-[12px] text-gray-500 mt-4">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                    </div>
                    <Link href={`/checkout/order-received`} 
                    className="bg-ternary-400 block text-center mt-4 px-5 py-3 text-primary-900 font-medium rounded-md text-sm">
                        Place Order
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Checkout;