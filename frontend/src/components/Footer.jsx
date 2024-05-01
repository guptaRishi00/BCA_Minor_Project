import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full text-white flex flex-col justify-center items-center">
      <div className="w-[70%] my-10">
        <div className="flex justify-between">
          <div>qid</div>

          <div className="flex space-x-10 text-secondary ">
            <div className="space-y-5 text-md">
              <h2 className="text-xl text-primary font-bold">Download App</h2>
              <p>Android</p>
              <p>Ios</p>
              <p>C-form Pro Plugin</p>
              <p>Book a Demo</p>
            </div>
            <div className="space-y-5 text-md">
              <h2 className="text-xl text-primary font-bold">Legal</h2>
              <p>Privacy Policy</p>
              <p>Cancellation and refund</p>
              <p>Shipping and return policy</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between my-8 py-8 border-t border-gray-600">
          <div className="">OneQuid technologies pvt ltd</div>
          <div>logo</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
