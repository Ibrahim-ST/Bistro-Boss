import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed my-20 pt-8 text-white saturate-[1.3] font-Inter">
      <SectionTitle heading={"Featured Item"} subHeading={"Check it out"} />
      <div className="md:flex justify-center items-center gap-10 pb-20 pt-12
       px-3 sm:px-36 text-white">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            eius laborum, reprehenderit quos voluptatum consectetur veniam ea
            quia molestiae totam! Natus esse consequatur repudiandae! Pariatur
            quis labore ab fuga, earum illo cum sunt perferendis asperiores.
            Nulla saepe architecto deserunt nisi amet fugit, molestias laborum,
            doloribus iure laboriosam corrupti. Voluptates, ut.
          </p>
          <button className="btn btn-outline border-b-4 text-white  border-0 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
