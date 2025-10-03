import Portfolio from './Portfolio';
import Contact from './Contact';
import Blog from './Blog';

function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center bg-[#e3e3e3] p-0"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
          backgroundSize: '20px 30px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)',
        }}
      />
      <Portfolio />
      <Blog />
      <Contact />
    </section>
  );
}

export default Projects;
