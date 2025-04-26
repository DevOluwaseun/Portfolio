import Logo from './logo';

function Nav() {
  return (
    <div className="bg-tertiary font-aeonik z-1 flex items-center justify-between p-6 px-20 font-normal">
      <Logo />
      <ul className="flex">
        <li className="text-primary mx-4">About Me</li>
        <li className="text-primary mx-4">Services</li>
        <li className="text-primary mx-4">Projects</li>
        <li className="text-primary mx-4">Contact</li>
      </ul>
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
    </div>
  );
}

export default Nav;
