import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import LatestNews from "../components/LatestNews";
import MiddleSection from "../components/MiddleSection";



const Home = () => {
  return (
    <div>
      <LatestNews></LatestNews>
      <Banner></Banner>
      <MiddleSection></MiddleSection>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;