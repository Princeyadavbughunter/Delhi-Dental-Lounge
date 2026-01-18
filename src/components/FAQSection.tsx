'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the difference between braces and clear aligners?",
      answer: "Traditional braces use metal brackets and wires to move teeth, while clear aligners use a series of custom-made, invisible plastic trays. Both are effective, but aligners offer better aesthetics and are removable for eating and cleaning."
    },
    {
      question: "How long does orthodontic treatment take?",
      answer: "Treatment duration varies by case, typically ranging from 6 to 24 months. Simple cases may take less time, while complex issues might require longer. Dr. Rahul Singh will provide a specific timeline during your consultation."
    },
    {
      question: "Is the treatment painful?",
      answer: "You may experience mild discomfort or pressure when braces are first applied or when switching to a new set of aligners. This is normal and indicates that your teeth are moving. The discomfort usually subsides within a few days."
    },
    {
      question: "Can adults get braces or aligners?",
      answer: "Absolutely! Healthy teeth can be moved at any age. Many adults choose clear aligners for a discreet way to improve their smile without the visibility of metal braces."
    },
    {
      question: "Do I need to wear a retainer after treatment?",
      answer: "Yes, wearing a retainer is crucial to maintain your new smile and prevent teeth from shifting back to their original positions. We will recommend the best retention plan for you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
          Frequently Asked Questions about Braces & Aligners
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 text-left font-bold hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="flex-grow pr-4 md:text-lg">{faq.question}</span>
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''} flex-shrink-0`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="p-4 md:p-6 border-t bg-gray-50">
                  <p className="text-gray-700 italic md:text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}