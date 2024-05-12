import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaHotel } from "react-icons/fa6";
const MiddleSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="relative p-6 md:p-16">
    {/* Grid */}
    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
         Our All Type Facilities.And Tour Information are given below.
        </h2>

        {/* Tab Navs */}
        <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
            <span className="flex">
            <BiSolidPlaneAlt className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"  width="32" height="32" />
              
              <span className="grow ms-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Tour Ride</span>
                <span className="block mt-1 text-gray-800">We will arrange you the best airline for Travel. And relaxing journey.</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              <span className="grow ms-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Tour Guide</span>
                <span className="block mt-1 text-gray-800">We have Best Tour guide for make your tour better.And you can select them by their ratting.</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
            <span className="flex">
              <FaHotel className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"  width="32" height="32" />
              <span className="grow ms-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Hotel</span>
                <span className="block mt-1 text-gray-800">We will Arrange you the best Hotel for you better Experience.We are always arrange 5 Star Hotel.</span>
              </span>
            </span>
          </button>
        </nav>
        {/* End Tab Navs */}
      </div>
      {/* End Col */}

      <div className="lg:col-span-6">
        <div className="relative">
          {/* Tab Content */}
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img className="shadow-xl shadow-gray-200 rounded-xl" src="https://japanintercultural.com/wpdata/wp-content/uploads/2009/09/iStock-498170329-tiny.jpg" alt="Image Description" />
            </div>

            <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <img className="shadow-xl shadow-gray-200 rounded-xl" src="https://static.vecteezy.com/system/resources/previews/002/459/907/non_2x/tour-vacation-with-guide-cartoon-comic-illustration-isolated-on-a-mountain-background-a-group-of-tourists-listening-to-the-history-destination-free-vector.jpg" alt="Image Description" />
            </div>

            <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <img className="shadow-xl shadow-gray-200 rounded-xl" src="https://q-xx.bstatic.com/xdata/images/hotel/max500/157514861.jpg?k=0265ee002e3c7f43ad58d4b718d50755e0b81e1b536e8e9d4a0dca9e7a570af9&o=" alt="Image Description" />
            </div>
          </div>
          {/* End Tab Content */}

          {/* SVG Element */}
          <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
            </svg>
          </div>
          {/* End SVG Element */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}

    {/* Background Color */}
    <div className="absolute inset-0 grid grid-cols-12 size-full">
      <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-white w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
    </div>
    {/* End Background Color */}
  </div>
</div>

  );
};

export default MiddleSection;