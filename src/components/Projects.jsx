import Portfolio from './Portfolio';
import Contact from './Contact';
import Blog from './blog';

function Projects() {
  return (
    <div className="flex flex-col items-center bg-[#e3e3e3] pt-40">
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default Projects;
