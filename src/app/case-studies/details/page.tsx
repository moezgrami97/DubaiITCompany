import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent";
import RelatedProjects from "../../../components/CaseStudiesDetails/RelatedProjects";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Case Studies Details"
      />

      <CaseStudiesDetailsContent />

      <RelatedProjects />

      <Footer />
    </>
  );
}
