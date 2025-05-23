"use client";
  
import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import ServicesImageSlider from "./ServicesImageSlider";
import Image from "next/image";

const ServiceDetailsContentTwo: React.FC = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <ServicesImageSlider />

              <div className="services-details-desc">
                <span className="sub-title">AI & ML Development</span>
                <h3>About this Services</h3>
                <p>
                  Improve Machine Learning algorithms by studying underfitting,
                  overfitting, training, validation, n-fold cross validation,
                  testing, and how hyperparameters could improve performance.
                  Perform linear and logistic regressions in Python.
                </p>

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="image">
                      <Image
                        src="/img/projects/project2.jpg"
                        alt="image"
                        width={750}
                        height={600}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="content">
                      <h3>Important Facts</h3>
                      <ul>
                        <li>The Field of Data Science</li>
                        <li>The Problem</li>
                        <li>The Solution</li>
                        <li>The Skills</li>
                        <li>Statistics</li>
                        <li>Mathematics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English.
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
                <h3>Application Areas</h3>

                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-factory"></i>
                      </div>
                      Manufacturing
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-hospital"></i>
                      </div>
                      Healthcare
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-tracking"></i>
                      </div>
                      Automobile
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-investment"></i>
                      </div>
                      Banking
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-house"></i>
                      </div>
                      Real Estate
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-order"></i>
                      </div>
                      Logistics
                    </div>
                  </div>
                </div>

                <h3>Technologies That We Use</h3>
                <ul className="technologies-features">
                  <li>
                    <span>JavaScript</span>
                  </li>
                  <li>
                    <span>Python</span>
                  </li>
                  <li>
                    <span>Java</span>
                  </li>
                  <li>
                    <span>C/CPP</span>
                  </li>
                  <li>
                    <span>PHP</span>
                  </li>
                  <li>
                    <span>Swift</span>
                  </li>
                  <li>
                    <span>C# (C- Sharp)</span>
                  </li>
                  <li>
                    <span>Ruby</span>
                  </li>
                  <li>
                    <span>SQL</span>
                  </li>
                </ul>
                <div className="charts-image">
                  <Image
                    src="/img/services/charts.jpg"
                    alt="image"
                    width={750}
                    height={422}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContentTwo;
