import React, { useState } from "react";
import "../../../assets/shop/order.jpg";
import CoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const drinks = menu.filter((item) => item.category === "drinks");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");


  return (
    <div className="">
      <Cover img={CoverImg} title={"our shop"}></Cover> 
      <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="text-center my-4 ">
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>          
        </TabList>
        <TabPanel>
            <OrderTab item={salad}>
            </OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={pizza}>
            </OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={soup}>
            </OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={dessert}>
            </OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={drinks}>
            </OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
