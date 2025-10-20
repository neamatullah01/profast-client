import React from "react";
import Marquee from "react-fast-marquee";
import company1 from "../../../assets/brands/amazon.png";
import company2 from "../../../assets/brands/amazon_vector.png";
import company3 from "../../../assets/brands/casio.png";
import company4 from "../../../assets/brands/moonstar.png";
import company5 from "../../../assets/brands/randstad.png";
import company6 from "../../../assets/brands/start-people 1.png";
import company7 from "../../../assets/brands/start.png";

const ClientLogosMarquee = () => {
  const logos = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
  ];
  return (
    <section className="py-16 bg-[#FAFDF0]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          We've helped thousands of sales teams
        </h2>

        {/* Marquee Container */}
        <Marquee className="py-6" speed={50} gradient={false} pauseOnHover>
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center px-8"
            >
              <img
                src={logo}
                alt={`client-logo-${idx}`}
                className="h-4 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
