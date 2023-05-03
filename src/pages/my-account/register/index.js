import BreadCrumb from "@/components/breadcrumb";
import SignUp from "../../../components/signup";

const Register = (props) => {
    return(
        <div className="container mt-5 px-4">
            <BreadCrumb/>
            <div className="md:max-w-xl mx-auto p-12 border border-gray-200 rounded-md mt-8">
                <SignUp/>
            </div>
        </div>
    );
}

export default Register;