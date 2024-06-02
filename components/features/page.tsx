import Image, { StaticImageData } from "next/image";
import ellipse1Img from "../../img/homepage/Ellipse 2155.png";
import ellipse2Img from "../../img/homepage/Ellipse 2156.png";
import ellipse3Img from "../../img/homepage/Ellipse 2157.png";
import groupImg from '../../img/features/Group 35930.png'
import group1Img from '../../img/features/Group 35897.png'

import iphoneImg from '../../img/features/iPhone-13-Pro-Front (3).png'
import starImg from '../../img/features/star-05.png'
import cubeImg from '../../img/features/cube-02.png'
import cube1Img from '../../img/features/cube-04.png'



const FeaturesPage = () => {
    const featuresArray:{img:StaticImageData,title:String,description:String}[]=[
        {
           img:starImg,
           title:"Budgeting Intervals",
           description:"Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
        },
        {
            img:cube1Img,
            title:"Budgeting Intervals",
            description:"Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
         },
         {
            img:cubeImg,
            title:"Budgeting Intervals",
            description:"Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
         }
    ]
  return (
    <div className="ml-[10%]">
      <div className="flex h-full">
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
          <div className=" absolute -top-16 left-20 z-50">
            <Image src={iphoneImg} alt="" />
          </div>
        </div>
        <div className=" w-full lg:w-1/2 relative">
            <div className=" flex flex-col justify-between w-full lg:w-[90%] z-50">
                <h1 className="text-[18px] text-[#FF5555] font-medium">Features</h1>
                <div className="mt-5 flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-8">
                    {
                        featuresArray.map((feature,index)=>(
                            <div key={index}>
                        <div className=" flex items-center gap-x-4 mb-2">
                            <Image src={feature.img} alt="" />
                            <h1 className="text-[18px] font-semibold text-[#000000]">{feature.title}</h1>
                           
                        </div>
                        <p className="text-[18px] font-medium text-[#000000]">{feature.description}</p>
                    </div>
                        ))
                    }
                    
                    </div>
                </div>
            </div>
             <div className=" absolute left-96 -top-20 z-10">
                <Image src={group1Img} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
