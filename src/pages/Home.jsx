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
import ResultDashboard from "@/components/ipuResult/ResultDashboard";
import Test from "@/components/home/Test";

export default function Home() {
    document.title = "myResult® - ";

    return (
        <div className="w-full min-h-screen relative bg-black z-1">
            {/* <ResultDashboard /> */}
            <HeroSection />
            <HowWeFetch />
            <StudyRes />
            <WhyChooseUs />
            {/* <Test /> */}
            {/* <Testing/> */}


            {/* <Marquee direction="right" />
            <Marquee direction="left" /> */}

            <FAQs />


        </div>
    )
}
