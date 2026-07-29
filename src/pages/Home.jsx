import GradText from "@/components/ui/GradText";
import LogoAni from "@/components/ui/LogoAni";
import PageTemplate from "@/components/ui/PageTemplate";
import FAQs from "@/components/home/FAQs";
import WhyChooseUs from "./WhyChooseUs";
import Marquee from "@/components/ui/Marquee";
import HeroSection from "@/components/home/HeroSection";
import HowWeFetch from "@/components/home/HowWeFetch";

export default function Home() {

    


    return (
        <div className="w-full min-h-screen relative bg-black z-1">

            <HeroSection />
            <HowWeFetch/>

            

            <div className="w-7xl min-h-screen p-8 mt-8">
                <div className="border-t border-border-20 pt-16 flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-text"></div>
                        <h1 className="text-muted-text text-xl">samdnb</h1>
                    </div>
                    <h1 className="text-7xl tracking-tigher font-bol leading-18">
                        Design is a team sport.
                        It’s where grit meets finesse.
                        Where setbacks shape champions.
                        Over the years,
                        we’ve built a dynasty,
                        A shining gold standard
                        that fuels our hustle in
                        this digital game.
                    </h1>
                </div>
            </div>

            <WhyChooseUs />

            <Marquee direction="right" />
            <Marquee direction="left" />

            <FAQs />


        </div>
    )
}
