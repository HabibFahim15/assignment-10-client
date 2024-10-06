import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import LatestNews from "../components/LatestNews";
import MiddleSection from "../components/MiddleSection";
import HomeSpotCard from "../components/HomeSpotCard";
import StepGuide from "../components/StepGuide";
import { useEffect, useState } from "react";
import CountryBaseCard from "../components/CountryBaseCard";

const Home = () => {
  const cards = useLoaderData();
  const firstSixCards = cards.slice(0, 6);
  const [tourSpots, setTourSpots] = useState([]);

  useEffect(() => {
    fetch('https://assingment-10-server-seven.vercel.app/secondTourSpots')
      .then(response => response.json())
      .then(data => setTourSpots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  // Create a map to store unique entries based on country
  const uniqueMap = new Map();

  // Add spots data to uniqueMap
  cards.forEach(item => {
    uniqueMap.set(item.countryName, item);
  });

  // Add tourSpots data to uniqueMap, overwrite if countryName exists
  tourSpots.forEach(item => {
    uniqueMap.set(item.countryName, item);
  });

  // Convert the map values to an array
  const uniqueArray = Array.from(uniqueMap.values());

  console.log(uniqueArray);
  const CountryFirstSixCards = uniqueArray.slice(0, 6);
  return (
    <div>
      <LatestNews />
      <Banner />

      <div>
        <h1 className="md:text-6xl text-3xl md:p-4 py-5 text-center font-sans  font-semibold">Our Tour Section</h1>
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
      <h1 className="md:text-6xl text-3xl md:p-4 py-5 text-center font-sans text-green-500 font-bold">Country Category</h1>
      <div className="grid  md:p-8 align-middle justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-4">

        {
          CountryFirstSixCards.map((card, index) => (<CountryBaseCard key={index} card={card}></CountryBaseCard>))
        }
      </div>
      <div className="flex justify-center my-4">
        <Link to={'/countryBased'} className="btn bg-lime-500 text-white w-36">See more</Link>
      </div>

      <StepGuide></StepGuide>
    </div>
  );
};

export default Home;
