import Nav from './Nav';

function Header() {
  const socialLinks = [
    {
      icons: '/resources/images/github-wh.png',
      alt: 'GitHub',
      url: 'https://github.com/DevOluwaseun',
    },
    {
      icons: '/resources/images/instagram.png',
      alt: 'Instagram',
      url: 'https://instagram.com/DevOluwaseun',
    },
    {
      icons: '/resources/images/linkedin.png',
      alt: 'LinkedIn',
      url: 'https://linkedin.com/in/devoluwaseun',
    },
    {
      icons: '/resources/images/email-black.png',
      alt: 'Email',
      url: 'mailto:devoluwaseun@gmail.com?subject=Hello%20Oluwaseun',
    },
  ];

  return (
    <header
      id="home"
      className="bg-tertiary font-aeonik relative flex h-[75vh] snap-start flex-col font-normal md:min-h-screen"
    >
      <Nav />

      <div className="absolute top-1/2 left-2 z-10 hidden -translate-y-1/2 flex-col items-center md:left-6 md:flex lg:left-10">
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

        <div className="m-4 flex h-auto w-8 flex-col items-center gap-3 md:m-6 md:w-10 md:gap-4">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-80 hover:brightness-110 hover:drop-shadow-lg md:h-10 md:w-10"
            >
              <img
                className="bottom-0 w-6 sm:w-5 md:w-6 lg:w-7"
                src={link.icons}
                alt={link.alt}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden">
        <div className="flex h-full flex-col items-center justify-center lg:w-[90%] lg:flex-row lg:pl-40">
          <div className="relative flex flex-col gap-2 py-10 md:py-14 lg:left-[9rem] lg:ml-[2rem]">
            <h1 className="font-aeonik text-primary flex text-[10rem] leading-[0.8] font-light md:text-[14rem] lg:pl-10 lg:text-[18rem]">
              Hello
            </h1>
            <p className="font-aeonik text-primary px-4 text-right text-[16px] font-normal whitespace-nowrap md:text-xl">
              - I'm Oluwaseun a Software Engineer
            </p>
          </div>

          <img
            className="bottom-0 max-h-[60vh] w-full object-bottom lg:max-h-[100vh]"
            src="resources/images/profile4.png"
            alt="Oluwaseun - Software Engineer"
            loading="eager"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-4 sm:hidden">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white/20"
          >
            <img
              className="w-5"
              src={link.icons}
              alt={link.alt}
              loading="lazy"
            />
          </a>
        ))}
      </div>
      <p className="absolute bottom-16 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce items-center gap-1 text-xs sm:bottom-10 sm:text-sm md:flex md:text-base lg:left-[25%] lg:translate-x-0">
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
    </header>
  );
}

export default Header;
