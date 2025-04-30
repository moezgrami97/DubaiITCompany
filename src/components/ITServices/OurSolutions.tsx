"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurSolutions: React.FC = () => {
  return (
    <>
      <div className="solutions-area pb-70">
        <div className="container">
          <div 
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="sub-title">
              <Image src="/img/star-icon.png" alt="image" width={32} height={34} />
              We Are Here to Provide Solutions
            </span>
            <h2>IT Services</h2>
            <p>
              Our expert team is committed to your project, delivering efficient, tailored solutions quickly to meet your goals and exceed expectations.             
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  <Link href="/services/details/">Programming</Link>
                </h3>
                <p>
                Custom programming services to build efficient software, websites, and automation systems tailored to your business needs.
                </p>

                {/* <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link> */}
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  <Link href="/services/details/">Mobile Application</Link>
                </h3>

                <p>
                Expert mobile application development for iOS and Android, ensuring high performance, security, and a seamless user experience.
                </p>

                {/* <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link> */}
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link href="/services/details/">E-commerce Solution</Link>
                </h3>

                <p>
                Custom e-commerce solutions with secure payment integrations and optimized shopping experiences to drive sales and growth.
                </p>

                {/* <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link> */}
              </div>
            </div>
            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-lock"></i>
                </div>

                <h3>
                  <Link href="/services/details/">Cyber Security</Link>
                </h3>

                <p>
                Protect your business with advanced cybersecurity services, including data protection, network security, and threat mitigation.
                </p>

                {/* <Link href="/services/details/" className="view-details-btn">
                  View Details
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
