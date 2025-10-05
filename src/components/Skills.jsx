import { motion } from 'framer-motion';

function Skills({ description, img, skill, index }) {
  return (
    <motion.div
      className="group border-primary rounded-xl border-b-4 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img
            src={`./resources/images/${img}`}
            alt={skill}
            className="h-12 w-12 object-contain"
            loading="lazy"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-medium text-gray-900 transition-colors group-hover:text-blue-600">
            {skill}
          </h3>

          <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
export default Skills;
