import { useState } from 'react';
import Logo from './logo';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-tertiary font-aeonik z-1 flex items-center justify-between p-6 px-20 font-normal">
      <Logo />

      <div className="z-2 flex h-8 w-8 flex-col items-center justify-center md:hidden">
        <button onClick={toggleMenu}>
          <span
            className={`bg-primary block h-0.5 w-6 transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-1.5 rotate-45' : '-translate-y-1.5'}`}
          ></span>
          <span
            className={`bg-primary my-1 block h-0.5 w-6 transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`bg-primary block h-0.5 w-6 transform transition duration-300 ease-in-out ${isOpen ? '-translate-y-1.5 -rotate-45' : 'translate-y-1.5'}`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className="bg-tertiary absolute top-0 right-0 flex h-full w-[30%] flex-col items-center justify-center gap-5 px-10 md:hidden">
          <ul className="flex flex-col items-start space-y-6">
            <h1 className="flex items-center underline">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </h1>
            <li className="text-primary">About Me</li>
            <li className="text-primary">Services</li>
            <li className="text-primary">Projects</li>
            <li className="text-primary">Contact</li>
          </ul>
        </div>
      )}

      <ul className="hidden md:flex">
        <li className="text-primary mx-4">About Me</li>
        <li className="text-primary mx-4">Services</li>
        <li className="text-primary mx-4">Projects</li>
        <li className="text-primary mx-4">Contact</li>
      </ul>

      <h1 className="hidden items-center underline md:flex">
        Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </h1>
    </div>
  );
}

export default Nav;
