import Image from "next/image";
import { Zap, Users, Heart, CreditCard, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Transform Your Smile With<br />
        <span className="text-[#2364a5]">Delhi Dental Lounge</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg">
          <Image
            src="/images/implant/Transparent-Dental-Aligner.webp"
            alt="Transparent Dental Aligner"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#73b23d]">
            Perfect Healthy Smile
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
            Transform Your Smile with Expert Dental Care
          </h3>
          <div className="space-y-3 text-lg md:text-xl font-medium text-[#73b23d]">
            <p>✔ Precise & Painless Treatments</p>
            <p>✔ All Specialists Available</p>
            <p>✔ EMI Available on Cards</p>
          </div>
          <button
            onClick={onBookAppointment}
            className="bg-brandBlue text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:opacity-90 transition-colors pulse-element w-full md:w-auto mt-8"
          >
            📞 Book Consultation
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-4 px-8 rounded-lg font-bold text-lg hover:opacity-90 transition-colors md:min-w-[240px]">
          📞 Book Consultation
        </button>
        <a
          href="tel:+917838831325"
          className="bg-brandBlue text-white py-4 px-8 rounded-lg font-bold text-lg text-center hover:opacity-90 transition-colors md:min-w-[240px]"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Why choose <span className="text-[#73b23d]">Delhi Dental Lounge?</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6">
          {[
            { icon: Zap, title: "Latest Technology", desc: "Precise & painless treatments" },
            { icon: Users, title: "All Specialists", desc: "Complete dental solutions" },
            { icon: Heart, title: "Patient-Focused", desc: "Transparent advice" },
            { icon: CreditCard, title: "EMI Available", desc: "Affordable care" },
            { icon: ShieldCheck, title: "Ethical Plans", desc: "Long-term results" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow md:p-6">
              <usp.icon className="w-12 h-12 text-[#c4971b] mx-auto mb-2" />
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-8 rounded-lg md:max-w-3xl md:mx-auto">
        <h3 className="font-bold text-[#2364a5] mb-3 md:text-xl">Our Highlights</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-[#73b23d]">✔</span>
            <span className="text-sm md:text-base">Led by Dr. Saloni Malik</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#73b23d]">✔</span>
            <span className="text-sm md:text-base">Technology-driven dental treatments</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-[#73b23d]">✔</span>
            <span className="text-sm md:text-base">Strong focus on patient care</span>
          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full hover:opacity-90 transition-colors md:max-w-md md:mx-auto md:block">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600 md:text-base">
          Professional Consultation & Digital scan
        </small>
      </div>
    </section>
  );
}