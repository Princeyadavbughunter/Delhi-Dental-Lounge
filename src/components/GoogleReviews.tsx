import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Mukul Gupta",
      initials: "MG",
      date: "4 months ago",
      review: "I recently got my aligner treatment under Dr. Saloni’s care and couldn’t be happier with the results. She was extremely calm, patient, and highly professional throughout the entire process. The treatment experience was smooth and reassuring from start to finish. Highly recommended!"
    },
    {
      name: "Christina Shajan",
      initials: "CS",
      date: "1 months ago",
      review: "I got my orthodontic treatment done at Delhi Dental Lounge, and it was truly one of the best decisions for my dental health. Dr. Saloni Malik is absolutely fabulous, skilled, professional, and genuinely caring. The entire process was smooth, comfortable, and stress-free. The clinic is clean, modern, and very well maintained. Highly recommend Delhi Dental Lounge for anyone looking for expert dental care!"
    },
    {
      name: "G N",
      initials: "GN",
      date: "8 months ago",
      review: "Delhi dental lounge is highly recommended clinic as Dr Saloni is so patient, thorough, and provides best dental advise. I was visiting India and needed urgent dental appointment and Dr Saloni was very understanding of my situation and accommodated me and my husband on a short notice. Delhi Dental lounge is spacious, emaculate and well equipped clinic. The staff is humble and respectful. Well done Delhi dental lounge."
    },
    {
      name: "Anjali Singh",
      initials: "AS",
      date: "6 months ago",
      review: "For my job I needed perfect smile as it made me lack confidence.Dr saloni did my braces treatment and I cudnt be happier .she gave me my confidence back and she treats all her patients like.family"
    }];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brandBlue text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}