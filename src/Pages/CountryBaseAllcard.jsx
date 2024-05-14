import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountryBaseCard from "../components/CountryBaseCard";


const CountryBaseAllcard = () => {
  const cards = useLoaderData();
  const [tourSpots, setTourSpots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/secondTourSpots')
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
  return (
    <div>
     <h1 className="md:text-6xl text-2xl md:p-4 py-5 text-center font-sans text-green-400 font-bold">All Country Category</h1>
     <h1 className="md:text-2xl text-xl md:p-4 py-5 text-center font-sans text-gray-400 font-bold">Total: {uniqueArray.length} Countries</h1>
      <div className="grid  md:p-8 align-middle justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {
        uniqueArray.map((card, index) => (<CountryBaseCard key={index} card={card}></CountryBaseCard>))
      }
        </div>
    </div>
  );
};

export default CountryBaseAllcard;