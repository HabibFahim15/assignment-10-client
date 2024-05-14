import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAdd = () => {

  const tourSpots = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);
  console.log(tourSpots);
  const update = tourSpots.find(tourSpot => tourSpot._id === id);
  console.log(update);
  if (!update) {
    return (
      <div className="justify-center">
        <p>Sorry, the card you are looking for is not available.</p>
        <button className="btn"><Link to={'/'}>Home</Link></button>

      </div>
    );
  }

  const {_id,spotName, countryName,location,shortDescription,averageCost,seasonality,travelTime,visitor,image} = update;

  const handleUpdateSpot = e => {
    e.preventDefault();
    const form = e.target;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const visitor = form.visitor.value;
    const image = form.image.value;
    
    const updateSpot ={_id,spotName, countryName,location,shortDescription,averageCost,seasonality,travelTime,visitor,image}


    fetch(`https://assingment-10-server-seven.vercel.app/tourSpots/${_id}`,{
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(updateSpot)
  })
  
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    if(data.modifiedCount > 0){
      Swal.fire({
        title: 'Success',
        text: 'The Information are Updated',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })
  }
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Update Spot : {spotName}</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of Update to Existing Spot Info.You can update or solve any mistake.</p>
    </div>
    

    
    <form onSubmit={handleUpdateSpot} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Spot Name*</label>
        <input name="spotName" defaultValue={spotName} required className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Country name*</label>
        <input name="countryName" defaultValue={countryName} required className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Location</label>
        <input name="location" defaultValue={location} required className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Short Description</label>
        <input name="shortDescription" defaultValue={shortDescription} required className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Average Cost</label>
        <input name="averageCost" defaultValue={averageCost} required className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Seasonality</label>
        <input name="seasonality" defaultValue={seasonality} required className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>
      <div>
        <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Travel Time</label>
        <input name="travelTime" defaultValue={travelTime} required className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>
      <div>
        <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Total Visitor/Year</label>
        <input name="visitor" defaultValue={visitor} required className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>
      
      <div className="col-span-2">
        <label  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Image*</label>
        <input name="image" required defaultValue={image} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Submit</button>

      </div>

      <p className="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </form>
  </div>
</div>
  );
};

export default UpdateAdd;