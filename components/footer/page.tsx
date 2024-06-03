import Image from "next/image";
import logoImg from "../../img/navbar/Group (1).png";
import emailImg from "../../img/footer/Frame (1).png";
import phoneImg from "../../img/footer/Frame (2).png";
import Link from "next/link";

const FooterPage = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="flex items-start gap-y-3 flex-col">
          <Image src={logoImg} alt="" />
          <div className="flex items-center gap-x-3">
            <Image src={emailImg} alt="" />
            <h1 className=" text-[16px] font-medium text-">Help@FryBix.com</h1>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src={phoneImg} alt="" />
            <h1 className=" text-[16px] font-medium text-">+12344566789</h1>
          </div>
        </div>
        <div className="flex items-end  md:items-start gap-y-3 flex-col">
            <h1 className="text-[32px] font-medium text-[#000000]">Links</h1>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Home</Link>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>About us</Link>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Bookings</Link>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Blogs</Link>
        </div>
        <div className="flex gap-y-3 flex-col">
            <h1 className="text-[32px] font-medium text-[#000000]">Legal</h1>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Terms Of Use</Link>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Privacy Policy</Link>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Cookie Policy</Link>
            
        </div>
        <div className="flex items-end md:items-start gap-y-3 flex-col">
            <h1 className="text-[32px] font-medium text-[#000000]">Product</h1>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Take Tour</Link>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Live Chat</Link>
            <Link className="text-[16px] font-medium text-[#000000]" href={"/"}>Reviews</Link>
            
        </div>
        <div className="flex gap-y-3 flex-col">
            <h1 className="text-[32px] font-medium text-[#000000]">News Letter</h1>
            <h1 className="text-[16px] font-medium text-[#000000]">Stay Up To Date</h1>
            <div>
                <input type="text" className="h-[60px] text-[#000000] py-2 pl-3 focus:outline-none" placeholder="enter your email" />
                <button className="w-[160px] h-[60px] bg-[#000000] rounded-md text-white text-[18px] font-medium">Subscribe</button>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
