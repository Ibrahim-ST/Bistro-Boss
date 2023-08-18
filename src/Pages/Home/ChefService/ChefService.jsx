import React from "react";
import bgImg from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
    const bgImage = {
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "top"
    }
  return (
    <div style={bgImage} className="p-8 my-2 rounded h-full">
      <div className="bg-white p-16 m-16 rounded-md hover:bg-slate-50">
        <h1 className="text-4xl text-center font-serif font-thin uppercase">Bistro Boss</h1>
        <p className="text-justify">Welcome to our exclusive world of culinary delight! Elevate your
          dining experience to new heights with our exceptional chef
          service. Immerse yourself in a gastronomic journey tailored to your every desire. Our team of highly skilled and passionate chefs will create unforgettable moments for you and your guests. From intimate gatherings to grand celebrations, we bring the artistry of fine dining directly to your table.</p>
      </div>
    </div>
  );
};

export default ChefService;
