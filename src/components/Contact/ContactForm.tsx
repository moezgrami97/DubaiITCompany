"use client";

import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

interface FormValues {
  name: string;
  email: string;
  number: string;
  subject: string;
  text: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
  });

  const [isSending, setIsSending] = useState<boolean>(false); // to show loading state
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);


    const plainFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value])
    );

    emailjs
      .send(
        "service_g80j51t", // Replace with your service ID
        "template_3es4j0k", // Replace with your template ID
        plainFormData, // Form data to be sent in the email
        "mmxmpx1bu9hDyiuyl" // Replace with your user ID from EmailJS
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setResponseMessage("Thank you! Your message has been sent.");
          setFormData({
            name: "",
            email: "",
            number: "",
            subject: "",
            text: "",
          });
        },
        (error) => {
          console.error("Error sending email", error);
          setResponseMessage("Oops! Something went wrong, please try again.");
        }
      )
      .finally(() => {
        setIsSending(false); // Reset sending state
      });


    // Here you can handle form submission, for now, let's just log the data
    console.log(formData);
  };

  return (
    <>
      <div className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <Image
                src="/img/star-icon.png"
                alt="image"
                width={32}
                height={34}
              />
              Get in Touch
            </span>
            <h2>Ready to Get Started?</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="contact-image">
                <Image
                  src="/img/contact.png"
                  alt="image"
                  width={750}
                  height={620}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="number"
                          placeholder="Phone number"
                          className="form-control"
                          value={formData.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          className="form-control"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols={30}
                          rows={6}
                          placeholder="Write your message..."
                          className="form-control"
                          value={formData.text}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="default-btn">
                        <i className="flaticon-tick"></i> {isSending ? "Sending..." : "Send Message"}
                        <span></span>
                      </button>
                    </div>
                  </div>
                </form>

                {responseMessage && <p>{responseMessage}</p>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
