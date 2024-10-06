import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import SpotCard from "../components/SpotCard";

const AllSpotList = () => {
  const spotLists = useLoaderData();
  const [searchQuery, setSearchQuery] = useState(""); 

  
  const filteredSpots = spotLists.filter((spot) =>
    spot.spotName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spot.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spot.location.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div className="md:m-20">
      <h1 className="my-12 text-center  text-4xl font-semibold">
        Available Tour Spots: {filteredSpots.length}
      </h1>

      {/* Search input field */}
      <div className="mb-8 flex justify-end">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text"
            className="grow w-72"
            placeholder="Search tour spot..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
      </div>



      {/* Display filtered cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSpots.map((spot) => (
          <SpotCard key={spot._id} spotList={spot} />
        ))}
      </div>
    </div>
  );
};

export default AllSpotList;
