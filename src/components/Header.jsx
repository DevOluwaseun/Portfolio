import Nav from './nav';

function Header() {
  return (
    <div className="bg-tertiary font-aeonik relative flex flex-col font-normal lg:h-screen">
      <Nav />
      <div className="absolute top-1/2 left-2 flex -translate-y-1/2 flex-col items-center md:left-10">
        <svg width="5" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="#b7b6b6"
            strokeWidth="2"
          />
        </svg>

        <div className="m-6 flex h-auto w-10 flex-col items-center gap-4">
          <img
            className="w-6 sm:w-5 md:w-6 lg:w-7"
            src="./resources/images/github.png"
          />
          <img
            className="w-6 sm:w-5 md:w-6 lg:w-7"
            src="./resources/images/instagram.png"
          />
          <img
            className="w-6 sm:w-5 md:w-6 lg:w-7"
            src="./resources/images/linkedin.png"
          />
          <img
            className="w-6 sm:w-5 md:w-6 lg:w-7"
            src="./resources/images/email-black.png"
          />
        </div>
      </div>

      <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden">
        <div className="flex h-full items-center justify-center pl-40 lg:w-[90%]">
          <div className="relative left-[2rem] flex flex-col gap-2 md:left-[7rem] md:ml-[3rem] lg:left-[9rem] lg:ml-[2rem]">
            <h1 className="font-aeonik text-primary flex text-[6rem] leading-[0.8] font-light md:text-[8rem] lg:text-[12rem]">
              Hello
            </h1>
            <h1 className="font-aeonik text-primary px-4 text-center text-[10px] font-normal whitespace-nowrap md:text-xl md:text-[15px]">
              - It's Oluwaseun a Software Engineer
            </h1>
          </div>

          <img
            className="bottom-0 max-h-[100vh] w-full object-contain"
            src="resources/images/profile4.png"
            alt=""
          />
        </div>
      </div>
      <p className="absolute bottom-10 left-[25%] z-10 hidden animate-bounce md:flex">
        Scroll down
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </p>
    </div>
  );
}

export default Header;
