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
    img: 'Database-management.png',
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
    img: 'DevOps.png',
  },
  {
    skill: 'Cloud Computing & Infrastructure',
    description:
      'Provisioning and managing cloud services on AWS, or Azure—leveraging serverless functions, virtual machines, storage solutions, and Infrastructure-as-Code (Terraform) for resilient, scalable systems.',
    img: 'Cloud-server.png',
  },
];

function Experiences() {
  return (
    <div className="bg-tertiary font-aeonik flex min-h-screen flex-col items-center justify-center py-20 font-light">
      <div className="text-primary flex w-30 justify-center rounded-4xl bg-white font-normal">
        <p> &#9679; Experiences</p>
      </div>
      <h1 className="text-primary font-aeonik mb-5 pt-5 text-4xl font-normal">
        What I Can Do
      </h1>
      <div className="flex w-[80%] flex-wrap items-center justify-center gap-5">
        {skillsObj.map((el, i) => (
          <Skills
            key={i}
            description={el.description}
            img={el.img}
            skill={el.skill}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
