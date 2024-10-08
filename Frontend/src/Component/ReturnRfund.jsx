const ReturnRefund = () => {
    return (
      <>
        <div className="h-full">
          {/* Section for Return Information */}
          <div className="flex flex-wrap justify-start items-center">
            <h1 className="text-4xl font-Inter font-semibold mt-4 w-full md:w-3/6 pr-7 text-center">
              Return
            </h1>
            <p className="w-full px-4 md:w-3/5 mt-4 text-gray-700 text-lg mx-auto text-center md:text-left">
              We will gladly replace or accept returns if the product is damaged,
              defective, or if you receive the wrong items. Products are only
              eligible for return within 5 days of delivery.
            </p>
            <p className="w-full px-4 md:w-3/5 mt-4 text-gray-700 text-lg mx-auto text-center md:text-left">
              We do not offer refunds. However, we guarantee replacements in case
              of manufacturing defects and/or deviation from exact order
              specifications.
            </p>
            <p className="w-full px-4 md:w-3/5 mt-4 text-gray-700 text-lg mx-auto text-center md:text-left">
              Your return will usually be processed within a week to a week and a
              half. We’ll send you a Return Notification email to notify you once
              the return has been completed.
            </p>
            <p className="w-full px-4 md:w-3/5 text-gray-700 text-lg mx-auto text-center md:text-left">
              Please allow 1-3 business days for refunds to be received to the
              original form of payment once the return has been processed.
            </p>
          </div>
  
          {/* Section for Refund / Cancellation */}
          <div className="flex flex-wrap justify-start items-center mt-8">
            <h1 className="text-4xl font-Inter font-semibold mt-4 w-full md:w-2/3 text-center">
              Refund / Cancellation
            </h1>
            <h3 className="w-full md:w-3/5 text-gray-700 text-lg mx-auto mt-4 text-center md:text-left">
              There is zero cancellation charge.
            </h3>
            <h3 className="w-full md:w-3/5 text-gray-700 text-lg mx-auto text-center md:text-left">
              Cancellation is Totally Free.
            </h3>
            <h3 className="w-full md:w-3/5 text-gray-700 text-lg mx-auto text-center md:text-left">
              You will get 100% refund for cancelled product.
            </h3>
            <h3 className="w-full md:w-3/5 text-gray-700 text-lg mx-auto mt-4 text-center md:text-left">
              Your refund will be received by you in 30 working days from the
              cancellation date.
            </h3>
          </div>
  
          {/* Section for Help */}
          <div className="flex flex-wrap flex-col mt-8">
            <h1 className="text-4xl font-Inter font-semibold mt-4 w-full md:w-2/5 pl-0 md:pl-20 text-center">
              Help
            </h1>
            <li className="w-full md:w-3/5 text-gray-700 text-lg mx-auto mt-6 text-center md:text-left">
              Give us a shout if you have any other questions and/or concerns.
            </li>
            <li className="w-full md:w-3/5 text-gray-700 text-lg mx-auto text-center md:text-left">
              Email: info@krinvi.com
            </li>
            <li className="w-full md:w-3/5 text-gray-700 text-lg mx-auto text-center md:text-left">
              Phone: +91-9354795744
            </li>
          </div>
        </div>
      </>
    );
  };
  
  export default ReturnRefund;
  