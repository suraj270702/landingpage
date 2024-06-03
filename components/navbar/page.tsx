"use client"
import MainPage from "../MainPage";
import logoImg from '../../img/navbar/Group (1).png'
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavbarPage = () => {
  const [showNav, setShowNav] = useState(false);
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

            <button className="w-[180px] h-[60px] bg-[#000000] text-center font-medium text-[18px] text-[#ffffff] rounded-md hidden lg:block">Download</button>
            <button className="lg:hidden" onClick={()=>setShowNav(!showNav)}><GiHamburgerMenu className="w-[48px] h-[48px]" /></button>
            <div  className={` w-3/4 md:w-[333px] h-screen fixed top-0 left-0 lg:hidden ${
            showNav ? "translate-x-0" : "-translate-x-full"
          } transition ease-in-out bg-[#dcdbdb] duration-300 px-6 md:px-16 z-50`}>
              <div className="flex flex-col items-center gap-y-10">
                <Link href={""} className="text-[18px] font-medium text-[#FF5555]">Home</Link>
                <Link href={""} className="text-[18px] font-medium text-[#FF5555]">About us</Link>
                <Link href={""} className="text-[18px] font-medium text-[#FF5555]">Pricing</Link>
                <Link href={""} className="text-[18px] font-medium text-[#FF5555]">Features</Link>

              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default NavbarPage;
