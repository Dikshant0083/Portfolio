import React, { useState } from 'react';

// 1. Image Imports
import deloitteImg from '../../assets/deloite.png';
import jpmorganImg from '../../assets/jpmorgan.png';
import tataImg from '../../assets/tata.png';
import hackindiaImg from '../../assets/Hacks1.jpg';
import hackindiaImg2 from '../../assets/Hacks2.jpg';
import hackindiaImg3 from '../../assets/Hacks3.jpg';
import hackindiaImg4 from '../../assets/Hacks4.jpg';
import hackindiaImg5 from '../../assets/Hacks5.jpg';
import hackindiaImg6 from '../../assets/Hacks6.jpg';

// 2. Data Array (Syntax errors fixed)
const achievements = [
  {
    title: 'Top 50 Teams - HackIndia Hackathon',
    organization: 'National Level Hackathon',
    date: '2025',
    description:
      'Selected among the top 50 teams across India for developing a scalable software solution during the HackIndia competition.',
    image: hackindiaImg,
    gallery: [
      { title: 'Hackathon Snapshot 1', image: hackindiaImg },
      { title: 'Hackathon Snapshot 2', image: hackindiaImg2 },
      { title: 'Hackathon Snapshot 3', image: hackindiaImg3 },
      { title: 'Hackathon Snapshot 4', image: hackindiaImg4 },
      { title: 'Hackathon Snapshot 5', image: hackindiaImg5 },
      { title: 'Hackathon Snapshot 6', image: hackindiaImg6 },
      { title: 'Hackathon Certificate', image: hackindiaImg },
    ],
    certificateLink: '#',
  },
  {
    title: 'Software Engineering Job Simulation',
    organization: 'JPMorgan Chase & Co. - Forage',
    date: 'Jan 2026',
    description:
      'Completed tasks involving interface preparation with Perspective, technical stack analysis, and open-source contribution simulations.',
    image: jpmorganImg,
    link: 'https://drive.google.com/file/d/1qSEC7ONMayhqWcWstqm0sVjo_HlufIOl/view?usp=drive_link',
  },
  {
    title: 'Cyber Job Simulation',
    organization: 'Deloitte Australia - Forage',
    date: 'Dec 2025',
    description:
      'Explored forensic analysis, malware analysis, and risk assessment strategies within a simulated corporate environment.',
    image: deloitteImg,
    link: 'https://drive.google.com/file/d/18a0-Aa-sgajK2inbB81qtfQa7emYfcR6/view?usp=drive_link',
  },
  {
    title: 'Cybersecurity Analyst Job Simulation',
    organization: 'TATA - Forage',
    date: 'Apr 2026',
    description:
      'Completed practical tasks involving Identity and Access Management (IAM) fundamentals, IAM strategy assessment, crafting custom IAM solutions, and platform integration.',
    image: tataImg,
    link: 'https://drive.google.com/file/d/1BTX9wKK_r0df7O51tWlE31yWLKmzcHEZ/view?usp=drive_link',
  },
];

// 3. Main Component
const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openAchievement = (achievement) => {
    if (achievement.gallery) {
      setSelectedAchievement(achievement);
    }
  };

  const closeAchievement = () => {
    setSelectedAchievement(null);
  };

  return (
    <>
      <section id="achievements" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              Achievements & <span className="text-purple-500">Certifications</span>
            </h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Grid Layout for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => {
              const cardContent = (
                <>
                  <div className="relative h-48 overflow-hidden bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x250?text=Certificate+Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111029] to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm font-medium mb-4">{item.organization}</p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{item.description}</p>

                    <span className="inline-flex items-center text-sm font-semibold text-white bg-purple-600/20 border border-purple-500/50 px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300">
                      {item.gallery ? 'View Images & Certificate' : 'View Credential'}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </>
              );

              // If it has a gallery, wrap in a button to open the modal
              if (item.gallery) {
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => openAchievement(item)}
                    className="group text-left w-full bg-[#111029]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl"
                  >
                    {cardContent}
                  </button>
                );
              }

              // Otherwise, wrap in an anchor tag to go straight to the link
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full bg-[#111029]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl"
                >
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern, Gallery-Style Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={closeAchievement}
        >
          <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative mx-auto flex max-h-[84vh] w-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0c0b1d] shadow-2xl">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
                <div className="pr-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                    {selectedAchievement.date}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {selectedAchievement.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{selectedAchievement.organization}</p>
                </div>
                
                <button
                  type="button"
                  onClick={closeAchievement}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/20 hover:text-red-400 focus:outline-none"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Gallery Area */}
              <div className="flex-1 overflow-y-auto bg-[#080715] px-5 py-5 sm:px-6 sm:py-6">
                <p className="mb-5 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {selectedAchievement.description}
                </p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {selectedAchievement.gallery.map((entry, index) => (
                    <div
                      key={`${entry.title}-${index}`}
                      className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-black/30">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          onError={(e) => {
                            e.target.src =
                              'https://via.placeholder.com/400x300?text=Image+Not+Found';
                          }}
                        />
                      </div>
                      <div className="border-t border-white/10 px-3 py-2">
                        <p className="text-xs font-medium text-gray-200">{entry.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#0c0b1d] px-5 py-4 sm:px-6">
                {selectedAchievement.certificateLink && selectedAchievement.certificateLink !== '#' && (
                  <a
                    href={selectedAchievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500"
                  >
                    View Official Certificate
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                
                <button
                  type="button"
                  onClick={closeAchievement}
                  className="inline-flex items-center rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  Close Gallery
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;
