import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

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

          




          <div className="relative w-full flex flex-col items-center p-4 sm:max-w-xl">
            <Fade direction="down">
            <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
            </Fade>

            <h1 className="mb-8  w-full text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl ">The best Tourist Spot TourAsia</h1>


            <Fade direction="down">
            <h1 className="mb-8 text-center text-xl font-bold text-white sm:text-5xl md:mb-12 md:text-3xl ">We have:
            <span className="mb-8 text-center text-xl font-bold text-yellow-400 sm:text-5xl md:mb-12 md:text-3xl ">
          
          <Typewriter
            words={['Bangladesh', 'Thailand', 'Malaysia', 'Indonesia', 'Vietnam']}
            loop={5}
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
              <Link to={'/touristSpot'}> <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Book Now</a></Link>
              </Fade>
             <Fade direction="up" duration={2000} delay={500}>
              <Link to={'/addTouristSpot'}><a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">You Can Add</a></Link></Fade>
            </div>
            
          </div>
          {/* text end */}
        </section>
      </div>
    </div>
  );
};

export default Banner;