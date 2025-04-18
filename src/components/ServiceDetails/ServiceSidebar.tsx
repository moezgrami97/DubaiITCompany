"use client";
  
import React from "react";
import Link from "next/link";

const ServiceSidebar: React.FC = () => {
  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          <li>
            <Link href="/services/details/" className="active">
              AI & ML Development
            </Link>
          </li>
          <li>
            <Link href="/services/details/">Data Analytics</Link>
          </li>
          <li>
            <Link href="/services/details/">Data Science</Link>
          </li>
          <li>
            <Link href="/services/details/">Artificial Intelligence</Link>
          </li>
          <li>
            <Link href="/services/details/">Data Visualization</Link>
          </li>
        </ul>

        <div className="download-file">
          <h3>Brochures</h3>

          <ul>
            <li>
              <Link href="#">
                PDF Download <i className="bx bxs-file-pdf"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                Services Details.txt <i className="bx bxs-file-txt"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="services-contact-info">
          <h3>Contact Info</h3>

          <ul>
            <li>
              <div className="icon">
                <i className="bx bx-user-pin"></i>
              </div>
              <span>Phone:</span>
              <a href="tel:+21453545413" target="_blank">
                +2145 354 5413
              </a>
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location:</span>
              New York, USA
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-envelope"></i>
              </div>
              <span>Email:</span>
              <a href="mailto:hello@tarn.com">hello@tarn.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceSidebar;
