import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/asset";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the current route is one where the hero section should be hidden
  const hideHeroSection = () => {
    const hiddenRoutes = ["/about", "/contact", "/product"];
    return hiddenRoutes.includes(location.pathname);
  };

  // Dynamically set the hero text based on the current route
  const getHeroText = () => {
    switch (location.pathname) {
      case "/about":
        return "About Us";
      case "/product":
        return "Our Products";
      case "/contact":
        return "Contact Us";
      default:
        return "";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        {/* Navigation Bar */}
        <div className={`w-full bg-slate-600 p-5 hidden`}>
          <div className="flex flex-col gap-4 w-full justify-around md:flex md:flex-row md:justify-around md:items-center">
            {/* Social Links */}
            <div className="flex gap-7 text-2xl">
            <a href="">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="gap-5 flex flex-col text-base md:flex md:flex-row md:items-center md:justify-end text-cyan-50">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone"></i>
                <span>+91 9128102151</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope"></i>
                <span>mayankmehar4@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex item-center justify-between w-full h-20 md:h-20 p-3 bg-slate-100 ${isScrolled ? 'fixed top-0 z-50 transition-all' : 'transition-all'}`}>
          {/* Logo and Menu */}
          <div className=" -mt-2">
            <img src={assets.image6} width={70} />
          </div>
          <div className="block text-xl md:hidden cursor-pointer pr-4" onClick={toggleMenu}>
            <i
              className={`fa-solid ${
                isMenuOpen ? "fa-xmark relative z-10 py-1 text-3xl font-bold" : "fa-bars text-3xl font-bold"
              }`}
            ></i>
          </div>

          {/* Sliding Menu */}
          <div
            className={`block w-full h-80 -mt-2 p-6 bg-slate-400 md:hidden fixed transition-transform duration-300 ease-in-out ${
              isMenuOpen
                ? "transform translate-x-[-13px]"
                : "transform -translate-x-[-800px]"
            }`}
          >
            {/* Menu Items */}
            <div className="flex flex-col gap-10 items-center justify-center h-full text-white text-base font-bold">
              {/* NavLink items here */}
              <div className="hover:text-blue-400 transition-all" onClick={toggleMenu}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-950 text-xl" : ""
                  }
                >
                  Home
                </NavLink>
              </div>

              <div className="hover:text-blue-400 transition-all" onClick={toggleMenu}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-950 text-xl" : ""
                  }
                >
                  About
                </NavLink>
              </div>

              <div className="hover:text-blue-400 transition-all" onClick={toggleMenu}>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "text-blue-950 text-xl" : ""
                  }
                >
                  Project
                </NavLink>
              </div>

              <div className="hover:text-blue-400 transition-all" onClick={toggleMenu}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-950 text-xl" : ""
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>

          <div className="gap-11 hidden text-xl font-bold md:flex">
            {/* Large Screen NavLinks */}
            <div className="hover:text-2xl hover:text-blue-400 transition-all">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : ""
                }
              >
                Home
              </NavLink>
            </div>

            <div className="hover:text-2xl hover:text-blue-400 transition-all">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-300" : ""
                }
              >
                About
              </NavLink>
            </div>

            <div className="hover:text-2xl hover:text-blue-400 transition-all">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "text-blue-300" : ""
                }
              >
                Project
              </NavLink>
            </div>

            <div className="hover:text-2xl hover:text-blue-400 transition-all">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-300" : ""
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Conditionally render the Hero section */}
      {!hideHeroSection() && (
        <div className="flex flex-col align-middle justify-around w-full h-96 bg-cover bg-[url('./assets/headerimage/herosec.png')]">
          <div className="w-full text-white font-bold px-3 mt-7">
            <p className="text-lg md:text-2xl">// Full Cycle Software Development</p>
            <br />
            <p className="text-3xl md:text-5xl">FROM IDEA TO PRODUCT</p>
            <br />
            <p className="text-lg md:text-2xl">
              We are professionals that develop software
            </p>
            <br />
            <br />
            <button className="bg-slate-300 hover:bg-blue-950 text-gray-800 hover:text-white transition ease-in-out duration-500 w-36 p-2"><NavLink to="/about">Know More</NavLink></button>
          </div>
        </div>
      )}

      {/* Hero section for specific routes */}
      {hideHeroSection() && (
        <div className="flex flex-col align-middle justify-around w-full h-60 bg-cover bg-[url('./assets/headerimage/bg-pheader.jpg')]">
          <div className="w-full text-white font-bold pl-7">
            <p className="text-4xl md:text-5xl">{getHeroText()}</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;






// import { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
// import { assets } from "../assets/asset";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation(); // Get the current route

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Function to check if the current route is one where the hero section should be hidden
//   const hideHeroSection = () => {
//     const hiddenRoutes = ["/about", "/contact", "/product"];
//     return hiddenRoutes.includes(location.pathname);
//   };

//   // Dynamically set the hero text based on the current route
//   const getHeroText = () => {
//     switch (location.pathname) {
//       case "/about":
//         return "About Us";
//       case "/product":
//         return "Our Products";
//       case "/contact":
//         return "Contact Us";
//       default:
//         return "";
//     }
//   };

//   return (
//     <header>
//       <nav>
//         {/* Navigation Bar */}
//         <div className="w-full bg-slate-600 p-5 hidden">
//           <div className="flex flex-col gap-4 w-full justify-around md:flex md:flex-row md:justify-around md:items-center">
//             <div className="flex gap-7 text-2xl">
//               <a href="">
//                 <i className="fa-brands fa-x-twitter"></i>
//               </a>
//               <a href="">
//                 <i className="fa-brands fa-facebook"></i>
//               </a>
//               <a href="">
//                 <i className="fa-brands fa-linkedin"></i>
//               </a>
//               <a href="">
//                 <i className="fa-brands fa-instagram"></i>
//               </a>
//             </div>
//             <div className="gap-5 flex flex-col text-base md:flex md:flex-row md:items-center md:justify-end text-cyan-50">
//               <div className="flex items-center gap-3">
//                 <i className="fa-solid fa-phone"></i>
//                 <span>+91 9128102151</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <i className="fa-solid fa-envelope"></i>
//                 <span>mayankmehar4@gmail.com</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex item-center justify-between w-full h-20 md:h-20 p-3 bg-slate-100 fixed z-50">
//           <div className=" -mt-2">
//             {/* <img src={assets.image5} width={50} /> */}
//             <img src={assets.image6} width={70} />
//           </div>
//           <div className="block text-xl md:hidden cursor-pointer pr-4" onClick={toggleMenu}>
//             <i
//               className={`fa-solid ${
//                 isMenuOpen ? "fa-xmark relative z-10 py-1 text-3xl font-bold" : "fa-bars text-3xl font-bold"
//               }`}
//             ></i>
//           </div>

//           {/* Sliding Menu */}
//           <div
//             className={`block w-full h-80 -mt-2 p-6 bg-slate-400 md:hidden fixed transition-transform duration-300 ease-in-out ${
//               isMenuOpen
//                 ? "transform translate-x-[-13px]"
//                 : "transform -translate-x-[-800px]"
//             }`}
//           >
//             <div className="flex flex-col gap-10 items-center justify-center h-full text-white text-base font-bold">
//               <div className="hover:text-blue-400 transition-all" onClick={toggleMenu}>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive ? "text-blue-950 text-xl" : ""
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </div>

//               <div className="hover:text-blue-400 transition-all" onClick={toggleMenu}>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     isActive ? "text-blue-950 text-xl" : ""
//                   }
//                 >
//                   About
//                 </NavLink>
//               </div>

//               <div className="hover:text-blue-400 transition-all" onClick={toggleMenu}>
//                 <NavLink
//                   to="/product"
//                   className={({ isActive }) =>
//                     isActive ? "text-blue-950 text-xl" : ""
//                   }
//                 >
//                   Project
//                 </NavLink>
//               </div>

//               <div className="hover:text-blue-400 transition-all" onClick={toggleMenu}>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     isActive ? "text-blue-950 text-xl" : ""
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           <div className="gap-11 hidden text-xl font-bold md:flex">
//             <div className="hover:text-2xl hover:text-blue-400 transition-all">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-400" : ""
//                 }
//               >
//                 Home
//               </NavLink>
//             </div>

//             <div className="hover:text-2xl hover:text-blue-400 transition-all">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-300" : ""
//                 }
//               >
//                 About
//               </NavLink>
//             </div>

//             <div className="hover:text-2xl hover:text-blue-400 transition-all">
//               <NavLink
//                 to="/product"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-300" : ""
//                 }
//               >
//                 Project
//               </NavLink>
//             </div>

//             <div className="hover:text-2xl hover:text-blue-400 transition-all">
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? "text-blue-300" : ""
//                 }
//               >
//                 Contact
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </nav>

      // {/* Conditionally render the Hero section */}
      // {!hideHeroSection() && (
      //   <div className="flex flex-col align-middle justify-around w-full h-96 bg-cover bg-[url('./assets/headerimage/herosec.png')]">
      //     <div className="w-full text-white font-bold px-3 mt-7">
      //       <p className="text-lg md:text-2xl">// Full Cycle Software Development</p>
      //       <br />
      //       <p className="text-3xl md:text-5xl">FROM IDEA TO PRODUCT</p>
      //       <br />
      //       <p className="text-lg md:text-2xl">
      //         We are professionals that develop software
      //       </p>
      //       <br />
      //       <br />
      //       <button className="bg-slate-300 hover:bg-blue-950 text-gray-800 hover:text-white transition ease-in-out duration-500 w-36 p-2"><NavLink to="/about">Know More</NavLink></button>
      //     </div>
      //   </div>
      // )}

//       {/* Hero section for about, contact, and product */}
//       {hideHeroSection() && (
//         <div className="flex flex-col align-middle justify-around w-full h-60 bg-cover bg-[url('./assets/headerimage/bg-pheader.jpg')]">
//           <div className="w-full text-white font-bold pl-7">
//             <p className="text-4xl md:text-5xl">{getHeroText()}</p>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;