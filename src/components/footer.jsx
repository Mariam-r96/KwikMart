import React from "react";
import { Footer } from "flowbite-react";

const FooterCustom = () =>{
    return(
        <Footer>
            <div className="bg-secondary-900 mt-14 rounded-none flex flex-col w-full p-5">
                <div className="w-full text-center container text-white">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand href={'/'}>
                        <div className="flex items-center">
                            <span className="material-symbols-rounded text-ternary-500 mr-2 text-4xl font-medium">shopping_cart</span>
                            <span className="text-white font-bold text-xl">KwikMart</span>
                        </div>
                    </Footer.Brand>
                    <Footer.LinkGroup>
                        <Footer.Link className="text-white" href="#">
                        About
                        </Footer.Link>
                        <Footer.Link  className="text-white"href="#">
                        Privacy Policy
                        </Footer.Link>
                        <Footer.Link className="text-white" href="#">
                        Licensing
                        </Footer.Link>
                        <Footer.Link className="text-white" href="#">
                        Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                
                </div>
                <Footer.Divider className="border-gray-300/60" />
                <Footer.Copyright
                className="text-gray-50 font-sans"
                href="#"
                by="KwikMart"
                year={2023}
                />
            </div>
        </Footer>
    );
}

export default FooterCustom;