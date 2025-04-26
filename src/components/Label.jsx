function Label({ tools }) {
  return (
    <div className="bg-[#eaeaea] w-auto border-2 border-[#c9c9c9]  py-0.5 h-auto text-primary px-3 rounded-4xl flex justify-center  mx-2">
      <p className="text-sm font-aeonik font-normal">{tools}</p>
    </div>
  );
}

export default Label;
