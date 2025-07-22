import React from "react";
import roomImage from "../assets/facilities-room.jpg"; // use your local image or online link
import Header from "./Header";


const Facilities = () => {
  return (
    <>
    <Header />
    <div>
      {/* Header Hero Image with Title */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${roomImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="text-white text-3xl md:text-4xl font-bold z-10">
          Shivam PG Facilities
        </h1>
      </div>

      {/* PG Amenities Section */}
      <section className="py-10 px-4 md:px-20 text-center bg-white">
        <h2 className="text-2xl font-bold mb-4">PG Amenities</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
          Shivam PG provides top-notch amenities to ensure a hassle-free and
          comfortable stay. With world-class facilities like high-speed Wi-Fi,
          nutritious meals, regular housekeeping, and secure premises, residents
          enjoy convenience and peace of mind. Every detail is designed to
          support a smooth, stress-free lifestyle for students and professionals
          alike.
        </p>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
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

export default Facilities;
