import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Project type definition
const ProjectType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
});

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [];
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Conditional rendering: Real projects or Coming Soon */}
        {hasProjects ? (
          // Real Projects Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300`}
                  animate={{
                    opacity: hoveredCard === idx ? 0.1 : 0,
                  }}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-3">{project.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Coming Soon Card with 3D effect
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl p-12 border-2 border-dashed border-primary-300 overflow-hidden"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-blue-100 opacity-50" />

            {/* Floating elements */}
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full blur-3xl opacity-20"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-primary-600 rounded-full blur-3xl opacity-20"
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="relative p-6 bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl shadow-xl">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400 to-blue-500"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-3xl sm:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Exciting projects are currently in development. Check back soon to see innovative solutions I've been building!
              </motion.p>

              {/* Animated dots */}
              <div className="flex justify-center gap-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-4 h-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </div>
    </section>
  );
};

// PropTypes validation
Projects.propTypes = {
  // Component doesn't take props, but projects array follows ProjectType structure
};

export default Projects;
export { ProjectType };
