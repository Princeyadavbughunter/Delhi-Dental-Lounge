import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className=" bg-white p-4 md:p-8 lg:p-12">
      <h2 className="text-[#c4971b] md:text-3xl font-bold text-center mb-6">Meet Our Principal Dentist</h2>

      <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm max-w-6xl mx-auto">
        <div className="md:flex md:gap-8 md:items-start mb-8">
          <div className="text-center mb-6 md:mb-0 md:flex-shrink-0">
            <div className="w-48 md:w-64 aspect-[3/4] bg-gray-200 rounded-lg mx-auto mb-4 relative overflow-hidden">
              <Image
                src="/images/drsaloni.jpeg"
                alt="Dr. Saloni Malik"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#c4971b]">Dr. Saloni Malik</h3>
            <p className="text-gray-600 font-medium">BDS, MDS</p>
            <p className="text-gray-600 font-medium">Orthodontics & Dentofacial Orthopedics Specialist</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              Dr. Saloni Malik is a highly qualified and experienced orthodontist specializing in braces, aligners, and dentofacial orthopedic treatments. With over 11 years of clinical experience, she is known for delivering precise, ethical, and patient-centric orthodontic care.
            </p>

            <p className="md:text-lg">
              She is Invisalign Certified, offering advanced clear aligner solutions for patients seeking comfortable and aesthetic teeth alignment. Her approach focuses on long-term results, facial harmony, and confident smiles.
            </p>

            <div className="md:grid md:grid-cols-2 md:gap-8 mt-6">
              <div>
                <h3 className="font-bold text-[#c4971b] mb-3 md:text-lg">🎓 Qualifications & Expertise</h3>
                <ul className="list-none space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start gap-2"><span>✅</span> <span>BDS, MDS</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Specialist in Orthodontics & Dentofacial Orthopedics</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>11+ Years of Clinical Experience</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Invisalign Certified Orthodontist</span></li>
                </ul>

                <h3 className="font-bold text-[#c4971b] mb-2 md:text-lg">🏥 Clinic Details</h3>
                <p className="mb-4 text-gray-700">
                  <strong>Delhi Dental Lounge</strong><br />
                  Plot No. 1, Pocket C,<br />
                  Sector 17, Dwarka,<br />
                  New Delhi
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#c4971b] mt-6 mb-3 md:mt-0 md:text-lg">⏰ Consultation Timings</h3>
                <ul className="list-none space-y-2 mb-6 text-gray-700">
                  <li><strong>Monday:</strong> Closed</li>
                  <li><strong>Tuesday to Sunday:</strong> 11:00 AM – 7:30 PM</li>
                </ul>
              </div>


            </div>
          </div>
        </div>


        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH DR. Saloni Malik
        </button>
      </div>
    </section >
  );
}