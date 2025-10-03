function About() {
  const highlights = [
    { icon: '🎓', title: 'Education', desc: 'BSc Computer Science' },
    { icon: '💼', title: 'Experience', desc: '2+ Years Learning' },
    { icon: '🚀', title: 'Projects', desc: '10+ Completed' },
    { icon: '🎯', title: 'Focus', desc: 'User-Centered Design' },
  ];

  return (
    <section
      className="font-aeonik relative min-h-screen bg-white font-normal"
      id="about"
    >
      <div className="absolute bottom-0 left-0 z-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="height[150px] width-[calc(100% + 1.3px)] relative block rotate-180"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor=" #1e40af" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            fill="url(#gradient)"
          />
        </svg>
      </div>
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side - Dark */}
        <div className="flex flex-col justify-center bg-gray-900 p-12 text-white">
          <div className="max-w-lg">
            <div className="mb-8">
              <span className="text-sm font-medium tracking-wider text-blue-400 uppercase">
                About Me
              </span>
              <h2 className="mt-4 mb-6 text-4xl font-light md:text-5xl">
                Building Digital
                <span className="block text-blue-400">Experiences</span>
              </h2>
            </div>

            <div className="space-y-6 leading-relaxed text-gray-300">
              <p>
                I'm Oluwaseun, a passionate software engineer focused on
                creating innovative solutions that make a difference. My journey
                in tech is driven by curiosity and the desire to solve
                real-world problems.
              </p>

              <p>
                Currently studying Computer Science at University of London
                while building my expertise in modern web technologies and best
                practices.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700">
                View Resume
              </button>
              <button className="rounded-lg border border-gray-600 px-8 py-3 text-gray-300 transition-colors hover:border-gray-400 hover:text-white">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Light */}
        <div className="flex flex-col justify-center bg-gray-50 p-10">
          <div className="mx-auto max-w-lg">
            {/* Profile Image */}
            <div className="mb-12 text-center">
              <img
                className="mx-auto h-48 w-48 rounded-full border-8 border-white object-cover shadow-xl"
                src="./resources/images/picture-1.jpeg"
                alt="Oluwaseun"
                loading="lazy"
              />
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <h3 className="mb-1 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-12 rounded-2xl bg-white p-6 shadow-md">
              <blockquote className="text-center text-gray-700 italic">
                "I'm passionate about using technology to solve real-world
                problems and create meaningful user experiences."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//  className="height[150px] width-[calc(100% + 1.3px)] relative block rotate-180"
export default About;
