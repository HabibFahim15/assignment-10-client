import { useLoaderData } from "react-router-dom";
import SpotListCard from "../components/SpotListCard";

const MyList = () => {

  const addedSpots = useLoaderData()

  return (
    <div className="md:mx-20">
       <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-2 text-gray-900">Total spot added : {addedSpots.length}</h1>
        </div>

        <div className="grid xl:grid-cols-2  gap-8">
        {
          addedSpots.map(addedSpot => <SpotListCard key={addedSpot._id} addedSpot={addedSpot}></SpotListCard>)
        }
        </div>

      
    </div>
  );
};

export default MyList;