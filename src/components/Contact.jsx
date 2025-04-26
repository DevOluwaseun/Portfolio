function Contact() {
  return (
    <>
      <div className="font-aeonik text-primary relative mt-40 flex w-full flex-col items-center justify-center bg-[#d5d5d5] bg-[url('/resources/images/soe.jpg')] bg-cover bg-center p-30 align-middle font-normal">
        <div className="bg-primary absolute inset-0 opacity-40"></div>
        <div className="z-10 flex flex-col items-center gap-4 text-center">
          <h1 className="p-5 text-5xl text-white">How to Reach Me</h1>
          <p className="w-xl text-white">
            I’m always open to discussing new projects, collaborations, or
            opportunities. Feel free to get in touch with me through any of the
            channels below!
          </p>

          <button className="bg-primary h-10 w-50 rounded-sm text-white">
            Email
          </button>
          <div className="mt-5 flex items-center gap-4">
            <img
              className="w-6 sm:w-5 md:w-6 lg:w-7"
              src="./resources/images/github-white.png"
            />
            <img
              className="w-6 sm:w-5 md:w-6 lg:w-7"
              src="./resources/images/instagram-white.png"
            />
            <img
              className="w-6 sm:w-5 md:w-6 lg:w-7"
              src="./resources/images/linkedin-white.png"
            />
            <img
              className="w-6 sm:w-5 md:w-6 lg:w-7"
              src="./resources/images/email-white.png"
            />
          </div>
        </div>
      </div>
      <div className="font-aeonik flex w-full items-center justify-between p-6 px-20 font-normal">
        <ul className="flex">
          <li className="text-primary mx-4">About Me</li>
          <li className="text-primary mx-4">Services</li>
          <li className="text-primary mx-4">Projects</li>
          <li className="text-primary mx-4">Contact</li>
        </ul>

        <h1 className="text-4xl">devoluwaseun@gmail.com</h1>
      </div>
    </>
  );
}

export default Contact;
