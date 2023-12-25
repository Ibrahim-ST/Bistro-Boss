import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const handleAddToCart = (item) => {
    console.log(item);
    const orderItem = {
      name,
      image,
      price,
      recipe,
      menuItemId:_id,
      email: user.email
    };
    if (user && user.email) {
      fetch("http://localhost:5000/carts", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login NOW!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-b-4 hover:border-b-4 border-0 text-[#BB8506] hover:text-[#BB8506] bg-slate-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
