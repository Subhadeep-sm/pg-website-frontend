import React from "react";
import room from "../assets/room.jpg";

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="px-6 py-12 bg-[#fff] text-[#152b37]">
                    <h2 className=" max-w-7xl mx-auto text-4xl font-bold mb-4 text-[#222831]">About Us</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: IMAGE + STATS */}
          <div className="relative">
            <img
              src={room}
              alt="Room"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute top-6 left-6 bg-[#faf0e6] p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#948979]">250</h3>
              <p className="text-sm">Happy Tenants!</p>
            </div>
            <div className="absolute bottom-6 right-6 bg-[#faf0e6] p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#948979]">15+</h3>
              <p className="text-sm">PG</p>
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div>
            {/* <h2 className="text-4xl font-bold mb-4 text-[#295061]">About Us</h2> */}
            <p className="mb-4 text-lg">
              Discover Royal PG – A Premium {" "}
              <span className="text-[#222831] font-bold">
                Boys and Girls PG in Mahisbathan, Saltlake Sector 5, Kolkata,
              </span>{" "}
              designed for comfort, safety, and peace of mind. Whether you're a student or a working professional, we offer an ideal stay that feels just like home.
            </p>
            <p className="mb-6">
              Enjoy spacious, fully furnished rooms, healthy and tasty homemade food, and reliable 24/7 security. At Royal PG, we maintain top-notch hygiene and service standards—setting us apart from other PGs in the Saltlake area that often fall short on cleanliness and care.
            </p>
            <button className="bg-[#222831] hover:bg-[#948979] hover:text-[#222831] text-white font-semibold px-5 py-2 rounded">
              Call Now to Book!
            </button>
          </div>

          

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/918972225520"
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
      </section>
    </>
  );
};

export default About;
