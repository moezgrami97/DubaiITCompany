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
          "Hello, and thank you for reaching out.\nOur specialists are eager to learn more about your needs and are ready to assist you.",
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
          "https://scontent.fdxb3-1.fna.fbcdn.net/v/t39.30808-6/482000873_9041391832655995_8527792425599040484_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=d6IN9cca-84Q7kNvwGpD7IW&_nc_oc=AdmftRyti1BPYu6RaIdr01jUwIQiiL0hjsmjtRXSbQIhPro5LhmtmXrhKAQN_6rjF8o&_nc_zt=23&_nc_ht=scontent.fdxb3-1.fna&_nc_gid=wkBusjCXsJY_n-GT_VtePg&oh=00_AfFzSpVN1tuK1DSrnBesvR4FOYDqFTXqqBH3aunyVPSP_g&oe=681D5FE5",
        darkHeaderColorScheme: {
          title: "#333333",
          subTitle: "#4F4F4F",
        },
      };
      _waEmbed(wa_btnSetting, wa_widgetSetting); // Initialize the widget
    };

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default AosAnimation;
