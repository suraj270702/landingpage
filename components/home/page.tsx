import Image from "next/image";
import groupImg from "../../img/homepage/Group 35896 (1).png";
import { FaArrowRight } from "react-icons/fa";
import group3Img from "../../img/homepage/Group 3.png";
import group5Img from "../../img/homepage/Group 35924 - Copy.png";
import iphone1Img from "../../img/homepage/iPhone-13-Pro-Front.png";
import iphone2Img from "../../img/homepage/iPhone-13-Pro-Front (1).png";
import iphone3Img from "../../img/homepage/iPhone-13-Pro-Front (2).png";

import ellipse2Img from "../../img/homepage/Ellipse 2 (2).png";
import ellipseGrp1Img from "../../img/homepage/Ellipse 2155.png";
import ellipseGrp2Img from "../../img/homepage/Ellipse 2156.png";
import ellipseGrp3Img from "../../img/homepage/Ellipse 2157.png";
import starImg from '../../img/homepage/Star 1 (1).png'

const HomePage = () => {
  return (
    <div className="ml-[2.5%] lg:ml-[10%] ">
      <div className=" flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 ">
          <div className="absolute z-40  lg:z-50 ">
            <h1 className="text-[40px] lg:text-[64px] font-bold text-[#000000]">
              Make The Best
            </h1>
            <h1 className="text-[40px] lg:text-[64px] font-bold text-[#000000] -mt-3">
              Financial Decisions
            </h1>
          </div>
          <div className=" absolute top-[170px] z-40  lg:z-50">
            <p className="text-[18px] font-medium text-[#000000]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className=" absolute top-[250px]">
            <div className="flex items-center gap-x-10">
              <button className="w-[180px] h-[60px] bg-[#000000] text-center font-medium text-[18px] text-[#ffffff] rounded-md flex items-center gap-x-2 px-6">
                Get Started <FaArrowRight />
              </button>
              <div className="flex items-center gap-x-3 cursor-pointer h-[60px]">
                <Image src={group3Img} alt="" className="" />
                <h1 className="text-[18px] font-medium text-[#000000]">
                  Watch Video
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute top-[350px]">
            <Image src={group5Img} alt="" />
          </div>
          <div className="left-28 -top-28 absolute z-10">
            <Image src={groupImg} alt="group image" />
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 hidden lg:block">
          <div className=" absolute top-6 left-20 z-10 ">
            <Image src={ellipseGrp1Img} alt="" />
          </div>
          <div className=" absolute top-6 left-36 z-10 ">
            <Image src={ellipseGrp2Img} alt="" />
          </div>
          <div className=" absolute top-6 left-48 z-10  ">
            <Image src={ellipseGrp3Img} alt="" />
          </div>
          <div className=" absolute -top-12 z-50 -left-2">
            <Image src={iphone1Img} alt="" />
          </div>

          <div className=" absolute top-12 z-30  left-20">
            <Image src={iphone2Img} alt="" className="" />
          </div>
          <div className=" absolute top-20 z-20  left-52">
            <Image src={iphone3Img} alt="" className="" />
          </div>
          <div className=" absolute top-80 z-10  left-20">
            <Image src={ellipse2Img} alt="" className="" />
          </div>
          <div className=" absolute top-96 z-10  left-4">
            <Image src={starImg} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
