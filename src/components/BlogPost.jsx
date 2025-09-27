// function BlogPost({ topic, duration, title, image }) {
//   return (
//     <div className="flex h-100 w-full flex-col rounded-xl bg-white shadow-lg">
//       <img
//         className="h-full w-full rounded-xl object-cover"
//         src={image}
//         alt=""
//       />
//       <div className="font-aeonik text-primary flex flex-col p-5 font-light">
//         <div className="flex gap-3">
//           <div className="font-aeonik bg-primary flex items-center rounded-2xl font-normal text-white">
//             <p className="mx-1.5 text-xs">{topic}</p>
//           </div>
//           <p className="">{duration} mins read</p>
//         </div>
//         <p className="pt-2">{title}</p>
//       </div>
//     </div>
//   );
// }

// export default BlogPost;

import { format } from 'date-fns';

function BlogPost({ duration, title, description, image, date, url }) {
  return (
    <article className="font-aeonik overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded bg-blue-600 px-2 py-1 text-xs text-white">
            Programming
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center text-sm text-gray-500">
          <time>{format(new Date(date), 'MMMM d, yyyy')}</time>
          <span className="mx-2">•</span>
          <span>{duration} min read</span>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>

        <p className="mb-4 text-sm text-gray-600">{description}</p>

        <button className="cursor-pointer text-sm font-medium text-blue-600 transition-colors hover:text-blue-800">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read more about ${title}`}
          >
            Read More →
          </a>
        </button>
      </div>
    </article>
  );
}

export default BlogPost;
