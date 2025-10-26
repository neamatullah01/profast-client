// Benefits.jsx

import React from "react";
import img1 from "../../../assets/live-tracking.png";

// Data with valid image URLs
const benefitsData = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    imageUrl: img1,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    imageUrl: img1,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    imageUrl: img1,
  },
];

const Benefits = () => {
  return (
    // Section background remains light gray to make the white cards pop
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950 rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            // Card background is forced white
            className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between"
          >
            {/* Image/Illustration on the left */}
            <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
              <img
                src={benefit.imageUrl}
                alt={benefit.title}
                className="max-w-[180px] h-auto object-contain"
              />
            </div>

            {/* Text Content on the right */}
            <div className="w-full md:w-2/3 p-4 text-center md:text-left">
              {/* *** CHANGE 1: Title text is now explicitly text-black *** */}
              <h3 className="text-2xl font-semibold text-black mb-2">
                {benefit.title}
              </h3>

              {/* *** CHANGE 2: Description text is now a very dark gray (near-black) *** */}
              <p className="text-gray-900">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
