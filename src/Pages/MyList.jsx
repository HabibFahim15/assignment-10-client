import { useLoaderData } from "react-router-dom";
import SpotListCard from "../components/SpotListCard";
import { useState } from "react";

const MyList = () => {

  const allAddedSpots = useLoaderData();
  const [addedSpots, setSpots] = useState(allAddedSpots);

  return (
    <div className="md:mx-20">
       <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-2 text-gray-900">Total spot added : {addedSpots.length}</h1>
        </div>

        <div className="grid xl:grid-cols-2  gap-8">
        {
          addedSpots.map(addedSpot => <SpotListCard key={addedSpot._id} addedSpot={addedSpot} addedSpots={addedSpots} setSpots={setSpots}> </SpotListCard>)
        }
        </div>

      
    </div>
  );
};

export default MyList;