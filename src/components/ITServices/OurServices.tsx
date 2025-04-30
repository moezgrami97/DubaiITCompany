"use client";
  
import React from "react";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      {/* Service Left Image Style */}
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/img/services/service1.png"
                  alt="image"
                  width={810}
                  height={620}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <Image
                      src="/img/star-icon.png"
                      alt="image"
                      width={32}
                      height={34}
                    />{" "}
                    We Are Here to Drive Growth
                  </span>

                  <h2>Digital Marketing</h2>
                  <p>
                  Our expert team specializes in digital marketing strategies that help your brand grow, increase visibility, and reach your target audience effectively. We deliver tailored, results-driven campaigns to boost engagement and drive conversions.
                  </p>
                  <ul className="about-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Marketing Strategy
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Brand Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Photography Services
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Video Production
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Left Image Style */}

      {/* Service Right Image Style */}
      {/* <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <Image
                      src="/img/star-icon.png"
                      alt="image"
                      width={32}
                      height={34}
                    />{" "}
                    Scrum Methodology
                  </span>

                  <h2>Our Approach</h2>
                  <p>
                  We listen to our clients, analyze their business needs, and propose the most effective solutions. Throughout the process, we keep our clients informed with weekly meetings to track progress. After delivery, we provide three months of free support to ensure everything runs smoothly.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Responsive Design
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="our-mission-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/img/services/service2.png"
                  alt="image"
                  width={810}
                  height={620}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Service Right Image Style */}
    </>
  );
};

export default OurServices;
