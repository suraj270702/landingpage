import AdvantagePage from "./Advantage/page";
import CustomizablePage from "./customisable/page";
import FeaturesPage from "./features/page";
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
          <div className="mt-60">
            <AdvantagePage />
            </div>
            <div className="mt-[350px]">
<CustomizablePage />
            </div>
            <div className=" mt-[350px]">
                <TestimonialPage />
            </div>
        </div>
     );
}
 
export default MainPage;