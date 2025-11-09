import { useContext } from "react";
import { Link,  NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
     
       const handleSignOut = () => {
           logOut()
            .then()
             .catch()
       }  
    const navLinks = <>
        <li><NavLink to ='/'>Home</NavLink></li>
        <li><NavLink to ='/explore'>Explore Event</NavLink></li>
        <li><NavLink to ='/pricing'>Pricing</NavLink></li>
        <li><NavLink to ='/blog'>Blog</NavLink></li>
        <li className="dropdown" > 
       
 <NavLink  to ='/pages' >Pages</NavLink>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><Link to='/create'>Create Event</Link></li>
    <li><Link to='/explore'>Event View</Link></li>
  </ul>

          </li>
    </>

                   
 

    return (
        <div >
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
     <div className="flex items-center">
     <Link to="/">
      <img className="w-30 h-25 bg-none" src="https://i.ibb.co.com/R4Ncc1DT/Event-Ease-logo-01-1.jpg" alt="" />
     </Link>
     
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            
        </div>
      </div>
    {
        user ?
        <button onClick={ handleSignOut } className="btn bg-[#8592eb] bg-opacity-50 text-white w-24">Sign Out</button>
        :
        <Link to="/login">
        <button className="btn bg-[#8592eb] bg-opacity-50 text-white w-24">Login</button>
        </Link>

      }


           
  <label className="swap swap-rotate">
  {/* hidden checkbox controls the state */}
  <input
    type="checkbox"
    defaultChecked={localStorage.getItem("theme") === "dark"}
    onChange={(e) => {
      const theme = e.target.checked ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }}
  />

  {/* Sun icon (light mode) */}
  <svg
    className="swap-on w-10 h-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M5.64 17l-.71.71a1..." />
  </svg>

  {/* Moon icon (dark mode) */}
  <svg
    className="swap-off w-10 h-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M21 12.79A9 9 0 0111.21 3..." />
  </svg>
</label>









    
  </div>
</div>
        </div>
    );
};

export default Header;