import MainPage from "../MainPage";
import logoImg from '../../img/navbar/Group (1).png'
import Image from "next/image";
import Link from "next/link";

const NavbarPage = () => {
  return (
    <div className="h-[60px] py-[15px] w-[95%] lg:w-[80%] mx-auto mt-5">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-x-[24px] ">
            <Image src={logoImg} alt="logoImg" />
            <Link href="/" className="text-[20px] font-bold text-[#FF5555] hidden lg:block hover:text-gray-300">Home</Link>
            <Link href="/" className="text-[20px] font-bold text-[#000000] hidden lg:block">About Us</Link>
            <Link href="/" className="text-[20px] font-bold text-[#000000] hidden lg:block">Pricing</Link>
            <Link href="/" className="text-[20px] font-bold text-[#000000] hidden lg:block">Features</Link>


        </div>
        <div>

            <button className="w-[180px] h-[60px] bg-[#000000] text-center font-medium text-[18px] text-[#ffffff] rounded-md">Download</button>

        </div>

      </div>
    </div>
  );
};

export default NavbarPage;
