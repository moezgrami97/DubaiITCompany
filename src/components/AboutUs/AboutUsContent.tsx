"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/img/about/about-img5.png"
                  alt="image"
                  width={944}
                  height={660}
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
                    />
                    About Us
                  </span>
                  <h2>We Are a Dubai-Based Company Empowering Brands in the Digital World</h2>
                  <p>
                  Headquartered in Dubai, we specialize in crafting impactful websites, securing digital assets through expert penetration testing, designing unique brand identities, and executing result-driven digital marketing strategies. Our mission is to help businesses grow, stay secure, and stand out in the digital space.
                  </p>

                  <ul className="features-list">
                    <li>
                      <Image
                        src="/img/icons/icon4.png"
                        alt="image"
                        width={58}
                        height={52}
                      />
                      <h3>1 Year</h3>
                      <p>On the market</p>
                    </li>
                    <li>
                      <Image
                        src="/img/icons/icon5.png"
                        alt="image"
                        width={58}
                        height={52}
                      />
                      <h3>16+</h3>
                      <p>Team members</p>
                    </li>
                    <li>
                      <Image
                        src="/img/icons/icon6.png"
                        alt="image"
                        width={58}
                        height={52}
                      />
                      <h3>100%</h3>
                      <p>Satisfaction rate</p>
                    </li>
                    <li>
                      <Image
                        src="/img/icons/icon7.png"
                        alt="image"
                        width={58}
                        height={52}
                      />
                      <h3>80%</h3>
                      <p>Senior scientist</p>
                    </li>
                  </ul>
                  <p>
                  Whether you're launching a startup, rebranding an existing business, or securing your digital assets, we bring a unique blend of creativity, technical expertise, and strategy to every project.
                  <br/>Let's build something amazing together.
                  </p>

                  <Link href="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>Get In Touch<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <Image
            src="/img/shape/circle-shape1.png"
            alt="image"
            width={350}
            height={386}
          />
        </div>

        <div className="container">
          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                  We are a Dubai-based company that has been creating impactful digital experiences. From innovative websites to powerful brand identities, we've helped businesses thrive in the digital world.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Building user-friendly websites
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Creating unique brand identities
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Securing digital assets with expert pentesting
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Driving growth through digital marketing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                  Our mission is to help businesses succeed by combining creativity, security, and strategy. We build secure websites, design memorable brands, and deliver marketing campaigns that drive results.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Creating digital solutions that work
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Securing your business in the digital age
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Designing brands that make an impact
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Helping you grow through marketing excellence
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                  We are a team of designers, developers, marketers, and cybersecurity experts, united by a passion for delivering exceptional digital solutions that empower businesses to grow and stay secure.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Passionate about innovation
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> We protect your digital assets
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> We design with purpose
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Your success is our priority
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <Image
            src="/img/shape/circle-shape1.png"
            alt="image"
            width={350}
            height={386}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
