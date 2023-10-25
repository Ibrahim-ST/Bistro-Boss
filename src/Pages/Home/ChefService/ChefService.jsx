import React from "react";

const ChefService = ({ bgImg, title, bgMode, opacity, text }) => {
  const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center center",
  };
  return (
    <div className="mt-10 mb-20">
      <div style={bgImage} className=" bg-fixed p-8 my-2 rounded h-full">
        <div
          className={`${bgMode} ${opacity} ${text}  sm:p-16 px-2 sm:m-16 rounded-md  `}
        >
          <h1 className="text-4xl text-center font-serif font-thin uppercase">
            {title}
          </h1>
          <p className="text-justify">
            Welcome to our exclusive world of culinary delight! Elevate your
            dining experience to new heights with our exceptional chef service.
            Immerse yourself in a gastronomic journey tailored to your every
            desire. Our team of highly skilled and passionate chefs will create
            unforgettable moments for you and your guests. From intimate
            gatherings to grand celebrations, we bring the artistry of fine
            dining directly to your table.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
