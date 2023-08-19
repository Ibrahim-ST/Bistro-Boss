import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
          <Banner /> 
          <Category /> 
          <ChefService />
          <PopularMenu />
          <CallUs />
          <ChefRecommends />
          <Featured />
        </div>
    );
};

export default Home;