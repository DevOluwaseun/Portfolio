function Contact() {
  const socialLinks = [
    {
      icons: '/resources/images/github.png',
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
      url: 'mailto:devoluwaseun@email.com',
    },
  ];

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'devoluwaseun@gmail.com';
    const subject = 'Hello Oluwaseun';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div
        id="contact"
        className="font-aeonik text-primary z-7 flex w-full flex-col items-center justify-center bg-[#d5d5d5] p-10 align-middle font-light md:mt-20 md:p-30"
      >
        <div className="z-10 flex flex-col items-center gap-4 text-center">
          <h1 className="text-primary text-5xl">How to Reach Me</h1>
          <p className="text-primary md:w-xl">
            I’m always open to discussing new projects, collaborations, or
            opportunities. Feel free to get in touch with me through any of the
            channels below!
          </p>

          <button
            className="bg-primary h-10 w-50 cursor-pointer rounded-sm text-white hover:bg-slate-800"
            onClick={handleEmailClick}
            aria-label="Send email to devoluwaseun@gmail.com"
          >
            Email Me
          </button>
          <div className="mt-5 flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:opacity-80"
              >
                <img
                  className="w-6 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-80 sm:w-5 md:w-6 lg:w-7"
                  src={link.icons}
                  alt={link.alt}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="font-aeonik bg-primary z-6 flex w-full items-center justify-between p-6 px-20 font-normal">
        <ul className="flex space-x-1 md:space-x-6">
          <li className="text-white">
            <a href="#about">About</a>
          </li>
          <li className="text-white">
            <a href="#experiences">Experiences</a>
          </li>
          <li className="text-white">
            <a href="#projects">Projects </a>
          </li>
          <li className="text-white">
            <a href="#contact">Contact </a>
          </li>
        </ul>

        <h1 className="text-lg text-white md:text-4xl">
          devoluwaseun@gmail.com
        </h1>
      </div>
    </>
  );
}

export default Contact;
