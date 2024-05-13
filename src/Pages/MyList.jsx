// import { useLoaderData } from "react-router-dom";
import SpotListCard from "../components/SpotListCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

   const [addedSpots, setSpots] = useState([]);
  useEffect(() =>{
    fetch(`http://localhost:5000/tourSpots/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setSpots(data);
    })
  },[user])

  // const allAddedSpots = useLoaderData();
  

  return (
    <div className="bg-gray-200">
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
    </div>
    
  );
};

export default MyList;