import React from "react";

function TermsAndCondition() {
  return (
    <>
      <div className="flex flex-col lg:flex-row hover:text-red-500 duration-150 text-center justify-center text-xl">
        <h2>Read all the Terms & Condition carefully </h2>
        <h2>| सभी नियम एवं शर्तें ध्यानपूर्वक पढ़ें</h2>
      </div>
      <div className="px-3 lg:px-20 my-5">
        <ol
          type="A"
          className="text-wrap list-decimal list-inside space-y-2 text-gray-700 text-lg"
        >
          <li>
            We are not responsible for any payments made to the bank, such as
            office fees, E.M., P.M., registry, notary, or other expenses.
          </li>
          <li>The amount taken on paper will not be refunded.</li>
          <li>Our registration fees are non-refundable.</li>
          <li>
            After the loan is approved, we will charge a 3% commission. Note:
            This is applicable only for home loans, mortgage loans, and business
            loans.
          </li>
          <li>We will take one cheque as security.</li>
          <li>
            The cheque will be returned only after the commission is received.
          </li>
          <li>No documents will be returned to you except for the cheque.</li>
          <li>Payments without a receipt will not be considered valid.</li>
          <li>A receipt is provided for every payment made.</li>
          <li>We do not have any other branches.</li>
          <li>
            If the customer cancels after the loan sanction, it is mandatory to
            pay half of our fee.
          </li>
          <li>I agree to all the above terms and conditions.</li>
        </ol>
      </div>
    </>
  );
}

export default TermsAndCondition;
