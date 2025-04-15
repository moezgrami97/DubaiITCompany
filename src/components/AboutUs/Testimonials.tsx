"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonials-area bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title" style={{paddingTop:'40px'}}>
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Testimonials
            </span>
            <h2>What Our Clients are Saying?</h2>
            <p>
            Real Feedback from Our Satisfied Clients
            </p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                The team at AlberoIT has been incredible. They helped us redesign our website, making it more user-friendly and visually appealing. Their expertise in security has given us peace of mind, knowing that our online presence is protected.
                </p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                  {/* <Image
                    src="/img/testimonials/client1.jpg"
                    alt="image"
                    width={200}
                    height={50}
                    style={{
                      objectFit: "cover",  
                      borderRadius: "0%",  
                    }}
                  /> */}
                    <div className="title">
                      <h3>Autonation</h3>
                      <span>Used Cars in Dubai</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      src="/img/testimonials/client2.jpg"
                      alt="image"
                      width={50}
                      height={50}
                    />
                    <div className="title">
                      <h3>David Warner</h3>
                      <span>CEO at Envato</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      src="/img/testimonials/client3.jpg"
                      alt="image"
                      width={50}
                      height={50}
                    />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>CEO at ThemeForest</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>

          {/* <div className="testimonials-view-btn text-center">
            <Link href="/testimonials" className="default-btn">
              <i className="flaticon-view"></i>
              Check Out All Reviews <span></span>
            </Link>
          </div> */}
        </div>

        <div className="shape-img1">
          <Image
            src="/img/shape/shape1.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
