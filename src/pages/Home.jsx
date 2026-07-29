import GradText from "@/components/ui/GradText";
import LogoAni from "@/components/ui/LogoAni";
import PageTemplate from "@/components/ui/PageTemplate";
import Cir from "./Cir";
import FAQs from "@/components/home/FAQs";
import WhyChooseUs from "./WhyChooseUs";
import Marquee from "@/components/ui/Marquee";

export default function Home() {

    
    return (
        <div className="w-full min-h-screen relative z-99999 bg-black">


            <Cir/>

            <div className="w-full min-h-screen">

            </div>
            <Marquee direction="right"/>
            <Marquee direction="left"/>


            <WhyChooseUs/>

            <FAQs/>

            
        </div>
    )
}
