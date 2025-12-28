import { motion } from 'framer-motion';

// Format date object to "Month Year" or "Present"
const formatDate = (date) => {
  if (date === 'Present') return 'Present';
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

// Convert year and month to Date object
const createDate = (year, month) => new Date(year, month - 1);

// Calculate duration between two dates (LinkedIn-style counting)
const calculateDuration = (startDate, endDate) => {
  const end = endDate === 'Present' ? new Date() : endDate;

  // Validate that startDate is not greater than endDate
  if (startDate > end) {
    throw new Error(
      `Invalid date range: startDate (${formatDate(startDate)}) cannot be greater than endDate (${formatDate(endDate)})`
    );
  }

  // LinkedIn-style calculation: inclusive of both start and end months
  let months = (end.getFullYear() - startDate.getFullYear()) * 12 + (end.getMonth() - startDate.getMonth());

  // Add 1 to include the end month (LinkedIn counts both start and end months)
  months += 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years}yr${years > 1 ? 's' : ''} ${remainingMonths}mo`;
  }
  if (years > 0) {
    return `${years}yr${years > 1 ? 's' : ''}`;
  }
  return `${remainingMonths}mo`;
};

const Experience = () => {
  // Define experiences with dates converted immediately
  const experiences = [
    {
      company: 'Amazon Web Services (AWS)',
      startDate: createDate(2023, 5), // May 2023 (earliest role start)
      endDate: 'Present', // Latest role end
      roles: [
        {
          title: 'Software Development Engineer II',
          startDate: createDate(2025, 12), // December 2025
          endDate: 'Present',
          location: 'New York, NY (Onsite)',
          isCurrent: true,
        },
        {
          title: 'Software Development Engineer I',
          startDate: createDate(2024, 6), // June 2024
          endDate: createDate(2025, 11), // December 2025
          location: 'New York, NY (Onsite)',
          isCurrent: false,
        },
        {
          title: 'Systems Development Engineer Intern',
          startDate: createDate(2023, 5), // May 2023
          endDate: createDate(2024, 5), // May 2024
          location: 'Arlington, VA (Onsite)',
          isCurrent: false,
        },
      ],
    },
    {
      company: 'SURVICE Engineering',
      startDate: createDate(2022, 6), // June 2022 (earliest role start)
      endDate: createDate(2023, 5), // May 2023 (latest role end)
      roles: [
        {
          title: 'Software Developer',
          startDate: createDate(2023, 1), // January 2023
          endDate: createDate(2023, 5), // May 2023
          location: 'Remote',
          isCurrent: false,
        },
        {
          title: 'Software Developer Intern',
          startDate: createDate(2022, 5), // May 2022
          endDate: createDate(2022, 12), // December 2022
          location: 'Remote',
          isCurrent: false,
        },
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100 to-transparent rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-5xl mx-auto">
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
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative pl-8">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-3 top-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-blue-600 rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-6 w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-primary-600 to-blue-600 z-10 shadow-lg"
                whileHover={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />

              {/* Content card */}
              <div className="ml-10">
                <motion.div
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 transition-all duration-300"
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Company header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {exp.company}
                      </h3>
                      {/* Company-level date badge */}
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-200 rounded-lg">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold text-primary-700">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-primary-300" />
                        <span className="text-sm font-medium text-primary-600 whitespace-nowrap">{calculateDuration(exp.startDate, exp.endDate)}</span>
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="space-y-4">
                      {exp.roles.map((role, roleIdx) => (
                        <div
                          key={roleIdx}
                          className={`${exp.roles.length > 1 ? 'relative pl-6 border-l-2 border-primary-200' : ''} ${roleIdx > 0 ? 'pt-4' : ''}`}
                        >
                          {/* Timeline dot for multiple roles */}
                          {exp.roles.length > 1 && (
                            <div className="absolute left-0 top-2 w-3 h-3 -translate-x-[7px] bg-primary-500 rounded-full ring-2 ring-white"></div>
                          )}

                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <h4 className="text-lg font-bold text-gray-900">
                                  {role.title}
                                </h4>
                                {role.isCurrent && (
                                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-gradient-to-r from-primary-600 to-blue-600 px-3 py-1 rounded-full shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>
                                    Current
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {role.location}
                              </div>
                            </div>

                            {/* Role-specific date badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-md text-xs font-medium text-gray-700 whitespace-nowrap">
                              <div className="flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {formatDate(role.startDate)} - {formatDate(role.endDate)}
                              </div>
                              <div className="w-px h-3 bg-gray-400" />
                              <span className="text-gray-600">{calculateDuration(role.startDate, role.endDate)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
