function Contact() {
  return (
    <>
      <div className="font-aeonik text-primary mt-20 flex w-full flex-col items-center justify-center bg-[#d5d5d5] p-30 align-middle font-light">
        <div className="z-10 flex flex-col items-center gap-4 text-center">
          <h1 className="text-primary text-5xl">How to Reach Me</h1>
          <p className="text-primary w-xl">
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
              src="./resources/images/email.png"
            />
          </div>
        </div>
      </div>
      <div className="font-aeonik bg-primary flex w-full items-center justify-between p-6 px-20 font-normal">
        <ul className="flex">
          <li className="mx-4 text-white">About Me</li>
          <li className="mx-4 text-white">Services</li>
          <li className="mx-4 text-white">Projects</li>
          <li className="mx-4 text-white">Contact</li>
        </ul>

        <h1 className="text-4xl text-white">devoluwaseun@gmail.com</h1>
      </div>
    </>
  );
}

export default Contact;
