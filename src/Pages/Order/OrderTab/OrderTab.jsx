import React from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
 
import "swiper/css";
import "swiper/css/pagination"; 
import './index.css' 
import { Pagination } from "swiper/modules";

const OrderTab = ({ item }) => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  // const firstPage = item.slice(0,6);
  // console.log('i',item);
  // const secondPage = item.slice(6);
  // console.log(item, firstPage, secondPage);
  return (
    <div>
      <Swiper
        // pagination={pagination}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center ">
            {item.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center ">
            {secondPage.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default OrderTab;
