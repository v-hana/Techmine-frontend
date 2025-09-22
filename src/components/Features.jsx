import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-16">
      {/* Heading */}
      <div className="text-justify mx-auto">
        <h2 className="text-5xl font-big-shoulder font-black uppercase">
          We Redefine What's Possible
        </h2>
        <p className="mt-4 font-onest font-normal text-[#A9A9A9] text-base">
          Welcome To Alternative Rebar Plant! We Specialize In Producing <br/>And
          Delivering GFRP Rebar In All Sizes, Both Straight And Bent, To <br/>GCC And
          African Countries.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex gap-8 mt-12 text-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-big-shoulder font-bold text-[#FFD400]">
            10+
          </h3>
          <p className="mt-2 text-[#A66A02]">Years of Experience</p>
        </div>
        <div className="w-px h-16 bg-gray-300"></div>

        <div>
          <h3 className="text-3xl md:text-4xl font-big-shoulder font-bold text-[#FFD400]">
            100%
          </h3>
          <p className="mt-2 text-[#A66A02]">Projects delivered below budget</p>
        </div>
        <div className="w-px h-16 bg-gray-300"></div>

        <div>
          <h3 className="text-3xl md:text-4xl font-big-shoulder font-bold text-[#FFD400]">
            100%
          </h3>
            <p className="mt-2 text-[#A66A02]">
            Projects delivered on schedule or earlier
          </p>
        </div>
        <div className="w-px h-16 bg-gray-300"></div>

        <div>
          <h3 className="text-3xl md:text-4xl font-big-shoulder font-bold text-[#FFD400]">
            300+
          </h3>
            <p className="mt-2 text-[#A66A02]">Employees in current team</p>
        </div>
      </div>
<div className="w-full h-px mt-6 bg-gray-300"></div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        <div className="bg-yellow-100 rounded-xl p-6 text-center shadow">
          <span className="text-2xl">🔑</span>
          <p className="mt-4 text-gray-700">
            We have been living and working in Saudi for over 10 years
          </p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-6 text-center shadow">
          <span className="text-2xl">📑</span>
          <p className="mt-4 text-gray-700">
            We work officially under law and provide invoices.
          </p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-6 text-center shadow">
          <span className="text-2xl">📍</span>
          <p className="mt-4 text-gray-700">
            We know the current legislation and all the intricacies of document
            execution
          </p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-6 text-center shadow">
          <span className="text-2xl">🛡️</span>
          <p className="mt-4 text-gray-700">
            We work without intermediaries, so we have favorable prices for
            services
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
