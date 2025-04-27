import React from "react";
// Example social icons (Install: npm install react-icons)
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import footerLogo from "../assets/footerLogo.png";
import x from "../assets/x.png";
import linkedIn from "../assets/linkedIn.png";
import footerBG from "../assets/footerBG.png"

export default function Footer() {
  return (
    <footer className="bg-[#000] relative flex flex-col text-white text-start  ">
      <div className="absolute right-0 -z-0">
        <img src={footerBG} alt="" />
      </div>
      <div className=" flex flex-col lg:flex-row justify-between gap-8 pt-25 px-4 md:px-10 py-12 z-20">
        <div>
          <img src={footerLogo} alt="Logo" className="mb-10" />

          <div>
            <h2 className="font-semibold text-lg mb-2">Our Location</h2>
            <p className="w-[280px]">234 Ihama road, off Airport road, Benin city, Edo state.</p>
            <p>V90 5342</p>

            <div className="mt-3 rounded overflow-hidden w-full h-[200px]">
              <iframe
                title="Safebox Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24962.48647770362!2d7.037663863746134!3d4.832395671709249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105afbfc34d24f8b%3A0x8da9d6fff076a0c4!2sEdo%20State!5e0!3m2!1sen!2sng!4v1687849163840!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
          <p className="mb-2">+234 782 2342 332</p>
          <p>info@safeboxenergy.com</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Sectors</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-lime-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Energy Challenge
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Impact &amp; Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Education and Community
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-col justify-between space-y-12">
          <h2 className="font-semibold text-lg mb-2">Our Innovations</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-lime-400">
                Solar Generators
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Solar-Powered Incinerators
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Charge Controllers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Power Boxes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-400">
                Solar-powered Water Pumps
              </a>
            </li>
          </ul>

          {/* Subscribe Form */}
        <div className="flex-col items-end align-baseline">
          <h2 className="font-semibold w-[230px] text-xl mb-4">
            Subscribe to our Newsletter
          </h2>
          <form className="flex flex-col  items-start  gap-6">
            <input
              type="email"
              placeholder="name@email.com"
              className="py-2 px-4 bg-amber-50 rounded focus:outline-none text-black w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-lime-400 hover:bg-lime-500  text-black font-semibold py-2 px-18 rounded-xl transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        </div>
      </div>

      <div className="flex justify-between mt-10 px-4 md:px-10">
        <div className="font-bold">
          <h1>
            <span className="text-lime-400">Clean</span> Energy,
          </h1>
          <h1>Powering Tomorrow</h1>
          <div className="flex gap-2 space-x-4 items-center mt-8">
            <a href="#"><img src={x} alt="" className="w-[]"/></a>
            <a href="#"><img src={linkedIn} alt="" /></a>
          </div>
        </div>

        
      </div>

      {/* Footer Bottom */}
      <div className="mt-10  bg-[#141414]  py-4 flex flex-col space-y-3 items-center justify-between text-sm text-white/60">
        <p>Copyright@ {new Date().getFullYear()} Safebox.com</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-lime-400">
            Privacy Policy
          </a>
          |
          <a href="#" className="hover:text-lime-400">
            Terms of Service
          </a>
          |
          <a href="#" className="hover:text-lime-400">
            Support
          </a>
          |
          <a href="#" className="hover:text-lime-400">
            FAQs
          </a>
        </div>
      </div>
    </footer>
  );
}
