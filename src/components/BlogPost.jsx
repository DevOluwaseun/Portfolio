function BlogPost({ topic, duration, title, image }) {
  return (
    <div className="flex h-100 w-full flex-col rounded-xl bg-white shadow-lg">
      <img
        className="h-full w-full rounded-xl object-cover"
        src={image}
        alt=""
      />
      <div className="font-aeonik text-primary flex flex-col p-5 font-light">
        <div className="flex gap-3">
          <div className="font-aeonik bg-primary flex items-center rounded-2xl font-normal text-white">
            <p className="mx-1.5 text-xs">{topic}</p>
          </div>
          <p className="">{duration} mins read</p>
        </div>
        <p className="pt-2">{title}</p>
      </div>
    </div>
  );
}

export default BlogPost;
