"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/" className="logo">
                  <Image
                    src="/img/logo.png"
                    alt="logo"
                    width={130}
                    height={54}
                  />
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse.
                </p>

                <ul className="social-link">
                  <li>
                    <a
                      className="d-block"
                      target="_blank"
                      href="https://www.facebook.com/"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-block"
                      target="_blank"
                      href="https://www.twitter.com/"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-block"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-block"
                      target="_blank"
                      href="https://www.linkedin.com/"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Explore</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/blog">Our Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="single-footer-widget">
                <h3>Resources</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/team">Our Scientists</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/services">SaaS Solutions</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    175 5th Ave, New York, NY 10010, <br /> United States
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:+44587154756">+1 (123) 456 7890</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href="mailto:hello@tarn.com">hello@tarn.com</a>
                  </li>
                  <li>
                    <i className="bx bxs-inbox"></i>
                    <a href="tel:+557854578964">+55 785 4578964</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright &copy;{currentYear} <strong>Tarn</strong> All rights
                  reserved{" "}
                  <a target="_blank" href="https://envytheme.com/">
                    EnvyTheme
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-map">
          <Image
            src="/img/footer-map.png"
            alt="image"
            width={693}
            height={362}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
