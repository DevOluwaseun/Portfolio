import { useState } from 'react';

function Skills({ img, skill, description }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className="text-primary font-aeonik border-secondary mt-10 flex h-[19rem] w-[20rem] flex-col items-center justify-center gap-2 rounded-sm border-b-4 bg-white p-4 text-2xl font-normal shadow-xl"
      >
        <img
          className="h-[5rem] w-auto"
          src={`../resources/images/${img}`}
          alt=""
        />
        <h1 className="text-center text-xl">{skill}</h1>
        {showDescription && (
          <p className="text-center text-sm">{description}</p>
        )}
      </div>
    </>
  );
}

export default Skills;
