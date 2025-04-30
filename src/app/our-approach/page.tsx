import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/OurApproach/MainBanner";
import Partner from "../../components/OurApproach/Partner";
import FeaturedServices from "../../components/OurApproach/FeaturedServices";
import AboutUs from "../../components/OurApproach/AboutUs";
import OurMission from "../../components/OurApproach/OurMission";
import Funfacts from "../../components/OurApproach/Funfacts";
import Courses from "../../components/OurApproach/Courses";
import ExploreLearning from "../../components/OurApproach/ExploreLearning";
import UpcomingBootcamps from "../../components/OurApproach/UpcomingBootcamps";
import Testimonials from "../../components/OurApproach/Testimonials";
import BlogPost from "../../components/OurApproach/BlogPost";
import Subscribe from "../../components/OurApproach/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      {/* <Partner /> */}

      <FeaturedServices />

      <AboutUs />

      <OurMission />

      <Funfacts />

      <Courses />

      <ExploreLearning />

      <UpcomingBootcamps />

      <Testimonials />

      <BlogPost />

      <Subscribe />

      <Footer />
    </>
  );
}
