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
    <div className="font-aeonik bg-primary flex flex-col items-center py-30 font-normal">
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
      </div>
    </div>
  );
}

export default Tools;
