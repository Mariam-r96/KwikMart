import Breadcrumb from "../../components/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/userSlice";
import { useEffect } from "react";

const MyAccount = (props) => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state)=>state.user.user);

    useEffect(() => {
        dispatch(getUser());
    }, []);

  return (
    <div className="container px-4 mt-5">
      <Breadcrumb />
      {userInfo ? 
        <div className="grid grid-cols-12 items-center mt-8">
            <div className="col-span-4 text-center">
              <span className="material-icons text-[224px] text-primary-800">account_circle</span>
              <h5 className="font-semibold text-primary-900">{userInfo.username}</h5>
            </div>
            <div className="col-span-8">
              <div className="border border-gray-200 rounded-md p-6">
                <h3>Name : {userInfo.firstName} {userInfo.lastName}</h3>
                <h3 className="my-8">Email : {userInfo.email}</h3>
              </div>
            </div>
          </div>
      : <h2 className="bg-red-200 border-4 border-dashed border-red-400 p-10 mt-10 text-red-800 text-xl">You need to login first!</h2>}
    </div>

  );
};

export default MyAccount;
