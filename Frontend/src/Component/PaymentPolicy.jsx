import React from "react";

const PaymentPolicy = () => {
  return (
    <>
      <div className="h-full">
        {/* Section for Return Information */}
        <div className="flex flex-col flex-wrap justify-start gap-8">
          <h1 className="text-4xl font-Inter font-semibold mt-6 w-full  md:w-1/2 pr-14 text-center">
            Payment Policy
          </h1>
          <ol className="list-decimal w-2/3 mx-auto">
            <li className="text-2xl text-gray-700 mb-4">Cashfree Checkout.</li>
            <li className="text-2xl text-gray-700 mb-4">
              You can pay through UPI, credit card and as well as debit card as
              per your choice.
            </li>
            <li className="text-2xl text-gray-700">
              Tax Invoice would be attached and sent with the item.
            </li>
          </ol>
        </div>

        {/* Section for Refund / Cancellation */}
        <div className="flex flex-col flex-wrap  mt-8 px-12">
          <h1 className="text-4xl font-Inter font-semibold mt-4 w-full md:w-1/2 text-center">
            Legal / Disclaimer
          </h1>
          <p className="w-full md:w-2/3 mx-auto mt-6  text-gray-700 text-lg">
            Seller hereby expressly disclaims all warranties either expressed or
            implied warranty of merchantability or fitness for a particular
            purpose. This disclaimer by the seller in no way affects the terms
            of the manufacturer’s warranty if any. Title to goods herein being
            purchased is retained by the seller until goods are paid for in full
            by the purchaser and at that time title passes to purchaser. If
            goods herein being purchased are being purchased for purposes of
            export, purchaser must obtain from the Federal Government certain
            export documentation before shipping to a foreign country. In
            addition, manufacturers’ warranties for exported goods may vary or
            even be null and void. If you have questions, please inquire. Any
            and all liability is only for the products purchased.
          </p>
        </div>

        <div className="flex flex-col flex-wrap  mt-8">
          <h1 className="text-4xl font-Inter font-semibold mt-4 w-full md:w-1/2 pr-20 text-center">
            Basic terms
          </h1>
          <p className="w-full md:w-2/3 mx-auto mt-6  text-gray-700 text-lg px-12">
            For all prices and products, we reserve the right to make
            adjustments due to errors, changing market conditions, product
            discontinuation or typographical errors in advertisements. Allegro
            is not responsible for manufacturer price changes, which may occur
            at any time without notice. The product images on this web site may
            not exactly reflect the product you receive. Design revisions and
            color variations may exist. Please keep all packing material and
            documentation in the event that your equipment has to be serviced or
            returned. Before returning any product, you must obtain a Return
            Merchandise Authorization (RMA) number. NO returns, of any type,
            will be accepted without an RMA number. Please have the following
            information on hand when calling for an RMA number: customer name,
            invoice number, serial number and the nature of the problem
          </p>
        </div>

        <div className="flex flex-col flex-wrap justify-start gap-8">
          <h1 className="text-4xl font-Inter font-semibold mt-6 w-full  md:w-1/2 pr-14 text-center">
            Payment Policy
          </h1>
          <ol className="list-decimal w-2/3 mx-auto">
            <li className="text-xl text-gray-700">
              Members must be at least 18 years of age.
            </li>
            <li className="text-xl text-gray-700">
              Members are granted a time-limited, non-exclusive, revocable,
              nontransferable, and non-sublicensable right to access that
              portion of the online course corresponding to the purchase.
            </li>
            <li className="text-xl text-gray-700">
              The portion of the online course corresponding to the purchase
              will be available to the Member as long as the course is
              maintained by the Company, which will be a minimum of one year
              after Member’s purchase.
            </li>
            <li className="text-xl text-gray-700"> 
              The videos in the course are provided as a video stream and are
              not downloadable.
            </li>
            <li className="text-xl text-gray-700"> 
              By agreeing to grant such access, the Company does not obligate
              itself to maintain the course, or to maintain it in its present
              form.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default PaymentPolicy;
