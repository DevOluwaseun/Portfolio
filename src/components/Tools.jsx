// import Icons from './icons';
// function Tools() {
//   const tools = [
//     'Javascript',
//     'React',
//     'Python',
//     'Next.js',
//     'Node.js',
//     'MongoDB',
//     'Tailwind',
//     'Bootstrap',
//     'Express',
//     'Git',
//     'HTML5',
//     'CSS3',
//     'Redux',
//     'Github',
//     'JQuery',
//   ];

//   return (
//     <div className="font-aeonik to-primary flex flex-col items-center bg-linear-to-bl from-blue-900 from-10% py-5 font-normal">
//       <div className="text-primary flex w-20 justify-center rounded-4xl bg-white">
//         <p>
//           <span className="text-blue-600">●</span> Tools
//         </p>
//       </div>
//       {/* <h1 className="font-aeonik pt-5 text-4xl font-normal text-white">
//         What I Use
//       </h1> */}
//       <div className="mt-5 flex flex-wrap justify-center gap-2">
//         {tools.map((tool, index) => {
//           return <Icons key={index} icon={tool}></Icons>;
//         })}
//       </div>
//     </div>
//   );
// }

// export default Tools;

import Icons from './icons';

function Tools() {
  const tools = [
    'JavaScript',
    'React',
    'Python',
    'next.js',
    'Node.js',
    'MongoDB',
    'Tailwind',

    'express',
    'Git',
    'HTML5',
    'CSS3',
    'Redux',
    'github',
    'MySQL',
    'C++',
  ];

  return (
    <div className="font-aeonik flex flex-col items-center bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-primary flex w-20 justify-center rounded-4xl bg-white">
        <p>
          <span className="text-blue-600">●</span> Tools
        </p>
      </div>
      <h1 className="font-aeonik py-7 text-4xl font-normal text-white">
        What I Use
      </h1>

      {/* Tools Grid */}
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="transform cursor-pointer transition-transform duration-300 group-hover:scale-150">
                <Icons icon={tool} />
              </div>
              <span className="mt-3 text-sm text-white/60 group-hover:text-white">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
