"use client";

import React from "react";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

const AosAnimation: React.FC = () => {
  React.useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 800,
      delay: 300,
      once: false,
      offset: 10,
    });

    // Dynamically load the WhatsApp widget script
    const script = document.createElement("script");
    script.src =
      "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Configure WhatsApp widget settings after the script loads
      const wa_btnSetting = {
        btnColor: "#16BE45",
        ctaText: "",
        cornerRadius: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: "right",
        whatsAppNumber: "971564255991",
        welcomeMessage:
          "Dear Jasser, I hope this message finds you well. I am interested in booking a free consultation to discuss the details of my project. It would be great to speak with one of your specialists to better understand how your services can support my needs.",
        zIndex: 999999,
        btnColorScheme: "light",
      };
      const wa_widgetSetting = {
        title: "IT Specialist",
        subTitle: "Typically replies within minutes.",
        headerBackgroundColor: "#16253E",
        headerColorScheme: "light",
        greetingText:
          "Hello, and thank you for reaching out.\nOur specialists are eager to learn more about your needs and are ready to assist you.",
        ctaText: "Start Chat",
        btnColor: "#EA602F",
        cornerRadius: 5,
        welcomeMessage: "Hello",
        btnColorScheme: "light",
        brandImage:
          "https://www.alberoit.ae/img/jasser.jpeg",
        darkHeaderColorScheme: {
          title: "#333333",
          subTitle: "#4F4F4F",
        },
      };
      window._waEmbed(wa_btnSetting, wa_widgetSetting); // Initialize the widget
    };

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default AosAnimation;
