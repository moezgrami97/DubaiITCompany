"use client";
  
import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="how-its-work-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-content">
                <span className="sub-title">
                  <Image
                    src="/img/star-icon.png"
                    alt="image"
                    width={32}
                    height={34}
                  />
                  Scrum Methodology
                </span>

                <h2>Our Approach</h2>
                <p>
                  We listen to our clients, analyze their business needs, and propose the most effective solutions. Throughout the process, we keep our clients informed with weekly meetings to track progress. After delivery, we provide three months of free support to ensure everything runs smoothly.
                </p>

                <div className="inner-box">
                  <div className="single-item">
                    <div className="count-box">1</div>
                    <h3>Step 1: Contact Us</h3>
                    <p>
                    Get in touch: Request a free consultation to discuss your business needs with our expert team.
                    </p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">2</div>
                    <h3>Step 2: Tailored Solution Development</h3>
                    <p>
                    Strategize & Plan: We analyze your needs and create a customized solution that aligns with your goals.
                    </p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">3</div>
                    <h3>Step 3: Launch & Support</h3>
                    <p>
                    Delivery & Ongoing Care: We deliver your solution, and offer three months of free support to ensure everything runs smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-image">
                <Image
                  src="/img/how-its-work.png"
                  alt="image"
                  width={715}
                  height={528}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
