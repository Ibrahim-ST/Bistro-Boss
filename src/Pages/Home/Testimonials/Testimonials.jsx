import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    }, [])
    console.log(reviews)
  return (
    <section className="my-20">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper "
      >
        {reviews.map(review => <SwiperSlide key={review._id}>
            <div className="my-4 mx-12 sm:mx-24 flex items-center flex-col">
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                />
                <FaQuoteLeft size={60} className="mt-8 text-black"/>
                <p className="py-6">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
             </SwiperSlide> )}
      </Swiper>
    </section>
  );
};

export default Testimonials;
