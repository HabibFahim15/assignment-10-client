import { Fade } from "react-awesome-reveal";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCoPresent, MdOutlineEmail } from "react-icons/md";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router-dom";


const CountryBaseCard = ({card}) => {
  console.log(card);
  const { _id,spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, visitor, email, name, image } = card;
  return (
    <Fade direction="up">
      <div className="max-w-lg p-4 shadow-md bg-green-50 text-gray-800 flex flex-col justify-between h-full">
    <div className="space-y-4">
    <div className="flex items-center justify-center ">
          <span className="text-3xl font-semibold">{countryName}</span>
        </div>
      <div className="space-y-2">
        <img src={image} alt="" className="block object-cover transition-all duration-300 hover:scale-105 object-center w-full rounded-md h-72 bg-gray-500" />
        
      </div>
      <div className="space-y-2">
        <a rel="noopener noreferrer" href="#" className="block">
          <h3 className="md:text-3xl text-2xl font-bold text-blue-600">{spotName}</h3>
        </a>
        <p className="leading-snug text-gray-500">{shortDescription}</p>
        <div>
          <h1 className="flex mb-3 font-semibold gap-1 items-center">
            <HiLocationMarker /> {location}
          </h1>
          <hr />
          <div className="flex mb-2 justify-between font-semibold mt-3">
            <h1 className="flex font-semibold gap-1 items-center">Total : {averageCost}<TbCoinTakaFilled /></h1>
            <h1 className="flex items-center">Visitor: {visitor} /<MdCoPresent /></h1>
          </div>
          <div className="flex mb-4  justify-between">
            <h1 className="font-semibold">Time: {travelTime}</h1>
            <h1 className="font-semibold">Season: {seasonality}</h1>
          </div>
          <hr />
          <div className="mb-4">
            <h1 className="mt-2 text-lg font-serif">Created By:</h1>
            <div className="flex justify-between mt-1">
              <h1 className="flex items-center font-mono gap-1"><FaUserAlt />{name}</h1>
              <h1 className="flex items-center font-sans gap-1"><MdOutlineEmail />{email}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Link to={`/${countryName}`} className="btn bg-indigo-400 text-white font-semibold w-full mt-auto">All of {countryName} </Link>
  </div>
    </Fade>
  );
};

export default CountryBaseCard;