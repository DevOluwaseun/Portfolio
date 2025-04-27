import BlogPost from './BlogPost';

function Blog() {
  return (
    <div className="my-40 flex flex-col items-center">
      <div className="font-aeonik text-primary flex w-auto justify-center rounded-4xl bg-white px-3 font-normal">
        <p> &#9679; Blog</p>
      </div>
      <h1 className="text-primary font-aeonik mb-5 py-5 text-4xl font-normal">
        My Journey & Insights
      </h1>
      <div className="relative mx-40 flex justify-center gap-6">
        <BlogPost
          topic={'PROGRAMMING'}
          duration={5}
          title={
            'From Curiosity to Career: My Early Steps into Software Engineering'
          }
          image={'./resources/images/life.jpg'}
        />
        <BlogPost
          topic={'PROGRAMMING'}
          duration={5}
          title={' Lessons I Learned From Teaching Myself Graphic Design'}
          image={'./resources/images/keyboard.jpg'}
        />
        <BlogPost
          topic={'PROGRAMMING'}
          duration={5}
          title={
            'Facing Rejection: How I Stayed Motivated to Learn Programming'
          }
          image={'./resources/images/programmer-1.png'}
        />
      </div>
    </div>
  );
}

export default Blog;
