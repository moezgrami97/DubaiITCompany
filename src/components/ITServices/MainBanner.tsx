"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="it-services-banner">
        <div className="container">
          <div className="row align-items-center atla3">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                 Web Development, Security Solutions  & Marketing                
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  AlberoIT offers expert web development, advanced security solutions, and impactful digital marketing services to meet the unique needs of your business. Our team combines technical expertise with innovative strategies to deliver customized, results-driven solutions that elevate your brand and grow your online presence. Whether you're looking to build a high-performance website, enhance security, or boost visibility, we're here to drive your success.                </p>

                <div
                  className="btn-box"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <Link href="/contact" className="default-btn">
                    <i className="flaticon-right"></i>
                    Get Started <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <Image
                  src="/img/banner-img1.png"
                  alt="image"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
