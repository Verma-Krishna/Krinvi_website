import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';

export default function Cart() {
  return (
    <>

<div className="bg-[#F7F7F7] flex justify-center py-2">
  <div className="bg-white flex flex-col gap-6 px-6 md:px-12 lg:px-20 pt-16 pb-16 w-full lg:w-3/4">
    <h1 className="text-3xl sm:text-4xl font-medium text-gray-800">Cart</h1>
    <table className="border border-gray-200 w-full">
      <thead>
        <tr className="border border-gray-300">
          <th></th> 
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border border-gray-200">
          <td className="pl-4 flex items-center text-gray-400 font-normal ">
            <HighlightOffSharpIcon /> 
            <img src="dummy.webp" className="w-12 sm:w-16 ml-6 sm:ml-10" alt="" />
          </td>
          <td>Ganpati t-shirts - S, White</td>
          <td>&#8377; 497.00</td>
          <td className="border border-dotted border-gray-200 py-1 px-4 sm:py-2 sm:px-6 text-center">2</td>
          <td className="text-right pr-10 sm:pr-20">&#8377; 994.00</td>
        </tr>
        <tr>
          <td className="py-2">
            <input 
              type="text" 
              placeholder="Coupon code" 
              className="py-2 pl-1 border border-gray-200 focus:outline-none focus:ring-0 w-full sm:w-auto"
            />
          </td>
          <td className="py-2" colSpan={3}>
            <button className="w-full sm:w-auto px-4 sm:px-8 bg-[#18D9E4] border font-medium border-black py-2 hover:bg-black hover:text-white">
              APPLY COUPON
            </button>
          </td>
          <td className="py-2 blur-[1px]" colSpan={4}>
            <button className="w-full sm:w-auto px-4 sm:px-8 bg-[#18D9E4] font-medium border border-black py-2 hover:bg-black hover:text-white truncate">
              UPDATE CART
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div className="flex flex-col lg:flex-row lg:justify-end">
      <div className="w-full lg:w-1/2 border border-gray-200">
        <h1 className="text-left border-b border-gray-200 py-4 font-medium text-gray-800 text-xl sm:text-2xl pl-6 sm:pl-10 mb-4">Cart Totals</h1>
        <div className="border-b border-gray-200 flex justify-between mx-4 sm:mx-10 px-3 mb-4 pb-2">
          <h1 className="text-gray-600">Subtotal</h1>
          <h1 className="text-gray-600">&#8377; 994.00</h1>
        </div>
        <div className="flex justify-between mx-4 sm:mx-10 px-3">
          <h1 className="text-gray-600">Shipping</h1>
          <h1 className="text-gray-600">Free shipping to <strong className="text-black">Uttar Pradesh</strong>.</h1>
        </div>
        <h1 className="text-gray-600 border-b border-gray-200 mb-4 text-right mx-4 sm:mx-10 px-3 pb-2">Change address</h1>
        <div className="border-b border-gray-200 flex justify-between mx-4 sm:mx-10 px-3 mb-4 pb-2">
          <h1 className="text-gray-600">Total</h1>
          <h1 className="text-gray-600">&#8377; 994.00</h1>
        </div>
        <button className="w-4/5 ml-24 lg:ml-12 my-4 bg-[#18D9E4] border border-black py-4 text-lg sm:text-xl font-medium hover:bg-black hover:text-white">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}




// <div className="bg-gray-100 min-h-screen w-full pt-28">
//         <div className="h-3/5 mx-4 md:mx-24 bg-white px-6 sm:px-12 md:px-24 lg:px-32 flex flex-col justify-center gap-6 py-12">
//           <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium'>Cart</h1>
          
//           <div className="bg-gray-100 border-t-2 border-[#6A5950] py-3 flex items-center gap-4 md:gap-6">
//             <CheckBoxOutlineBlankIcon sx={{marginLeft:"10px",color:"#6A5950"}} />
//             <h1 className='text-[#6A5950] text-sm sm:text-base md:text-lg'>Your Cart is currently empty.</h1>
//           </div>
          
//           <button className='bg-[#18D9E4] border border-black font-medium w-3/5  xl:w-1/4 truncate font-Inter py-2   text-sm sm:text-base hover:bg-black hover:text-white'>
//             RETURN TO SHOP
//           </button>
//         </div>
//       </div>