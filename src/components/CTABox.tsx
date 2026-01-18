interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-darkGreen text-white p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        <em>Professional Braces & Aligner Services</em>
      </h2>
      <hr className="border-[#73b23d] mb-4" />

      <p className="text-lg text-white mb-4 text-center">
        <u><strong>Professional Consultation & Digital scan with Our Principal Dentist.</strong></u>
      </p>



      <p className="text-white mb-6 text-center font-bold">
        <em>&quot;ONLY VALID FOR FIRST 10 PATIENTS&quot;</em>
      </p>

      <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full">
        Request a Call back ➤
      </button>
      <small className="block text-center mt-2">
        Professional Consultation & Digital scan
      </small>
    </section>
  );
} 