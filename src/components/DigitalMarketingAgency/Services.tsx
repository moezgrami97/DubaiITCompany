"use client";
  
import React from "react";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="overview-area ptb-100 pt-0">
        <div className="container">
          {/* Left Image Style */}
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <Image
                  src="/img/services/service4.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">Design & Development</span>
                <h2>Solving problems, building brands</h2>
                <p>
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Recommender systems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Demand prediction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Omnichannel analytics
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Lead generation
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Dedicated Developers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> 24/7 Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Left Image Style */}

          {/* Right Image Style */}
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Social Media Marketing</span>
                <h2>We are the next generation of the advertising world</h2>
                <p>
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Core Development
                  </h4>
                  <p>
                    No fake products and services. The customer is king, their
                    lives and needs are the inspiration.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Define Your Choices
                  </h4>
                  <p>
                    No fake products and services. The customer is king, their
                    lives and needs are the inspiration.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <Image
                  src="/img/services/service5.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>
          </div>
          {/* End Right Image Style */}

          {/* Left Image Style */}
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <Image
                  src="/img/services/service6.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">SEO Consultancy</span>
                <h2>We make smart, good-looking things</h2>
                <p>
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Recommender systems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Demand prediction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Omnichannel analytics
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Lead generation
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Dedicated Developers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> 24/7 Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Left Image Style */}
        </div>
      </div>
    </>
  );
};

export default Services;
