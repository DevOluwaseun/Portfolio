import { useState } from 'react';

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => setIsVisible(!isVisible);

  return (
    <div className="font-aeonik z-10 flex w-full flex-col items-center rounded-4xl pt-20">
      <div className="font-aeonik text-primary flex w-auto justify-center rounded-4xl bg-white px-3 font-normal">
        <p>
          <span className="text-blue-600">●</span> Portfolio
        </p>
      </div>
      <h1 className="text-primary font-aeonik mb-10 py-5 text-4xl font-normal">
        Projects
      </h1>
      <div className="bg-primary flex h-auto flex-col gap-10 rounded-tl-4xl rounded-tr-4xl shadow-2xl md:w-[80%] md:flex-row md:rounded-4xl">
        <img
          className="h-auto w-full rounded-4xl object-cover md:w-[50%]"
          src="./resources/images/pexels-3.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center gap-4 rounded-4xl bg-slate-900 p-7 font-normal text-white shadow-lg">
          <h1 className="font-aeonik my-2 text-2xl font-semibold text-blue-400">
            Helpr{' '}
            <span className="font-light text-gray-400">[coming soon]</span>
          </h1>

          <p className="text-sm leading-relaxed text-slate-300">
            A modern customer support platform that empowers businesses to
            manage queries, complaints, and live chats in one place. Customers
            can open tickets or chat directly, while admins assign agents, track
            progress, and resolve issues efficiently. Built for small to
            mid-sized businesses that need a simple, scalable solution.
          </p>

          <button
            onClick={toggleDiv}
            className="w-full rounded-md px-4 py-2 text-blue-400 italic transition-all duration-300 ease-in-out hover:text-blue-500 active:scale-95"
            aria-expanded={isVisible}
          >
            {isVisible ? 'show less' : 'show more'}
          </button>

          {isVisible && (
            <>
              <ul className="list-disc space-y-1 pl-6 text-sm font-light text-slate-200">
                <li>
                  Multi-role access → Admins, agents, and customers with
                  tailored dashboards.
                </li>
                <li>
                  Live chat & ticketing integration → Handle quick questions and
                  complex issues seamlessly.
                </li>
                <li>
                  Anonymous or registered customer support → Flexible access for
                  all users.
                </li>

                <li>
                  Scalable SaaS design → Businesses can create unique accounts
                  and onboard their teams.
                </li>
              </ul>

              {/* Tools Section */}
              <div className="mt-3 flex flex-col">
                <h2 className="mb-1 text-sm font-medium text-slate-400">
                  Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    React
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    Node.js + Express
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    TailwindCSS / DaisyUI
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    Socket.io
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    PostgreSQL
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    Docker
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    AWS
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
