import { useState } from 'react';

// function Skills({ img, skill, description }) {
//   const [showDescription, setShowDescription] = useState(false);

//   return (
//     <>
//       <div
//         onMouseEnter={() => setShowDescription(true)}
//         onMouseLeave={() => setShowDescription(false)}
//         className="text-primary font-aeonik border-secondary mt-10 flex h-[19rem] w-[20rem] flex-col items-center justify-center gap-2 rounded-sm border-b-4 bg-white p-4 text-2xl font-normal shadow-xl"
//       >
//         <img
//           className="h-[5rem] w-auto"
//           src={`../resources/images/${img}`}
//           alt=""
//         />
//         <h1 className="text-center text-xl">{skill}</h1>
//         {showDescription && (
//           <p className="text-center text-sm">{description}</p>
//         )}
//       </div>
//     </>
//   );
// }

function Skills({ description, img, skill, index }) {
  return (
    <div
      className="group border-primary rounded-xl border-b-4 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img
            src={`./resources/images/${img}`}
            alt={skill}
            className="h-12 w-12 object-contain"
            loading="lazy"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-medium text-gray-900 transition-colors group-hover:text-blue-600">
            {skill}
          </h3>

          <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default Skills;
