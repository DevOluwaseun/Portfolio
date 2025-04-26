function About() {
  return (
    <div className="font-aeonik relative bg-[#e3e3e3] font-normal">
      <div className="flex items-center py-20">
        <div className="font-[300]">
          <img
            className="relative left-[-5%] mx-auto h-auto max-w-[800px] md:max-w-[800px]"
            src="./resources/images/illustrator1.png"
            alt=""
          />
        </div>

        <div className="text-primary absolute top-1/2 left-1/2 mx-auto flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 rounded-2xl bg-white/90 p-8 pr-10 shadow-lg md:top-auto md:right-[3%] md:left-auto md:translate-x-0 md:translate-y-0 lg:bg-white xl:right-[4%] 2xl:right-[10%]">
          <h1 className="font-aeonik text-primary text-xl font-normal">
            ABOUT ME
          </h1>
          <p className="md:xl w-lg font-[300]">
            I’m Oluwaseun, a driven and passionate software engineer with a
            clear goal: to land a role where I can contribute to building
            innovative, user-focused solutions. With a background in web
            development and experience across technologies like React,
            JavaScript, and Git, I’m focused on continuously improving my skills
            to stay ahead in the ever-evolving tech world.
          </p>

          <p className="md:xl w-lg font-[300]">
            Currently pursuing a BSc in Computer Science from the University of
            London, I’m working on a portfolio of high-quality projects,
            including AI-powered tools, real-time applications, and machine
            learning systems.
          </p>

          <p className="md:xl w-lg font-[300]">
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
