import BreadCrumb from "@/components/breadcrumb";
import Login from "../../../components/login";

const LoginPage = (props) => {
    return(
        <div className="container mt-5 px-4">
            <BreadCrumb/>
            <div className="md:max-w-xl mx-auto p-12 border border-gray-200 rounded-md mt-8">
                <Login/>
            </div>
        </div>
    );
}

export default LoginPage;