import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className=" pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen ">
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          {/* image - start */}
          <img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?cs=srgb&dl=pexels-asadphoto-1268855.jpg&fm=jpg" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
          {/* image - end */}

          {/* overlay - start */}
          <div className="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
          {/* overlay - end */}

          {/* text start */}

          




          <div className="relative w-full flex flex-col items-center p-4 sm:max-w-xl">
            <Fade direction="down">
            <p className="mb-4 text-center text-lg text-indigo-100 sm:text-xl md:mb-8">Very proud to introduce</p>
            </Fade>

            <Fade direction="right">
            <h1 className="mb-8  w-full text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl ">The Best Tourist Spot Is TourAsia</h1>
            </Fade>


            <Fade direction="down">
            <h1 className="mb-8 text-center text-xl font-bold text-sky-200 sm:text-xl md:mb-12 md:text-3xl ">We Are Connected to : <span className="mb-8 text-center text-xl font-semibold text-[#98FB98] sm:text-5xl md:mb-12 md:text-3xl ">
          
          <Typewriter
            words={['Bangladesh', 'Thailand', 'Malaysia', 'Indonesia', 'Vietnam']}
            loop={50}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
            
            </h1>
            </Fade>
            
            
            <div className="flex w-full flex-col gap-2.5 items-center sm:flex-row sm:justify-center">
            <Fade direction="up" duration={2000} delay={500}>
              <Link to={'/touristSpot'}> <a href="#" className="inline-block rounded-lg bg-indigo-500 md:px-8 px-6 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Book Now</a></Link>
              </Fade>
             <Fade direction="up" duration={2000} delay={500}>
              <Link to={'/addTouristSpot'}><a href="#" className="inline-block rounded-lg bg-gray-200 md:px-8 px-5 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">You Can Add</a></Link></Fade>
            </div>
            
          </div>
          {/* text end */}
        </section>
      </div>
    </div>
  );
};

export default Banner;