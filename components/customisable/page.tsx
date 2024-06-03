import Image from "next/image";
import ellipse1Img from "../../img/homepage/Ellipse 2155.png";
import groupImg from '../../img/features/Group 35930.png'
import iphoneImg from '../../img/features/iPhone-13-Pro-Front (3).png'
import cardImg from '../../img/advantages/Group (2).png'
import starImg from '../../img/features/star-05 (1).png'
const CustomizablePage = () => {
    return ( 
        <div className="ml-[2.5%] lg:ml-[10%]">
      <div className="flex flex-col lg:flex-row h-full">
        <div className=" w-full lg:w-1/2 relative md:ml-20 lg:ml-0">
          <div className=" absolute z-30 -top-12 -left-20">
            <Image src={groupImg} alt="" />
          </div>
          <div className=" absolute -top-5 lg:left-10 z-30">
            <Image src={ellipse1Img} alt="" />
          </div>
          <div className=" absolute -top-10 left-16 z-30">
            <Image src={ellipse1Img} alt="" />
          </div>
          <div className=" absolute top-5 z-10">
            <Image src={ellipse1Img} alt="" />
          </div>
          <div className=" absolute -top-16 left-20 z-40">
            <Image src={iphoneImg} alt="" />
          </div>
          <div className=" absolute top-16 lg:top-20 left-[100px] lg:left-[150px] z-50 hidden lg:block">
            <Image src={cardImg} alt="" />
          </div>
        </div>
        <div className=" w-full lg:w-[40%] top-96 relative lg:top-14 md:top-[550px]">
            <div>
            <div className=" flex items-center gap-x-5">
                <div className="w-[48px] h-[48px] rounded-full bg-[#FF5555] flex items-center justify-center">
                    <Image src={starImg} alt="" className="" />
                    
                </div>
                <h1 className="text-[20px] lg:text-[28px] font-semibold text-[#000000]">Fully Customizable</h1>
                </div>
                <div className="mt-[20px]">
                    <p className="text-[16px] lg:text-[18px] font-medium text-[#000000]">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
     );
}
 
export default CustomizablePage;