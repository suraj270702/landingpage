import AdvantagePage from "./Advantage/page";
import BannerPage from "./banner/page";
import CustomizablePage from "./customisable/page";
import FAQpage from "./faq/page";
import FeaturesPage from "./features/page";
import FooterPage from "./footer/page";
import HomePage from "./home/page";
import NavbarPage from "./navbar/page";
import TestimonialPage from "./testimonial/page";

const MainPage = () => {
  return (
    <div className="">
      <NavbarPage />
      <div className="mt-28">
        <HomePage />
      </div>
      <div className="mt-[900px]">
        <FeaturesPage />
      </div>
      <div className="lg:mt-60 mt-96 md:mt-[550px]">
        <AdvantagePage />
      </div>
      <div className="lg:mt-[350px] mt-[700px] md:mt-[800px]">
        <CustomizablePage />
      </div>
      <div className=" lg:mt-[350px] mt-[500px] md:mt-[700px]">
        <TestimonialPage />
      </div>
      <div className=" lg:mt-[350px] mt-[550px] md:mt-[600px]">
        <FAQpage />
      </div>
      <div className=" mt-[300px] md:mt-[200px]">
        <BannerPage />
      </div>
      <div className="mt-[1200px]">
        <FooterPage />
      </div>
    </div>
  );
};

export default MainPage;
