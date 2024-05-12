import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const cards = useLoaderData()
  const { id } = useParams();
  console.log(id);
  const idInt = parseInt(id);
  console.log(idInt);

  console.log(cards);
  const card = cards.find(card => card._id === id);
  console.log(card);
  if (!card) {
    return (
      <div className="justify-center">
        <p>Sorry, the card you are looking for is not available.</p>
        <button className="btn"><Link to={'/'}>Home</Link></button>

      </div>
    );
  }

  const { spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, visitor, email, name, image } = card;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg  h- overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={image} />
          </div>
          <div>
             <h3 className="font-semibold">{location},{countryName}</h3>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <h1 className="text-xl font-semibold">Created By:</h1>
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{name}</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">{email}</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-3xl font-semibold ">{spotName}</h1>
              <p className="leading-relaxed text-md mt-3 text-gray-400 mb-4">{shortDescription}</p>
              <div className="flex mt-2 justify-between">
                 <h3 className="font-semibold">Travel Time : <span>{travelTime}</span> </h3>
                 <h3 className="font-semibold">Total Cost : <span>{averageCost}</span> </h3>
              </div>
              <div className="flex mt-2 justify-between">
              <h3 className="font-semibold sm:text-xs">Best Time : <span>{seasonality}</span> </h3>
              <h3 className="font-semibold">Total Visit : <span>{visitor} per year</span> </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViewDetails;