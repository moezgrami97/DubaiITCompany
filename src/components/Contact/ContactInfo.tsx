"use client";
  
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>
                <h3>Our Address</h3>
                <p className="fs-6">OFFICE # 2504-3, PRISM TOWER,
                BURJ KHALIFA AREA - Dubai</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3>Contact</h3>
                <p>
                  Mobile: <a href="tel:+971564255991">+971 56 425 5991</a>
                </p>
                <p>
                  E-mail: <a href="mailto:hello@tracer.com">contact@alberoit.ae</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <h3>Hours of Operation</h3>
                <p>Monday - Saturday: </p>
                <p>10:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
