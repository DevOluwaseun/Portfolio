function About() {
  return (
    <div className="font-aeonik relative h-screen bg-[#e3e3e3] py-20 font-normal">
      <div className="flex h-full w-full items-center justify-center">
        <img
          className="absolute left-[-5%] mx-auto h-auto max-w-[800px] md:max-w-[800px]"
          src="./resources/images/illustrator1.png"
          alt=""
        />

        <div className="bg-tertiary z-0 flex h-auto w-xl flex-col items-center gap-3 px-10 py-[20%] text-center shadow-2xl md:rounded-3xl md:p-10">
          <h1 className="font-aeonik text-primary text-xl font-normal">
            ABOUT ME
          </h1>
          <p className="font-normal">
            I’m Oluwaseun, a driven and passionate software engineer with a
            clear goal: to land a role where I can contribute to building
            innovative, user-focused solutions. With a background in web
            development and experience across technologies like React,
            JavaScript, and Git, I’m focused on continuously improving my skills
            to stay ahead in the ever-evolving tech world.
          </p>

          <p className="font-normal">
            Currently pursuing a BSc in Computer Science from the University of
            London, I’m working on a portfolio of high-quality projects,
            including AI-powered tools, real-time applications, and machine
            learning systems.
          </p>

          <p className="font-normal">
            I’m not just passionate about writing code—I’m passionate about
            using technology to solve real-world problems. With a focus on
            learning, growth, and delivering exceptional results, I’m excited to
            take the next step in my career and contribute to a forward-thinking
            company.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary h-10 w-40 rounded-md text-white transition hover:bg-gray-800 md:w-48">
              Download CV
            </button>
            <button className="text-primary h-10 w-40 rounded-md border bg-gray-300 transition hover:bg-gray-400 md:w-48">
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
