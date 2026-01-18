import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm py-2 px-4 md:py-3">
      <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <Image
            src="/images/2.png"
            alt="Delhi Dental Lounge Logo"
            width={160}
            height={40}
            className="h-auto mx-auto mb-2 md:mb-0 md:mx-0"
          />
          <a
            href="https://maps.app.goo.gl/Hn6cLXVWCAa6SYkZ6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-black mb-2 md:mb-0 hover:text-[#ca9c4f] transition-colors cursor-pointer block"
          >
            📍 Delhi Dental Lounge
            Basement, Sector 17/C, Dwarka,
            New Delhi
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-brandBlue text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-colors text-sm md:text-base">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+917838831325" className="bg-brandBlue text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-colors text-center text-sm md:text-base">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
}