"use client";
  
import React from "react";
import Image from "next/image";

const OurFeatures: React.FC = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div 
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Our Features
            </span>

            <h2>All-in-One Solutions</h2>
            <p>
            At AlberoIT, From building websites and mobile apps to digital marketing, photography, videography, and brand design, we handle every aspect of your business growth from A to Z.
            </p>
          </div>

          <div className="row">
            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon1.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Website Development</h3>
                <p>
                We specialize in creating custom websites tailored to your needs—whether it's for e-commerce, blogging, or a professional portfolio (vitrine). Whatever your business goals, we build websites that are visually appealing, functional, and optimized for performance.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon2.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Mobile App Development</h3>
                <p>
                  We design and develop mobile applications that provide seamless user experiences. Whether you need a simple app or a complex, feature-rich platform, we create apps that are intuitive, responsive, and aligned with your business objectives.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon3.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Our digital marketing services are designed to boost your online presence and drive meaningful results. From SEO and social media campaigns to targeted advertising and content strategies, we help you reach and engage your audience effectively, turning leads into loyal customers.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon4.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Brand Design</h3>
                <p>
                  Create a lasting impression with a unique brand identity. Our brand design services include logo creation, visual style guides, and brand messaging, ensuring your business stands out and resonates with your target audience across all platforms.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon5.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Photography</h3>
                <p>
                  Capture the essence of your brand with our professional photography services. Whether it's product photography, corporate shoots, or lifestyle imagery, we provide high-quality visuals that tell your brand’s story and enhance your marketing efforts.
                </p>

              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon6.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Videography</h3>
                <p>
                  Bring your brand to life with professional videography. From promotional videos to corporate presentations and event coverage, we create high-quality, engaging videos that capture attention and effectively communicate your message to your audience.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon6.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Cybersecurity</h3>
                <p>
                  Safeguard your digital assets with our expert cybersecurity services. We offer comprehensive solutions including threat detection, risk assessments, data protection, and incident response. Our specialized penetration testing identifies vulnerabilities before attackers can exploit them—ensuring your systems remain secure, resilient, and compliant.
                </p>

              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon6.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>E-commerce solution</h3>
                <p>
                Launch and grow your online business with our end-to-end eCommerce solutions. From custom storefront design and secure payment integration to inventory management and user experience optimization, we deliver scalable platforms tailored to your brand and customers.
                </p>

              </div>
            </div>


            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="single-services-item-box">
                <div className="icon">
                  <Image
                    src="/img/services/service-icon6.png"
                    alt="image"
                    width={78}
                    height={70}
                  />
                </div>
                <h3>Content Writing</h3>
                <p>
                  Safeguard your digital assets with our expert cybersecurity services. We offer comprehensive solutions including threat detection, risk assessments, data protection, and incident response. Our specialized penetration testing identifies vulnerabilities before attackers can exploit them—ensuring your systems remain secure, resilient, and compliant.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
