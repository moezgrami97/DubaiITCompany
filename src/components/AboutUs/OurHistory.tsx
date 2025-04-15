"use client";
  
import React from "react";
import Image from "next/image";

const OurHistory: React.FC = () => {
  return (
    <div className="history-area ptb-100 bg-fafafb">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <Image
              src="/img/star-icon.png"
              alt="image"
              width={32}
              height={34}
            />
            Our History
          </span>
          <h2>History Begins in 2024</h2>
        </div>

        <ol className="timeline history-timeline">
          <li className="timeline-block">
            <div className="timeline-date">
              <span>2024</span>
              Foundation Year
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Founded in Dubai</h3>
                    <p>
                      In 2024, we laid the foundation of our journey in Dubai. Our mission was clear: to create websites that not only look great but also perform flawlessly. Since day one, we’ve focused on providing creative, secure, and scalable digital solutions for businesses of all sizes.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <Image
                      src="/img/history/history1.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* <li className="timeline-block">
            <div className="timeline-date">
              <span>2016</span>
              March 25
              <sup>th</sup>
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Expansion into Cybersecurity</h3>
                    <p>
                      By 2016, we expanded our offerings to include top-tier cybersecurity services. Our expert penetration testing solutions helped businesses identify and resolve vulnerabilities, ensuring that their digital assets were safe and secure.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <Image
                      src="/img/history/history2.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="timeline-block">
            <div className="timeline-date">
              <span>2020</span>
              August 14
              <sup>th</sup>
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Launch of Brand Design Services</h3>
                    <p>
                      In 2020, we launched our brand design services to help businesses create unique identities that stand out in the digital world. We worked with companies across various industries to develop memorable logos and visual identities.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <Image
                      src="/img/history/history3.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="timeline-block">
            <div className="timeline-date">
              <span>2023</span>
              December 10
              <sup>th</sup>
            </div>

            <div className="timeline-icon">
              <span className="dot-badge"></span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>Global Recognition</h3>
                    <p>
                      In 2023, we received international recognition for our excellence in web development and digital marketing. Our work has impacted businesses globally, driving their growth and success through secure, innovative, and user-focused solutions.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <Image
                      src="/img/history/history4.jpg"
                      alt="image"
                      width={750}
                      height={650}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li> */}
        </ol>
      </div>
    </div>

  );
};

export default OurHistory;
