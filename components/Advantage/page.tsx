import Image, { StaticImageData } from "next/image";
import ellipse1Img from "../../img/homepage/Ellipse 2155.png";
import ellipse2Img from "../../img/homepage/Ellipse 2156.png";
import ellipse3Img from "../../img/homepage/Ellipse 2157.png";
import groupImg from '../../img/features/Group 35930.png'
import iphoneImg from '../../img/advantages/iPhone-13-Pro-Front (4).png'
import bellIconImg from '../../img/advantages/bell-02.png'

const AdvantagePage = () => {
    
    return ( <div className="ml-[10%]">
    <div className="flex h-full">
    <div className="w-full lg:w-1/2">
        <div>
            <h1 className="font-medium text-[18px] text-[#FF5555]">Advantages</h1>
            <h1 className="font-bold text-[48px] text-[#000000] mt-1">Why Choose Urify</h1>
             <div className=" flex items-center gap-x-5">
                <div className="w-[48px] h-[48px] rounded-full bg-[#FF5555] flex items-center justify-center">
                    <Image src={bellIconImg} alt="" className="" />
                    
                </div>
                <h1 className=" text-[28px] font-semibold text-[#000000]">Clever Notifications</h1>
                </div>
                <div className="mt-[20px]">
                    <p className="text-[18px] font-medium text-[#000000]">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                </div>

        </div>
    </div>
      <div className=" w-full lg:w-1/2 relative">
        <div className=" absolute z-30 top-16 -left-20">
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
        <div className=" absolute -top-16 left-20 z-50">
          <Image src={iphoneImg} alt="" />
        </div>
      </div>
      
    </div>
    
  </div> );
}
 
export default AdvantagePage;