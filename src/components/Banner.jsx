import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen ">
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          {/* image - start */}
          <img src="https://static.seeker.io/media/img/1/78ce72b1-b411-4172-95f8-f47bfdbaea7c-1400.jpg?placeid=1682&name=Johannesburg,%20Johannesburg&lat=-26.204103&lng=28.047304" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
          {/* image - end */}

          {/* overlay - start */}
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
          {/* overlay - end */}

          {/* text start */}
          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl ">Revolutionary way to build the web</h1>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Link to={'/touristSpot'}> <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Book Now</a></Link>
             
              <Link to={'/addTouristSpot'}><a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">You Can Add</a></Link>
            </div>
          </div>
          {/* text end */}
        </section>
      </div>
    </div>
  );
};

export default Banner;