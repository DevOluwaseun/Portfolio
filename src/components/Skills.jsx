import Label from "./label";

function Skills({ skill, description, children }) {
  return (
    <>
      <div className="grid gap-6 items-start mx-10 my-3 grid-cols-12">
        <div className="col-span-3">
          <h1 className=" text-2xl text-primary ">{skill}</h1>
        </div>

        <div className="col-span-4">
          <p>{description}</p>
        </div>
        <div className="flex col-span-5">{children}</div>
      </div>
    </>
  );
}

export default Skills;
