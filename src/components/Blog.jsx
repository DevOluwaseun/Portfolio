import { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

function Blog() {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   try {
  //     fetch('https://dev.to/api/articles?username=devoluwaseun')
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data))
  //       .catch((err) => console.error(err));
  //   } catch (error) {
  //     console.error(error);
  //     return {
  //       statusCode: 500,
  //       body: JSON.stringify({ error: 'Failed to fetch posts' }),
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   fetch('/.netlify/functions/fetchPosts')
  //     .then((res) => {
  //       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  //       return res.json();
  //     })
  //     .then((data) => setPosts(data))
  //     .catch((err) => console.error('Error fetching posts:', err));
  // }, []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/fetchPosts')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="font-aeonik z-9 bg-gray-50 py-20" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 shadow-sm">
            <span className="text-blue-600">●</span>
            <span className="font-medium text-gray-900">Blog</span>
          </div>

          <h2 className="mb-4 text-4xl font-light text-gray-900">
            My Journey & Insights
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            Sharing my experiences, lessons learned, and insights from my
            journey in software development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPost
              key={post.id}
              duration={post.reading_time_minutes}
              title={post.title}
              description={post.description}
              image={post.cover_image}
              date={post.published_at}
              url={post.canonical_url}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          {/* <button className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700">
            View all articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default Blog;
