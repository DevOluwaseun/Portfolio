function Label({ tools }) {
  return (
    <div className="text-primary mx-2 flex h-full w-auto justify-center rounded-4xl border-2 border-[#c9c9c9] bg-[#eaeaea] px-3 py-0.5">
      <p className="font-aeonik text-sm font-light whitespace-nowrap">
        {tools}
      </p>
    </div>
  );
}

export default Label;
