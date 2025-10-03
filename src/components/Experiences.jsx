import Skills from './Skills';

const skillsObj = [
  {
    skill: 'Frontend Development',
    description:
      'Building responsive user interfaces with React.js, Next.js, and Tailwind CSS, enhanced by Framer Motion animations for smooth, engaging experiences',
    img: 'frontend.png',
  },
  {
    skill: 'Backend Development',
    description:
      'Designing and implementing scalable RESTful APIs using Node.js/Express, with clean architecture, robust validation, and thorough testing.',
    img: 'backend.png',
  },
  {
    skill: 'Database & Data Handling',
    description:
      'Modeling, querying, and optimizing data with MongoDB (Mongoose) and SQL databases, plus using NumPy and Pandas for efficient data manipulation and analysis.',
    img: 'database-management.png',
  },
  {
    skill: 'AI & Automation',
    description:
      'Integrating OpenAI/GPT and custom machine-learning models to automate workflows, generate intelligent content, and deliver AI-powered features in web applications.',
    img: 'ai-technology.png',
  },
  {
    skill: 'DevOps & Deployment',
    description:
      'Containerizing applications with Docker, orchestrating CI/CD pipelines via GitHub Actions, and deploying to modern platforms (Vercel, Netlify, AWS) for reliable, automated releases.',
    img: 'devops.png',
  },
  {
    skill: 'Cloud Computing & Infrastructure',
    description:
      'Provisioning and managing cloud services on AWS, or Azure—leveraging serverless functions, virtual machines, storage solutions, and Infrastructure-as-Code (Terraform) for resilient, scalable systems.',
    img: 'cloud-server.png',
  },
];

// function Experiences() {
//   return (
//     <div className="bg-tertiary font-aeonik flex min-h-screen flex-col items-center justify-center py-20 font-light">
//       <div className="text-primary flex w-30 justify-center rounded-4xl bg-white font-normal">
//         <p>
//           {' '}
//           <span className="text-blue-600">●</span> Experiences
//         </p>
//       </div>
//       <h1 className="text-primary font-aeonik mb-5 pt-5 text-4xl font-normal">
//         What I Can Do
//       </h1>
//       <div className="flex w-[80%] flex-wrap items-center justify-center gap-5">
//         {skillsObj.map((el, i) => (
//           <Skills
//             key={i}
//             description={el.description}
//             img={el.img}
//             skill={el.skill}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

function Experiences() {
  return (
    <section
      id="experiences"
      className="font-aeonik relative min-h-screen w-full bg-[#fefcff] py-20 lg:py-40"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />

      <div className="absolute bottom-0 left-0 z-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="height[150px] width-[calc(100% + 1.3px)] relative block rotate-180"
        >
          <path
            d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
            fill="#e3e3e3"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 shadow-sm">
            <span className="text-blue-600">●</span>
            <span className="font-medium text-gray-900">Experiences</span>
          </div>

          <h2 className="mb-4 text-4xl font-light text-gray-900">
            What I Can Do
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            Leveraging modern technologies to build scalable, efficient
            solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsObj.map((skill, index) => (
            <Skills
              key={index}
              description={skill.description}
              img={skill.img}
              skill={skill.skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
