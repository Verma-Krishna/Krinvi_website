import React from "react";

export default function Terms() {
  return (
    <>
      <div className="my-6">
        <h1 className="text-center text-3xl md:text-4xl font-semibold font-Inter mb-4">
          Collecting Personal Information
        </h1>
        <p className="w-full md:w-3/4 lg:w-1/2 text-justify mx-auto text-base md:text-lg font-medium text-gray-700 px-4 md:px-0">
          When you visit the Site, we collect information about your device,
          your interaction with the Site, and information needed to process your
          purchases. If you get in touch with us for customer service, we might
          additionally gather more information. Any information that can be used
          to specifically identify an individual is referred to in this privacy
          statement as “Personal Information,” which includes the data listed
          below. For further details on the Personal Information we gather and
          why, see the list below.
        </p>
      </div>

      <div className="my-6">
        <h1 className="text-center text-3xl md:text-4xl font-semibold font-Inter mb-4">
          Order Information
        </h1>
        <ul className="list-none space-y-4">
          <li className="w-full md:w-3/4 lg:w-1/2 text-justify mx-auto text-base md:text-lg text-gray-700 px-4 md:px-0">
            <strong>Examples of Personal Information collected:</strong> Name, billing address,
            shipping address, payment information (including credit card
            numbers), email address, and phone number.
          </li>
          <li className="w-full md:w-3/4 lg:w-1/2 text-justify mx-auto text-base md:text-lg text-gray-700 px-4 md:px-0">
            <strong>Purpose of collection:</strong> To provide products or services to you to
            fulfill our contract, to process your payment information, arrange
            for shipping, and provide you with invoices and/or order
            confirmations, communicate with you, screen our orders for potential
            risk or fraud, and when in line with the preferences you have shared
            with us, provide you with information or advertising relating to our
            products or services.
          </li>
          <li className="w-full md:w-3/4 lg:w-1/2 text-justify mx-auto text-base md:text-lg text-gray-700 px-4 md:px-0">
            <strong>Source of collection:</strong> Collected from you.
          </li>
          <li className="w-full md:w-3/4 lg:w-1/2 text-justify mx-auto text-base md:text-lg text-gray-700 px-4 md:px-0">
            <strong>Disclosure for a business purpose:</strong> Shared with our processor.
          </li>
        </ul>
      </div>
    </>
  );
}
