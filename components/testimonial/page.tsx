import Image, { StaticImageData } from "next/image";
import ellipse1Img from "../../img/homepage/Ellipse 2155.png";
import groupImg from "../../img/features/Group 35930.png";
import user1Img from "../../img/testimonial/Ellipse 44.png";
import user2Img from "../../img/testimonial/Ellipse 42.png";
import user3Img from "../../img/testimonial/Ellipse 45.png";
import user4Img from "../../img/testimonial/Ellipse 43.png";
import user5Img from "../../img/testimonial/Ellipse 41.png";
import logoImg from "../../img/features/“.png";
import group1Img from "../../img/testimonial/Group 28.png"
import group2Img from "../../img/testimonial/Group 27.png"
import group3Img from "../../img/testimonial/Group 29.png"
import group4Img from "../../img/testimonial/Group 30.png"
import group5Img from "../../img/testimonial/Group 31.png"



const TestimonialPage = () => {
  return (
    <div className="ml-[10%]">
      <div>
        <h1 className="text-[18px] font-medium text-[#000000] text-center">
          Testimonial
        </h1>
        <h1 className="text-[48px] font-bold text-[#000000] mt-1 text-center">
          What Our Users
        </h1>
        <h1 className="text-[48px] font-bold text-[#000000] text-center -mt-3">
          Say About Us?
        </h1>
        <div className="mt-20">
          <div className="flex">
            <div className=" w-full lg:w-1/2 relative">
              <div className=" absolute z-30 -top-12 -left-20">
                <Image src={groupImg} alt="" />
              </div>
              <div className=" absolute -top-5 left-10 z-30">
                <Image src={ellipse1Img} alt="" />
              </div>
              <div className=" absolute -top-10 left-16 z-30">
                <Image src={ellipse1Img} alt="" />
              </div>
              <div className=" absolute top-5 z-10">
                <Image src={ellipse1Img} alt="" />
              </div>
              <div className=" absolute -top-14 z-50">
                <Image src={user1Img} alt="" />
              </div>
              <div className=" absolute -top-10 left-72 z-50">
                <Image src={user2Img} alt="" />
              </div>
              <div className=" absolute top-56 -left-5 z-50">
                <Image src={user3Img} alt="" />
              </div>
              <div className=" absolute top-80 left-[350px] z-50">
                <Image src={user4Img} alt="" />
              </div>
              <div className=" absolute z-30 top-12 left-20">
                <Image src={user5Img} alt="" />
              </div>
              <div className="w-[80px] h-[80px] bg-[#FF5555] absolute z-50 top-28 left-72 flex items-center justify-center rounded-full">
                <Image src={logoImg} alt="" />
              </div>
            </div>
            <div className="w-full lg:w-[40%] relative">
              <div>
                <h1 className="text-[28px] font-semibold text-[#000000]">
                  The Best Financial Accounting App Ever!
                </h1>
                <div className="mt-1">
                  <p className="text-[18px] font-medium text-[#000000]">
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris etiam odio.
                    Duis tristique lacus, et blandit viverra nisl velit. Sed
                    mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                    Lectus eget eget ac dolor neque lorem sapien, suspendisse
                    aliquam.”
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-x-3">
                    <Image src={group1Img} alt="" />
                    <Image src={group2Img} alt="" />
                    <Image src={group3Img} alt="" />
                    <Image src={group4Img} alt="" />
                    <Image src={group5Img} alt="" />


                </div>
                <h1 className="text-[18px] font-semibold text-[#000000] mt-5">Nick Jonas</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
