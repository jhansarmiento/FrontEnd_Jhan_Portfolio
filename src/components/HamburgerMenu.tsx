import { useState } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative">
        <button
          className="text-gray-500 w-10 h-10 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
        
        {open && (
          <ul className="text-end absolute right-1/2 bg-white">
            <li className="text-sm min-[400px]:text-xl p-1 text-nowrap">About Me</li>
            <li className="text-sm min-[400px]:text-xl p-1 text-nowrap">Projects</li>
            <li className="text-sm min-[400px]:text-xl p-1 text-nowrap">Stack</li>
            <li className="text-sm min-[400px]:text-xl p-1 text-nowrap">Contact</li>
          </ul>
        )}
      </nav>
    </>
  );
}
