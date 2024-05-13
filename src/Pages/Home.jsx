
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import LatestNews from "../components/LatestNews";
import MiddleSection from "../components/MiddleSection";
import HomeSpotCard from "../components/HomeSpotCard";

const Home = () => {
  const cards = useLoaderData();

  const firstSixCards = cards.slice(0, 6);

  console.log(firstSixCards);

  return (
    <div>
      <LatestNews />
      <Banner />

      <div>
        <h1 className="md:text-5xl text-3xl md:p-4 py-5 text-center font-sans text-purple-700 font-semibold">Our Tour Section</h1>
      <div className="grid  md:p-8 align-middle justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {firstSixCards.map((card, index) => (
          <HomeSpotCard key={index} card={card} />
        ))}
        
      </div>
        <div className="flex justify-center my-4">
        <Link to={'/touristSpot'} className="btn btn-outline w-36">See more</Link>
        </div>
      </div>

      <MiddleSection />
      <Carousel />
    </div>
  );
};

export default Home;
