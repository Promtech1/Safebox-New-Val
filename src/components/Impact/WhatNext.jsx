import React from "react";
import greenbulb from "../../assets/greenbulb.jpeg";

const WhatNext = () => {
  return (
    <section className="bg-black text-white">
      <div className="text-center py-30">
        <h2 className="text-5xl font-bold">What’s next?</h2>
      </div>

      {/* Image + Overlay */}
      <div className="relative max-w-5xl mx-auto -mb-12">
        <img
          src={greenbulb}
          alt="Light bulb on grass"
          className="w-full  h-96 "
        />
        <div className="absolute inset-0 flex items-baseline-last left-20 ">
          <div className="bg-black/70 p-6  max-w-xl text-left">
            <h3 className="text-3xl font-bold mb-4">
              The Future of our Impact Solution
            </h3>
            <ul className="list-disc pl-7 space-y-3 text-xl text-gray-300">
              <li>Expanding research into energy-efficient waste management</li>
              <li>
                Strengthening global partnerships for larger clean energy projects
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lime Green Section */}
      <div className="bg-[#B7DC38] pt-20 pb-12 text-center">
        <h3 className="text-5xl text-black font-bold mb-10">
          Be part of the solution…
        </h3>
        <button className="bg-white text-black font-bold py-2 px-10 m rounded-md shadow-md hover:text-[#B7DC38] hover:bg-black transition">
          Partner with us
        </button>
      </div>
    </section>
  );
};

export default WhatNext;
