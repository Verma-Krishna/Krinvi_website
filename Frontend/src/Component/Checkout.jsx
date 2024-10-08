import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Selectorstates from "./Selectorstates";

export default function Checkout() {
  return (
    <>
      <div className=" mb-6 bg-[#F7F7F7] flex justify-center">
        <div className=" bg-white mt-4 mb-4 px-4 pt-2 pb-20 xl:px-32 xl:pt-16 w-3/4">
          <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
          <div className=" bg-gray-100 border-t-[3px] border-[#6A5950] py-3 flex items-center gap-4 md:gap-6">
            <CheckBoxOutlineBlankIcon
              sx={{ marginLeft: "10px", color: "#6A5950" }}
            />
            <h1 className="text-[#6A5950] text-sm sm:text-base md:text-lg">
              Have a coupon? Click here to enter your code
            </h1>
          </div>
          <div className="flex gap-6 flex-col xl:flex-row xl:gap-14">
            <div className="flex flex-wrap flex-col w-full xl:w-3/4">
              <h1 className="border-b border-gray-300 mt-6 text-xl font-medium pb-2 mb-5">Billing Details</h1>
              <div className="flex mb-4 gap-10">
              <div className="w-1/2">
              <h1 className="text-base font-medium">First Name <span className="text-red-600 text-xl">*</span> </h1> 
              <input type="text" className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted" />
              </div>
              <div className="w-1/2">
              <h1 className="text-base font-medium">Last Name<span className="text-red-600 text-xl">*</span></h1>
              <input type="text" className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted" />
              </div> 
              </div>
              <label className="text-base font-medium" htmlFor="company_name">Company name (optional)</label>
              <input type="text" className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted mb-4" />
              <label className="text-base font-medium" htmlFor="country">Country / Region <span className="text-red-600 text-xl">*</span></label>
              <select className="block w-full px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-3">
                  <option value="india">India</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="australia">Australia</option>
                  <option value="usa">United States</option>
                  <option value="japan">Japan</option>
                  <option value="china">China</option>
               </select>
              <label className="text-base font-medium" htmlFor="street">Street address <span className="text-red-600 text-xl">*</span></label>
              <input type="text" className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted mb-3" placeholder="House number and street name" />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
              className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted mb-4" />
              <label className="text-base font-medium" htmlFor="town/city">
                {" "}
                Town / City <span className="text-red-600 text-xl">*</span>
              </label>
              <input type="text" className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted mb-4"/>
              <label className="text-base font-medium" htmlFor="state">
                State <span className="text-red-600 text-xl">*</span>
              </label>
              <Selectorstates/>
              <label className="text-base font-medium" htmlFor="pin">
                Pin Code <span className="text-red-600 text-xl">*</span>
              </label>
              <input type="text" className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted mb-4"/>
              <label className="text-base font-medium" htmlFor="phone">
                Phone <span className="text-red-600 text-xl">*</span>
              </label>
              <input type="text" className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted mb-4"/>
              <label className="text-base font-medium" htmlFor="Email">
                Email Address <span className="text-red-600 text-xl">*</span>
              </label>
              <input type="text" className="w-full border py-2 border  border-gray-300 focus:outline-none focus:border-dotted mb-3"/>
               <div className="flex gap-4 mt-2">
               <input type="checkbox" />
               <label className="text-base font-medium" htmlFor="">Create an account?</label>
               </div>
              <div className="mt-3 flex gap-3 border-b border-gray-300 pb-2 mb-4">
              <input type="checkbox" />
              <label className="text-xl font-medium" htmlFor="" >Ship to a different address?</label>
              </div>
              <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="order-notes">Order notes (optional)</label>
              <textarea className="w-full border border  border-gray-300 focus:outline-none focus:border-dotted"
                rows={3}
                placeholder="Notes about your order, e.g. special notes for delivery. "
              ></textarea>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-full xl:w-1/2 px-4 mt-4 border-2 border-gray-300 h-full pt-2 pb-6">
              <h1 className="text-2xl mt-2 font-medium  mb-6">Your order</h1>
              <div className="flex justify-between border-b border-gray-300 pb-2 mb-3">
                <h1 className="text-lg font-medium text-gray-800">Product</h1>
                <h1 className="text-lg font-medium text-gray-800">Subtotal</h1>
              </div>
              <div className="flex justify-between  gap-2 border-b-2 border-gray-300 pb-2 mb-2">
                <h1 className=" text-lg w-2/5 text-gray-700">Baby Goku Printed T-shirts - S</h1>
                <h1 className="my-auto text-xl ">x 1</h1>
                <h3 className="text-lg truncate "><span>&#8377;</span> 597.00</h3>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                <h3 className="text-lg text-gray-700">Subtotal</h3>
                <h3 className="text-lg"> &#8377; 597.00</h3>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                <h3 className="text-lg">Shipping</h3>
                <h3 className="text-lg">Free shiping</h3>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2 mb-8">
                <h3 className="text-lg">Total</h3>
                <h3 className="text-lg">&#8377; 597.00</h3>
              </div>
              <div className="">
              <input type="radio" className="mr-6"/>
              <label className="text-lg text-gray-700" htmlFor="cod">Cash on delivery</label>
              </div>
              <h3 className="mt-6 text-gray-700 mb-6">Pay with cash upon delivery</h3>
              <div className="flex  items-center mb-6">
              <input type="radio" className="mr-1"/>
              <label className="text-base font-medium mr-2" htmlFor="payment"> CCAvenue</label>
              <img src="cavenue.png" alt="" />
              </div>
              <h5 className="text-lg text-gray-700 mb-6">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </h5>
              <button className="bg-[#18D9E4] py-2 w-full  font-sans text-xl border border-black hover:bg-black hover:text-white">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
