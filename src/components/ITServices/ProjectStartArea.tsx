"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectStartArea: React.FC = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="project-start-image">
                <Image
                  src="/img/project-start1.png"
                  alt="image"
                  width={600}
                  height={398}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="project-start-content">
                <h2>We'd Love to Start Your Project With Us</h2>
                <p>
                Ready to bring your vision to life? Whether you're building a brand, launching a new product, or growing your digital presence, we're here to help. Let’s collaborate to create something impactful and tailored to your goals.
                </p>

                <Link href="/contact" className="default-btn">
                  <i className="flaticon-web"></i>
                  Get Started
                  <span></span>
                </Link>
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

export default ProjectStartArea;
