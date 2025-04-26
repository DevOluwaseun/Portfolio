import Divider from './Divider';
import Skills from './Skills';
import Label from './label';

function Experiences() {
  return (
    <div className="bg-tertiary font-aeonik flex min-h-screen flex-col items-center pt-20 font-normal">
      <div className="text-primary flex w-30 justify-center rounded-4xl bg-white">
        <p> &#9679; Experiences</p>
      </div>
      <h1 className="text-primary font-aeonik font-regular mb-5 pt-5 text-4xl">
        What I Can Do
      </h1>
      <Skills
        skill="Frontend Development"
        description="Crafting dynamic, responsive, and user-friendly interfaces with a focus on seamless web experiences."
      >
        <Label tools="HTML" />
        <Label tools="CSS3" />
        <Label tools="Javascript" />
        <Label tools="Tailwind CSS" />
        <Label tools="React" />
        <Label tools="Next.js" />
        <Label tools="TypeScript" />
      </Skills>

      <Divider />
      <Skills
        skill="Backend Development"
        description="Building robust server-side logic, scalable APIs, and secure data pipelines for high-performance applications."
      >
        <Label tools="Node.js" />
        <Label tools="Express.js" />
        <Label tools="Python" />
        <Label tools="RESTful APIs" />
        <Label tools="GraphQL" />
      </Skills>

      <Divider />

      <Skills
        skill="Database Management"
        description="Designing and managing databases for optimal data storage, retrieval, and performance."
      >
        <Label tools="MongoDB" />
        <Label tools="PostgreSQL" />
        <Label tools="MySQL" />
        <Label tools="Mongoose" />
      </Skills>

      <Divider />

      <Skills
        skill="Version Control & Collaboration"
        description="Managing source code and collaborating in team environments to maintain a well-structured codebase."
      >
        <Label tools="Git" />
        <Label tools="GitHub" />
      </Skills>
    </div>
  );
}

export default Experiences;
