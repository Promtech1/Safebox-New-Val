import React from "react";
import Element from "../../assets/Element.png";
import sus from "../../assets/sus.png";
import tech from "../../assets/tech.png";
import comm from "../../assets/comm.png";
import greendots from "../../assets/greendots.png";
import blackdots from "../../assets/blackdots.png";
import plus from "../../assets/plus.png";
import Animation from "../../assets/Animation.gif"

const OurApproach = () => {
  return (
    <div>
      <div>
        <div className="relative bg-[#0C1B18]">
        <div className="absolute top-70 left-[30%] ">
         <img src={Animation} alt="" className=" w-[90vh]" />
         </div>
          <div className="text-center">
            <h1 className="my-10 mt-10">Our Approach</h1>
            <div className="flex flex-wrap gap-10 justify-center">
              <div className=" bg-[#5AA78F]  rounded-2xl flex flex-col justify-start py-3 px-3  w-[330px] h-[202px] ">
                <img src={sus} alt="" className="flex items-start w-15" />
                <div className="text-black flex-col text-start justify-between ">
                  <h2 className="font-semibold text-3xl my-4">Sustainability</h2>
                  <p>Powering progress without harming the planet.</p>
                </div>
              </div>
              <div className=" bg-[#5AA78F]  rounded-2xl  flex flex-col justify-start py-3 px-3 w-[330px] h-[202px] ">
                <img src={tech} alt="" className="flex items-start w-15" />
                <div className="text-black flex-col text-start justify-between ">
                  <h2 className="font-semibold text-3xl my-4">Technology Driven</h2>
                  <p>Innovative solutions designed for real-world impact.</p>
                </div>
              </div>
              <div className=" bg-[#5AA78F]  rounded-2xl  flex flex-col justify-start py-3 px-3 w-[330px] h-[202px] ">
                <img src={comm} alt="" className="flex items-start w-15" />
                <div className="text-black flex-col text-start justify-between ">
                  <h2 className="font-semibold text-3xl my-4">Community</h2>
                  <p>Empowering people through inclusive energy access.</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Element}
            alt=""
            className=" left-0 bottom-0 w-[870px] h-[500px]"
          />
         
        </div>

        <div className="bg-[#17352F] flex flex-col items-center justify-center py-15 px-10">
          <div className="relative">
            <img
              src={blackdots}
              alt=""
              className=" h-[450px] w-[1183px]  -z-10"
            />
            <div className="absolute text-start text-[20px] font-extrabold top-0 left-0">
              <h1>5000+ tons</h1>
              <h1>Emission Reduced</h1>
            </div>
          </div>

          <div>
            <img src={greendots} alt="" className="w-[1183px] h-auto" />
            <div className="text-[#B7DC38] pt-7 flex text-start justify-between items-center font-bold text-[40px]">
              <div>
                <p>1.4MW</p>
                <p>Installed Capacity</p>
              </div>
              <div>
                <p>5+</p>
                <p>States Served</p>
              </div>
              <div className="bg-[#B7DC38] p-1 rounded-md">
                <a href="">
                  <img src={plus} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
