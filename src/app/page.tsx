import {FeaturedIn} from "@/components/FeaturedIn";
import {Testimonials} from "@/components/Testimonials";
import {Features} from "@/components/Features";
import {PricingSection} from "@/components/PricingSection";
import {Connection} from "@/components/Connection";
import {Leaders} from "@/components/Leaders";
import {BookingForm} from "@/components/BookingForm";
import {Footer} from "@/components/Footer";
import {Benefits} from "@/components/Benefits";
import {Header} from "@/components/Header";

export default function Home() {
  return (
    <>
        <Header />
        <main>
            <FeaturedIn />
            <Benefits />
            <Testimonials />
            <Features />
            <PricingSection />
            <Connection />
            <Leaders />
            <BookingForm />
        </main>
        <Footer />
    </>
  );
}
