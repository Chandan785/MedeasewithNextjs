 
 import NavbarDemo from "@/components/navbar";
import FeaturesSectionDemo from "@/components/features";
 import HeroSectionOne from "@/components/hero";
import ThreeDCardDemo from "@/components/partner";
import CardHoverEffectDemo from "@/components/howitworks";
import InfiniteMovingCardsDemo from "@/components/ui/moving card";
 import Footer from "@/components/footer";
//import AnimatedTooltipPreview from "@/components/ourteammates";
//import ourteammates from "@/components/ourteammates"; 
//import WavyBackground from "@/components/ui/wavy-background";

//import SignupFormDemo from "@/components/ui/signupform" 
export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen  ">
    <div>
      <h1 className="text-4xl font-bold mb-4"> </h1>
    
    </div>
     
    <NavbarDemo />
    <HeroSectionOne />
    <FeaturesSectionDemo />
    <ThreeDCardDemo />
    <CardHoverEffectDemo />
    <InfiniteMovingCardsDemo />  

    <Footer/>  
      

      {/* <SignupFormDemo /> */}
    </div>
  );
}
