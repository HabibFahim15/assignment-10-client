import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/touristSpot'}> All Tourists Spot</Link></li>
        <li><Link to={'/addTouristSpot'}>Add Tourists Spot</Link></li>
        <li><Link to={'/myList'}>My List</Link></li>
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost md:text-5xl font-semibold"><span className="text-gray-900">Tour</span><span className="text-orange-500">Asia</span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-normal md:text-base">
     <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/touristSpot'}> All Tourists Spot</Link></li>
        <li><Link to={'/addTouristSpot'}>Add Tourists Spot</Link></li>
        <li><Link to={'/myList'}>My List</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end flex md:gap-2 ">
    <Link to={'/signUp'} className="btn text-white hover:text-black bg-[#1A56DB]">Sign Up</Link>
    <Link to={'/signIn'} className="btn bg-[#10B981] text-white hover:text-black">Sign In</Link>
  </div>
</div>
    </div>
  );
};

export default Navbar;