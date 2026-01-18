import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-12">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image
            src="/images/2.png"
            alt="Delhi Dental Lounge"
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-[#ca9c4f] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+917838831325" className="block text-[#ca9c4f] font-bold md:text-lg hover:text-black transition-colors">Call: 7838831325</a>
          </div>

          <div>
            <h3 className="font-bold text-[#ca9c4f] mb-2 md:text-lg">Clinic Timings</h3>
            <p className="text-gray-700 md:text-lg">
              11:00 AM – 7:30 PM<br />
              (Call / WhatsApp to book)
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#ca9c4f] mb-2 md:text-lg">Location</h3>
            <a
              href="https://maps.app.goo.gl/pn7qFTeLFGM8RKnK9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-bold hover:text-[#ca9c4f] transition-colors cursor-pointer block"
            >
              📍 Delhi Dental Lounge<br />
              Basement, Sector 17/C, Dwarka,<br />
              New Delhi
            </a>
            <p className="text-sm text-gray-500 mt-1">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.835227235987!2d77.02807270631469!3d28.591262788009733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b0a990cc181%3A0xcb17c40135cf4e16!2sDelhi%20Dental%20Lounge%20-%20Dr.%20Saloni%20Malik%2C%20Best%20Dentist%20in%20Delhi%20%7C%20Best%20Orthodontist%20near%20me!5e1!3m2!1sen!2sin!4v1768730239020!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title=" Delhi Dental Lounge Location - Advanced & Patient-Focused Dental Care in Dwarka"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}