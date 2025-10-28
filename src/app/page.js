import ContactUs from "@/components/contactUs";
import CoreFeatures from "@/components/coreFeatures";
import FeaturesSection from "@/components/featureSection";
import Footer from "@/components/footer";
import NavbarHero from "@/components/navbarHero";
import ProjectsDemo from "@/components/projectsDemo";
import ServicesHighlight from "@/components/servicesHighlight";
import ServicesSection from "@/components/servicesSection";


export default function Home() {
  return (
     <div>
        <NavbarHero/>
        <ServicesHighlight/>
        <ProjectsDemo/>
        <FeaturesSection/>
        <ServicesSection/>
        <CoreFeatures/>
        <ContactUs/>
        <Footer/>
     </div>
  );
}
