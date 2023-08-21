import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item => item.category ==='popular');
        setMenu(popularItems)
      });
  }, []);
  console.log(menu)
  return (
    <section className="my-12">
      <SectionTitle heading={"From Our menu"} subHeading={"Popular items"} />
      <div className="grid md:grid-cols-2 gap-10">
        {
            menu.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }
      </div>
      <div className="flex justify-center">
      <button className="btn btn-outline border-b-4   border-0 mt-4">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
