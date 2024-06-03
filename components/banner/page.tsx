import Image from "next/image";
import groupImg from "../../img/bannerpage/Group 1000002356.png";
import ellipseImg from "../../img/bannerpage/Ellipse 2157 (1).png";
import ellipse2Img from "../../img/bannerpage/Ellipse 2156 (1).png";
import ellipse3Img from "../../img/bannerpage/Ellipse 2155 (1).png";
import iphone1Img from "../../img/bannerpage/1.png";
import iphone2Img from "../../img/bannerpage/2.png";
import iphone3Img from "../../img/bannerpage/3.png";

const BannerPage = () => {
  return (
    <div className=" w-[95%] lg:w-[80%] mx-auto h-full">
      <div>
        <div className=" relative">
          <div className=" absolute">
            <Image src={groupImg} alt="" />
          </div>
          <div className=" absolute bg-[#000000] w-full rounded-md h-[530px] top-52 flex py-[100px]">
            <div className=" relative w-full lg:w-1/2">
              <div className=" absolute top-[200px]">
                <Image src={ellipseImg} alt="" />
              </div>
              <div className=" absolute top-[240px]">
                <Image src={ellipse2Img} alt="" />
              </div>
              <div className=" absolute top-[260px]">
                <Image src={ellipse3Img} alt="" />
              </div>
              <div className=" absolute top-10 left-10">
                <div className="flex flex-col ">
                  <h1 className="text-[#FFFFFF] font-bold text-[48px]">
                    Ready To Get Started?
                  </h1>
                  <span className="text-[18px] text-[#FFFFFF]">
                    Risus habitant leo egestas mauris diam eget morbi tempus
                    vulputate.
                  </span>
                  <button className="w-[210px] h-[60px] bg-white text-[#000000] text-[18px] font-medium text-center rounded-md mt-5">
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className=" relative w-full lg:w-1/2 hidden lg:block">
              <div className=" absolute z-50 left-10">
                <Image src={iphone1Img} alt="" />
              </div>
              <div className=" absolute -top-32 left-64 z-40">
                <Image src={iphone2Img} alt="" />
              </div>
              <div className=" absolute -top-24 left-[440px] z-30">
                <Image src={iphone3Img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
