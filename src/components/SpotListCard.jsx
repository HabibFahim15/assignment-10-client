import Swal from "sweetalert2";

const SpotListCard = ({addedSpot}) => {

  const { _id,spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, visitor,  name, image } = addedSpot;

  const handleDelete = _id =>{
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
           
          console.log('delete confirm');
          fetch(`http://localhost:5000/tourSpots/${_id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire({
             title: "Deleted!",
             text: "This Spot has been deleted.",
             icon: "success"
           });
            }
          })
        }
      });
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container md:px-5 md:py-24 mx-auto">
       
        <div className="flex flex-wrap  border">
          <div className="p-4 lg:w-full">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg  h-48 object-cover object-center sm:mb-0 mb-4" src={image} />
              <div className="md:flex w-full md:justify-between sm:pl-8">
                 <div className="text-gray-800">
                    <h1 className=" text-2xl font-bold mb-2"> {spotName} </h1>
                    <h2 className="text-lg mb-2 font-serif"> {countryName} </h2>
                    <h3 className="text-md mb-2"> {location} </h3>
                    <h3 className="text-md font-semibold text-black mb-2"> Season:<span className=" text-gray-600">{seasonality}</span> </h3>
                    <h3 className="text-md font-semibold text-black mb-2"> Cost:<span className=" text-gray-600">{averageCost}</span> </h3>
                    <h3 className="text-md font-semibold text-gray-600 mb-2"> (#{travelTime}, #{visitor} visit per year)  </h3>
                    <h3 className="text-md font-semibold text-black mb-2">Created by: {name}</h3>
                 </div>
                 <div className="grid grid-cols-1 gap-4">
                 <button className="btn btn-info text-white">Info</button>
                 <button className="btn btn-warning text-white">Edit</button>
                      <button
                      onClick={() => handleDelete(_id)}
                      className="btn btn-error text-white">Delete</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotListCard;
