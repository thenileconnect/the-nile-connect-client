import { LandingPage } from "@/components/pages/landing-page/landing-page";
import { HowWeWork } from "@/components/pages/landing-page/how-we-work";
import WeCanHelpYouWith from "@/components/pages/landing-page/we-can-help-you-with";
import Testimonials from "@/components/pages/landing-page/testimonials";
import Footer from "@/components/pages/landing-page/footer";
export default function Home() {
  return (
    <div className="h-full w-full max-w-screen-xl mx-auto">
      <LandingPage />
      <HowWeWork />
      <WeCanHelpYouWith />
      <Testimonials />
      <Footer/>
    </div>
  );
}
