import React from 'react';

const Education = () => {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                The George Washington University
              </h3>
              <p className="text-xl text-primary-600 font-semibold mb-2">
                Bachelor of Science in Computer Science
              </p>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Washington, D.C.
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  August 2020 – May 2024
                </span>
              </div>
            </div>
            <div className="bg-primary-50 rounded-lg px-6 py-3 border-2 border-primary-200">
              <p className="text-sm text-gray-600 font-semibold mb-1">GPA</p>
              <p className="text-3xl font-bold text-primary-600">3.98</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {['Software Engineering', 'Operating Systems', 'Data Structures & Algorithms'].map((course, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
