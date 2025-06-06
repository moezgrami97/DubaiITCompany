import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/ITServices/MainBanner";
import OurSolutions from "../components/ITServices/OurSolutions";
import OurServices from "../components/ITServices/OurServices";
import OurFeatures from "../components/ITServices/OurFeatures";
import TeamMember from "../components/ITServices/TeamMember";
import RecentProjects from "../components/ITServices/RecentProjects";
import Pricing from "../components/ITServices/Pricing";
import Testimonials from "../components/ITServices/Testimonials";
import Partner from "../components/ITServices/Partner";
import OurBlog from "../components/ITServices/OurBlog";
import ProjectStartArea from "../components/ITServices/ProjectStartArea";
import Footer from "../components/Layouts/Footer";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs";

import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <OurSolutions />

      <OurServices />
      
      <WhyChooseUs />

      <OurFeatures />

      {/* <TeamMember /> */}

      {/* <RecentProjects /> */}

      {/* <Pricing /> */}

      {/* <Testimonials /> */}

      {/* <Partner /> */}

      <ProjectStartArea />

      {/* <OurBlog /> */}

      <SpeedInsights />

      <Footer />
      
    </>
  );
}
