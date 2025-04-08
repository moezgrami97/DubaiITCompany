"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <Image
                  src="/img/error.png"
                  alt="image"
                  width={500}
                  height={198}
                />

                <h3>Error 404 : Page Not Found</h3>
                
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>

                <div className="btn-box">
                  <Link href="/" className="default-btn">
                    <i className="flaticon-history"></i>
                    Go Back <span></span>
                  </Link>
                  
                  <Link href="/" className="default-btn">
                    <i className="flaticon-earth-day"></i>
                    Homepage <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
