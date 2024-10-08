import React from "react";
import { useSelector } from "react-redux";


export default function Innerhome() {
    const {loginuser} = useSelector((state) => state.login)
    console.log(loginuser)
  return (
    <>
      <div className="bg-[#F7F7F7] h-[90vh] flex justify-center items-center">
      <div className="bg-white h-3/4 pt-20 w-3/4 pl-20">
      <h1 className="text-3xl font-medium font-Inter mb-6">My account</h1>
      <div className="flex gap-6">
        <table className="border border-gray-300 w-1/3">
          <h1 className="border-b border-gray-300 pl-6 py-2 text-gray-600 text-lg font-light">Dashboard</h1>
          <h1 className="border-b border-gray-300 pl-6 py-2 text-gray-600 text-lg font-light ">Orders</h1>
          <h1 className="border-b border-gray-300 pl-6 py-2 text-gray-600 text-lg font-light ">Downloads</h1>
          <h1 className="border-b border-gray-300 pl-6 py-2 text-gray-600 text-lg font-light ">Addresses</h1>
          <h1 className="border-b border-gray-300 pl-6 py-2 text-gray-600 text-lg font-light ">Account Details</h1>
          <h1 className=" pl-6 py-2 text-gray-600 text-lg font-light ">Logout</h1>
        </table>
        <div className="">
          <h1 className="mb-4 text-lg font-light">
            Hello <strong>{loginuser.user.username}</strong> (not <strong>{loginuser.user.username}</strong>? Logout)
          </h1>
          <p className="w-3/4 font-light text-gray-600 text-lg">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
