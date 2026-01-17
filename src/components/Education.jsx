import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-blue-50/30 to-blue-50/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl " />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl " style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            <span className="text-blue-600">
              Education
            </span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-300 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                The George Washington University
              </h3>
              <p className="text-xl text-blue-600 font-semibold mb-2">
                Bachelor of Science in Computer Science
              </p>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Washington, D.C.
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  August 2020 – May 2024
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl px-6 py-3 border border-blue-200">
              <p className="text-sm text-gray-600 font-semibold mb-1">GPA</p>
              <p className="text-3xl font-bold text-blue-600">3.98</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {['Software Engineering', 'Operating Systems', 'Data Structures & Algorithms'].map((course, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-all duration-200"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
