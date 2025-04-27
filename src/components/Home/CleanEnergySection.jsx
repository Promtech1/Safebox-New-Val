import React from "react";
import { ArrowUpRight } from "lucide-react";
import studs from "../../assets/studs.png";
import cleanenergy from "../../assets/cleanenergy.png";
import OR from "../../assets/OR.png";
import Marquee from "react-fast-marquee";
import bonton from "../../assets/bonton.png";
import elecar from "../../assets/elecar.png";
import apple from "../../assets/apple.png";
import volks from "../../assets/volks.png";
import chats from "../../assets/chats.png";
import charity from "../../assets/charity.png";
import mcdonalds from "../../assets/mcdonalds.png";
import infiniti from "../../assets/infiniti.png";
import bgPartners from "../../assets/bgPartners.png";
import solars from "../../assets/solars.jpeg";
import bulb from "../../assets/bulb.jpeg";
import thermal from "../../assets/thermal.jpeg";

const cardData = [
  {
    image: studs,
    title: "Do you want to learn about clean energy?",
    text: "Curious about how clean energy is changing lives, economies, and the environment? Dive into our Knowledge Hub to explore articles, research, and innovations designed for a brighter future.",
    buttonText: "Read Article",
    link: "#",
  },
  {
    image: cleanenergy,
    title: "Do you want to bring clean energy to your sector?",
    text: "Are you part of a school, business, NGO, or local community ready to embrace clean energy solutions? Let’s collaborate to power up your world and drive sustainable change.",
    buttonText: "Join Us",
    link: "#",
  },
];

const newsCards = [
  {
    image: solars,
    date: "December 17 2024",
    title: "A sustainable project by Safebox, 2024",
    link: "#",
  },
  {
    image: thermal,
    date: "August 10 2024",
    title:
      "Green energy launches a share buyback program for a maximum amount of 40 million naira.",
    link: "#",
  },
  {
    image: bulb,
    date: "April 17 2024",
    title:
      "Green energy launches a share buyback program for a maximum amount of 40 million naira.",
    link: "#",
  },
  {
    image: solars,
    date: "December 17 2024",
    title: "A sustainable project by Safebox, 2024",
    link: "#",
  },
  {
    image: thermal,
    date: "August 10 2024",
    title:
      "Green energy launches a share buyback program for a maximum amount of 40 million naira.",
    link: "#",
  },
  {
    image: bulb,
    date: "April 17 2024",
    title:
      "Green energy launches a share buyback program for a maximum amount of 40 million naira.",
    link: "#",
  },
];

export default function CleanEnergySection() {
  return (
    <section className="bg-[#0b2c23] py-20 relative   text-white font-sans">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold">
          Join The Clean Energy Movement
        </h2>
      </div>

      <div className="grid relative md:grid-cols-2 max-w-5xl mx-auto">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg h-[480px] bg-black"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute w-full  transition duration-500 group-hover:brightness-50"
            />

            {/* Overlay Arrow */}
            <a
              href={item.link}
              className="absolute top-4 right-4 z-20 text-lime-400 cursor-pointer"
            >
              <ArrowUpRight size={30} />
            </a>

            {/* Content on Hover */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full px-6">
                <div className="flex flex-col justify-center text-start h-full translate-y-10 group-hover:translate-y-25 transition-all duration-500">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6">
                    {item.text}
                  </p>
                  <div className="items-end flex self-end">
                    <a
                      href={item.link}
                      className="inline-block bg-lime-400 text-black font-semibold py-2 px-5 rounded hover:bg-lime-500 transition"
                    >
                      {item.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <img src={OR} alt="" className="absolute top-30 left-[45%] z-40" />
      </div>

      <div
        className="my-20"
        style={{
          backgroundImage: `url(${bgPartners})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Marquee pauseOnHover={false} speed={100} gradient={false}>
          {[
            volks,
            infiniti,
            elecar,
            apple,
            bonton,
            mcdonalds,
            chats,
            charity,
          ].map((img, idx) => (
            <div key={idx} className="mx-8">
              <img
                src={img}
                alt=""
                className="w-[150px]  h-[150px] gap-10 rounded-lg object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-30 overflow-hidden">
        <div className="text-center w-[600px] mx-auto py-18">
            <h1 className="py-5 font-bold">News</h1>
            <p className="text-[20px]">Stay updated with the latest news, innovations, and industry insights from SafeBox Energies.</p>
        </div>
        <Marquee pauseOnHover={true} speed={60} gradient={false}>
          {newsCards.map((item, idx) => (
            <div
              key={idx}
              className="relative group  h-[420px]  overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col text-start justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                <div className="flex justify-between items-center mb-2 text-white text-sm">
                  <span>News - {item.date}</span>
                  <a
                    href={item.link}
                    className="text-lime-400 hover:text-lime-500"
                  >
                    <ArrowUpRight size={28} className="cursor-pointer" />
                  </a>
                </div>
                <p className="text-white font-semibold text-base leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
