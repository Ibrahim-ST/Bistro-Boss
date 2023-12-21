import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, loading}) => {
  return (
    <div>
      <div className="w-min mx-auto">
        {loading && <span className="loading loading-infinity loading-lg bg-red-800"></span>}
      </div>
      <div className="grid grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-b-4 border-0 mt-4">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
