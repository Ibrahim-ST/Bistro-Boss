import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import ChefService from '../../Home/ChefService/ChefService';
import bgImg from "../../../assets/home/chef-service.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";


import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCatagory';

const Menu = () => {
    const [menu] = useMenu();
    console.log(menu);
    const dessert = menu.filter(item => item.category ==='dessert');
    const offered = menu.filter(item => item.category ==='offered');
    const pizza = menu.filter(item => item.category ==='pizza');
    const soup = menu.filter(item => item.category ==='soup');
    const salad = menu.filter(item => item.category ==='salad');
    return (
      <div className='mb-2'>
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
        {/* main cover  */}
        <Cover img={menuImg} title={"our menu"} />
        {/* offer menu item  */}
        <SectionTitle
          subHeading={"Don't Miss"}
          heading={"Today's offer"}
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu item  */}
        <ChefService
          bgImg={dessertImg}
          title={"Desserts"}
          bgMode={"bg-black"}
          opacity={"bg-opacity-30"}
          text={"text-white"}
        />
        <MenuCategory items={dessert} />
        {/* pizza menu item */}
        <ChefService
          bgImg={pizzaImg}
          title={"pizza"}
          bgMode={"bg-black"}
          opacity={"bg-opacity-30"}
          text={"text-white"}
        />
        <MenuCategory items={pizza} />
        {/* salad menu item */}
        <ChefService
          bgImg={saladImg}
          title={"Salads"}
          bgMode={"bg-black"}
          opacity={"bg-opacity-30"}
          text={"text-white"}
        />
        <MenuCategory items={salad} />
        {/* soups menu item  */}
        <ChefService
          bgImg={soupImg}
          title={"soups"}
          bgMode={"bg-black"}
          opacity={"bg-opacity-30"}
          text={"text-white"}
        />
        <MenuCategory items={soup} />
      </div>
    );
};

export default Menu;