import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items}) => {
    return (
      <div>
        <div className="grid grid-cols-2 gap-10">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-outline border-b-4   border-0 mt-4">
            Order Your Favorite Food
          </button>
        </div>
      </div>
    );
};

export default MenuCategory;