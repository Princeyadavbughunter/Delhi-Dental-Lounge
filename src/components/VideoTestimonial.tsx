export default function VideoTestimonial() {
  const videos = [
    '/images/patent/VIDEO_db901840-f713-4a1c-b5eb-1773dabbd12f.mp4',
    '/images/patent/video_20251030_164432_edit.mp4',
    '/images/patent/video_20251114_121350.mp4'
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Treatment Videos</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Watch our successful treatment procedures and patient transformations.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {videos.map((src, index) => (
              <div key={index} className="w-full relative aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-md">
                <video
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
