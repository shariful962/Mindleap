import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import {motion}  from 'framer-motion'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggleBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseBtn = ()=>{
    setIsOpen(false);
  }

  const handleScroll = ()=>{
    const sections = ['home', 'services', 'about', 'pricing','testimonial'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section=>{
       const element = document.getElementById(section);
       if(element){
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if(scrollPosition>=offsetTop && scrollPosition< offsetTop + height){
                setActiveSection(section)
            }
       }
    });
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>{
       window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  const handleScrollTo = (targetId)=>{
    const targetElement = document.getElementById(targetId);
    if(targetElement){
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'

        })
    }
  }



  const navlinks = (
    <ul className="flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          href="#home"
          onClick={(e)=>{
            e.preventDefault();
            handleCloseBtn();
            handleScrollTo('home');
          }}
          className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          href="#services"
          onClick={(e)=>{
            e.preventDefault();
            handleCloseBtn();
            handleScrollTo('services');
          }}
          className={`text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          href="#about"
          onClick={(e)=>{
            e.preventDefault();
            handleCloseBtn();
            handleScrollTo('about')
          }}
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
          
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          href="#pricing"
          onClick={(e)=>{
            e.preventDefault();
            handleCloseBtn();
            handleScrollTo('pricing');
          }}
          className={`text-white ${
            activeSection === "pricing" ? "isActive" : ""
          }`}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          href="#testimonial"
          onClick={(e)=>{
            e.preventDefault()
            handleCloseBtn();
            handleScrollTo('testimonial');
          }}
          className={`text-white ${
            activeSection === "testimonial" ? "isActive" : ""
          }`}
        >
          Testimoninal
        </motion.a>
      </li>
    </ul>
  );
  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo  */}
        <div>
          <a href="/">
            <img src="/public/logo.svg" alt="" />
          </a>
        </div>

        {/* nav-items  */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navlinks}</nav>
        </div>
        {/* button  */}

        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white bg-Primary hover:bg-Primary/90 py-2 px-4 rounded-lg"
          >
            {" "}
            Contact Us
          </a>
        </div>

        {/* humberger menu  */}
        
        <div className="block md:hidden">
          <button
            onClick={handleToggleBtn}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <CiMenuFries className="size-6" />
          </button>
        </div>
      </div>

      {/* mobile nav items  */}

      {isOpen && (
        <nav>
          <ul className="flex flex-col space-y-2">{navlinks.props.children}

          <li className="mt-4">
            <a
              href="#contact"
              onClick={(e) =>{
                e.preventDefault();
                handleCloseBtn();
              }}
              className="text-white bg-Primary hover:bg-Primary/90 py-2 px-4 rounded-lg"
            >
              Contact Us
            </a>
          </li>

          </ul>

          
        </nav>
      )}
    </header>
  );
};

export default Navbar;
