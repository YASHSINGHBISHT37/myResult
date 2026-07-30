import GradText from "@/components/ui/GradText";
import LogoAni from "@/components/ui/LogoAni";
import PageTemplate from "@/components/ui/PageTemplate";
import FAQs from "@/components/home/FAQs";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Marquee from "@/components/ui/Marquee";
import HeroSection from "@/components/home/HeroSection";
import HowWeFetch from "@/components/home/HowWeFetch";
import S from "./Testing";
import StudyRes from "@/components/home/StudyRes";

export default function Home() {
    document.title = "myResult® - ";

    return (
        <div className="w-full min-h-screen relative bg-black z-1">

            <HeroSection />
            <HowWeFetch />
            <StudyRes/>
            <WhyChooseUs />

            {/* <Testing/> */}


            {/* <Marquee direction="right" />
            <Marquee direction="left" /> */}

            <FAQs />


        </div>
    )
}
