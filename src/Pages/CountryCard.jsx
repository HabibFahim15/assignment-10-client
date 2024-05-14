import { useLoaderData, useParams } from "react-router-dom";
import CountryGroupedCard from "../components/CountryGroupedCard";


const CountryCard = () => {
  const countryCards = useLoaderData();
  const { countryName } = useParams();

  // Filter cards based on the countryName parameter
  const filteredCards = countryCards.filter(card => card.countryName === countryName);

  console.log(filteredCards);

  return (
    <div>
      <h1 className="md:text-6xl text-3xl md:p-4 py-5 text-center font-sans text-green-500 font-bold">Country Category</h1>
      <div className="grid  md:p-8 align-middle justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        
      {
        filteredCards.map((card, index) => (<CountryGroupedCard key={index} card={card}></CountryGroupedCard>))
      }
        </div>
    </div>
  );
};

export default CountryCard;