'use client';

import { useEffect, useRef } from 'react';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    {
      src: '/images/patent/DDL 12-11(1).mp4',
      poster: '/images/patent/thumbnail_1.png',
    },
    {
      src: '/images/patent/DDL out 01-01 2nd (1).mp4',
      poster: '/images/patent/thumbnail_2.png',
    },
    {
      src: '/images/patent/IMG_9162.MP4',
      poster: '/images/patent/thumbnail_3.png',
    },
    {
      src: '/images/patent/IMG_9163.MP4',
      poster: '/images/patent/thumbnail_4.png',
    },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                video.muted = true; // Ensure muted for autoplay
                video.play().catch((err) => console.log('Autoplay prevented:', err));
              }, 1000);
              observer.unobserve(video); // Only auto-play once
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% visible
      );

      observer.observe(video);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-[#ca9c4f] text-sm md:text-base font-medium mb-2">
            Delhi Dental Lounge
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Success Stories
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mb-12">
          {videos.map((video, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-[9/16]">
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                controls
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="metadata"
                poster={video.poster}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Let Us Brighten Your <span className="text-[#ca9c4f]">Smile!</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. For over 11 years, we proudly provided the best dental experience in Dwarka. Our comfort-first approach is designed to meet the needs of you & your entire family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-brandBlue text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+917838831325"
              className="bg-brandBlue text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors text-center"
            >
              Call Now: 7838831325
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Professional consultation includes digital scan
          </p>
        </div>
      </div>
    </section>
  );
}
