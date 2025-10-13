import { motion } from 'framer-motion';

import Icons from './Icons';

function Tools() {
  const tools = [
    'JavaScript',
    'React',
    'Python',
    'next.js',
    'Node.js',
    'MongoDB',
    'Tailwind',
    'Docker',
    'express',
    'Git',
    'HTML5',
    'CSS3',
    'Redux',
    'github',
    'MySQL',
    'C++',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="font-aeonik flex flex-col items-center bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-8 text-center"
      >
        <div className="text-primary flex w-20 justify-center rounded-4xl bg-white">
          <p>
            <span className="text-blue-600">●</span> Tools
          </p>
        </div>
        <h1 className="font-aeonik py-7 text-4xl font-light text-white">
          What I Use
        </h1>
      </motion.div>
      {/* Tools Grid */}
      <motion.div
        className="w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                variants={cardVariants}
                className="group flex flex-col items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="transform cursor-pointer transition-transform duration-300 group-hover:scale-110">
                  <Icons icon={tool} />
                </div>
                <span className="mt-3 text-sm text-white/60 group-hover:text-white">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Tools;
