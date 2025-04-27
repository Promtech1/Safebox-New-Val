import React from "react";
import darkSolar from "../../assets/darkSolar.png";
import SolarHero from "../../assets/SolarHero.png";

const AboutHero = () => {
  return (
    <div>
      <div className="text-center justify-between flex-col ">
        <div className="my-25 flex-col justify-between w-[55%] mx-auto">
          <h1 className="mb-6 font-bold">Our Story</h1>
          <p className="text-[18px]">
            From individuals living in darkness, to industries struggling to
            take shape, we believe access to abundant, renewable energy will
            prove to be a crucial stepping stone in building the African society
            of the future.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={SolarHero} alt="" className="h-[70vh]" />
        </div>

        <section
          className="relative h-[100vh] bg-cover  flex items-end p-10 pb-30 justify-center"
          style={{ backgroundImage: `url(${darkSolar})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <p className="relative text-[30px] font-bold w-[80%] mx-auto">
            “From darkness to light, we build bridges powered by the sun,
            connecting innovation with impact, and turning silent streets into
            thriving, sustainable cities.”
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutHero;
