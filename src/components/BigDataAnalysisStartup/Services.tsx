"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Services We Can Help You With</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon7.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Big Data Analysis</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details/" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <Image
                    src="/img/services/service-shape4.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon8.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Robust Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details/" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>

                <div className="shape">
                  <Image
                    src="/img/services/service-shape4.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon9.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Marketing Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details/" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <Image
                    src="/img/services/service-shape4.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon10.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Data Visualization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details/" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <Image
                    src="/img/services/service-shape4.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon11.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Securities Research</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details/" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <Image
                    src="/img/services/service-shape4.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon12.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  <Link href="/services/details/">Data Governance</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details/" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <Image
                    src="/img/services/service-shape4.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
