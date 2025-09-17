import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-black text-white">
      <div className="h-screen w-screen bg-black text-white flex flex-col justify-center">
        <h1 className="text-5xl font-black">
          FIBERGLASS REBAR
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold">
          100 YEARS LIFESPAN <br /> ZERO CORROSION
        </p>
        <p className="mt-6 max-w-2xl text-gray-200 text-base md:text-lg leading-relaxed">
          Driven by a passion for accelerating change towards a sustainable
          future, we collaborate with businesses and industries to ignite
          innovation, facilitate smarter decision-making, and deliver meaningful,
          positive impact.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
