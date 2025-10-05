import { motion } from 'framer-motion';

import { format } from 'date-fns';

function BlogPost({ duration, title, description, image, date, url }) {
  return (
    <motion.article
      className="font-aeonik overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
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
    </motion.article>
  );
}

export default BlogPost;
