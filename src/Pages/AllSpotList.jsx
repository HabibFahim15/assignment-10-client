import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";



const AllSpotList = () => {

  const spotLists = useLoaderData();


  return (
     <div className="md:m-20">
      <h1 className="my-12 text-center text-4xl font-semibold">Total Tour Spot: {spotLists.length} </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {
        spotLists.map(spotList => <SpotCard key={spotList._id} spotList={spotList}></SpotCard>)
      }
      </div>

     </div>
      
    
  );

};

export default AllSpotList;