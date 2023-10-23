import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import ChefService from '../../Home/ChefService/ChefService';
import bgImg from "../../../assets/home/chef-service.jpg";

const Menu = () => {
    
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title={"our menu"} />
        <PopularMenu />
        <ChefService
          bgImg={bgImg}
          title={"Desserts"}
          bgMode={"bg-black"}
          opacity={"bg-opacity-30"}
          text={"text-white"}
        />
        <PopularMenu />
        <ChefService
          bgImg={bgImg}
          title={"pizza"}
          bgMode={"bg-black"}
          opacity={"bg-opacity-30"}
          text={"text-white"}
        />
        <PopularMenu />
        <ChefService
          bgImg={bgImg}
          title={"Salads"}
          bgMode={"bg-black"}
          opacity={"bg-opacity-30"}
          text={"text-white"}
        />
        <PopularMenu />
        <ChefService
          bgImg={bgImg}
          title={"soups"}
          bgMode={"bg-black"}
          opacity={"bg-opacity-30"}
          text={"text-white"}
        />
        <PopularMenu />
      </div>
    );
};

export default Menu;