
import { useState } from "react";



import { IoMdClose,IoMdMenu } from "react-icons/io";


const navItems = [
    { label: "Programs", href: "programs" },
    { label: "Trainers", href: "trainers" },
    { label: "Pricing", href: "pricing" },
    { label: "Contact", href: "contact" },
 
  ];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-white text-black">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
        <a href="/">
  <div className="flex items-center flex-shrink-0">
    <img className="h-10 w-10 mr-2" src="/logo4.svg" alt="Logo" />
    <span className="text-xl tracking-tight font-mono">Mevin club</span>
  </div>
</a>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
        
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md"
            >
              Book Apointment
            </a>
          </div>
          {/*mobile devices */}
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 text-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
        
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800"
              >
                Book
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;