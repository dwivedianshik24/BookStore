import React, { useEffect, useState } from "react";

function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust based on navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`navbar bg-white sticky top-0 z-50 ${shadow ? "shadow-lg" : ""}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href="#home" onClick={(e) => handleSmoothScroll(e, "home")} className="text-black hover:text-pink-500">Home</a></li>
            <li><a href="#course" onClick={(e) => handleSmoothScroll(e, "course")} className="text-black hover:text-pink-500">Course</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="text-black hover:text-pink-500">Contact</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="text-black hover:text-pink-500">About</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-black hover:text-pink-500">The Bookstore</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, "home")} className="text-black hover:text-pink-500">Home</a></li>
          <li><a href="#course" onClick={(e) => handleSmoothScroll(e, "course")} className="text-black hover:text-pink-500">Course</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="text-black hover:text-pink-500">Contact</a></li>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="text-black hover:text-pink-500">About</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn bg-slate-50 text-black hover:bg-transparent hover:text-black border-2 border-black">Log Out</button>
      </div>
    </div>
  );
}

export default Navbar;
