import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      title: 'Server-Side',
      skills: ['AWS', 'Node.js', 'Express'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      title: 'DevOps',
      skills: ['CI/CD', 'Docker', 'GitLab', 'GitHub'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      title: 'Client-Side',
      skills: ['React', 'Angular', 'Cloudscape Design System'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Title with gradient */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Skills grid with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 blur-xl transition-opacity duration-300`}
                animate={{
                  opacity: hoveredCard === idx ? 0.3 : 0,
                }}
              />

              {/* Card */}
              <motion.div
                className={`relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden h-full`}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 transition-opacity duration-300`}
                  animate={{
                    opacity: hoveredCard === idx ? 1 : 0,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    animate={{
                      scale: hoveredCard === idx ? 1.05 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={`p-3 bg-gradient-to-br ${category.gradient} text-white rounded-xl shadow-md`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </motion.div>

                  {/* Skills list with stagger animation */}
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.li
                        key={skillIdx}
                        className="text-gray-700 flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIdx * 0.05 }}
                      >
                        <motion.span
                          className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full`}
                          animate={{
                            scale: hoveredCard === idx ? [1, 1.3, 1] : 1,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: skillIdx * 0.05,
                            repeat: hoveredCard === idx ? Infinity : 0,
                            repeatDelay: 1,
                          }}
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Corner decoration */}
                <motion.div
                  className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${category.gradient} rounded-full opacity-10`}
                  animate={{
                    scale: hoveredCard === idx ? 1.5 : 1,
                    opacity: hoveredCard === idx ? 0.2 : 0.1,
                  }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
