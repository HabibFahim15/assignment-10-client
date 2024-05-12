import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="md:flex grid  md:mx-40 my-9">
      <button className="btn text-white bg-blue-500">Latest Information</button>
      <Marquee className="font-semibold" speed={100} pauseOnHover={true}>
        Welcome to Our Tour Asia. You want to travel and wanna enjoy yourself.Then you are in the right Place.This is a commercial Tour guider.You can Travel All of best place in Asia.We have more than 10 country Travel Opportunity.
      </Marquee>
    </div>
  );
};

export default LatestNews;