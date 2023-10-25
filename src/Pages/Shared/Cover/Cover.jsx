import React from "react";
import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}  
      className=""    
    >
      <div className="hero h-[550px]">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold uppercase font-Cinzel">
              {title}
            </h1>
            <p className="mb-5 uppercase font-Cinzel">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
