"use client";
  
import React from "react";
import Image from "next/image";

const Partner: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-70 bg-fafafb">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="single-partner-item">
                <Image
                  src="/img/partner/partner1.png"
                  alt="image"
                  width={130}
                  height={40}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="single-partner-item">
                <Image
                  src="/img/partner/partner2.png"
                  alt="image"
                  width={130}
                  height={40}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="single-partner-item">
                <Image
                  src="/img/partner/partner3.png"
                  alt="image"
                  width={130}
                  height={40}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="single-partner-item">
                <Image
                  src="/img/partner/partner4.png"
                  alt="image"
                  width={130}
                  height={40}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="single-partner-item">
                <Image
                  src="/img/partner/partner5.png"
                  alt="image"
                  width={130}
                  height={40}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="single-partner-item">
                <Image
                  src="/img/partner/partner6.png"
                  alt="image"
                  width={130}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
