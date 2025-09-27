function Icons({ icon }) {
  return (
    <div className="m-3 flex flex-col flex-wrap items-center justify-center gap-4 drop-shadow-md">
      <img
        className="h-10 w-auto object-contain"
        src={`./resources/images/${icon}.png`}
        alt={`${icon} icon`}
      />
    </div>
  );
}

export default Icons;
