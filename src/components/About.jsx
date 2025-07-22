import React from "react";
import bgImage from "../assets/room.jpg"; // Your local image or external URL
import Header from "./Header";

const About = () => {
  return (
    <>
    {/* <Header/> */}

    {/* <Header/> */}
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <h1 className="text-white text-4xl font-bold z-10">ABOUT US</h1>
      </div>

      {/* About Paragraph */}
      <section className="px-6 md:px-20 py-10 bg-white">
        <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto text-center">
          At Shivam PG, we understand how important it is to find a comfortable,
          safe, and well-maintained place when you are away from home. That’s
          why we created a premium yet affordable{" "}
          <span className="bg-orange-400 text-white font-bold px-1 rounded">
            PG for boys & girls in Bopal
          </span>
          , catering to students and professionals who need a hassle-free stay
          with all essential amenities.
        </p>
      </section>

      {/* Why Stand Out Section */}
      <section className="px-6 md:px-20 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Do We Stand Out?</h2>
        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
          Unlike other <span className="font-semibold">PGs in Bopal</span> that
          compromise on food quality and hygiene, Shivam PG prioritizes clean,
          comfortable living and nutritious, home-style meals. We ensure a
          well-maintained environment with regular cleaning and healthy dining,
          providing a safe and peaceful stay for students and professionals who
          value quality and well-being.
        </p>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918972225520" // Replace with your number
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-5 h-5"
        />
        WhatsApp us
      </a>
    </div>
    </>
  );
};

export default About;
