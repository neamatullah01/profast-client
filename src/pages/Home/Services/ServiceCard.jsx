import React from "react";

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <div className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300 hover:bg-amber-400">
      <div className="card-body items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="card-title text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
