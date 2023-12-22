import React from 'react';

const FoodCard = ({item}) => {    
    const { name, image, price, recipe } = item;
    return (
      <div className="card px-2 sm:px-0 sm:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-[#111827] text-white absolute right-0 px-3 py-1 my-4 mr-4 font-semibold">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p className="p-0 m-0">{recipe}</p>
          <div className="card-actions ">
            <button className="btn btn-outline border-b-4 hover:border-b-4 border-0 text-[#BB8506] hover:text-[#BB8506] bg-slate-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;