import Icons from './icons';
function Tools() {
  const tools = [
    'Javascript',
    'React',
    'Python',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Tailwind',
    'Bootstrap',
    'Express',
    'Git',
    'HTML5',
    'CSS3',
    'Redux',
    'Github',
    'JQuery',
  ];

  return (
    <div className="font-aeonik bg-primary flex flex-col items-center py-10 font-normal">
      <div className="text-primary flex w-20 justify-center rounded-4xl bg-white">
        <p> &#9679; Tools</p>
      </div>
      <h1 className="font-aeonik pt-5 text-4xl font-normal text-white">
        What I Use
      </h1>
      <div className="mx-10 my-4 flex flex-wrap justify-center gap-4">
        {tools.map((tool, index) => {
          return <Icons key={index} icon={tool} />;
        })}
        {/* <Icons icon="Javascript" />
        <Icons icon="React" />
        <Icons icon="Python" />
        <Icons icon="Next.js" />
        <Icons icon="Node.js" />
        <Icons icon="MongoDB" />
        <Icons icon="Tailwind" />
        <Icons icon="Bootstrap" />
        <Icons icon="Express" />
        <Icons icon="Git" />
        <Icons icon="HTML5" />
        <Icons icon="CSS3" />
        <Icons icon="Redux" />
        <Icons icon="Github" />
        <Icons icon="JQuery" /> */}
      </div>
    </div>
  );
}

export default Tools;
