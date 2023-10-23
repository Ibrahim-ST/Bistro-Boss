import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import bgImg from "../../../assets/home/chef-service.jpg";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Home</title>
        </Helmet>
        <Banner />
        <Category />
        <ChefService bgImg={bgImg} title={"Bistro Boss"} bgMode={"bg-white"}/>
        <PopularMenu />
        <CallUs />
        <ChefRecommends />
        <Featured />
        <Testimonials />
      </div>
    );
};

export default Home;