import { Check, Info, Star } from "lucide-react";

export default function PricingSection() {
    const inclusions = [
        "Extractions (if needed)",
        "Retainers",
        "Oral Prophylaxis",
        "Follow-up Visits"
    ];

    return (
        <section className="py-16 px-4 bg-gray-50 bg-pattern">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Affordable <span className="text-[#ca9c4f]">Excellence</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Transparent pricing with no hidden charges. Choose the best treatment plan that suits your needs and budget.
                    </p>
                </div>

                {/* Orthodontics Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-[#ca9c4f] pl-4">
                            Orthodontic Options
                        </h3>
                        <span className="bg-[#ca9c4f] text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                            LIMITED TIME OFFERS
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Self-Ligating Braces */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-[#ca9c4f] transition-all duration-300">
                                <div className="bg-[#ca9c4f] p-4 text-white">
                                    <h4 className="font-bold text-xl">Metal Self-Ligating</h4>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-gray-400 line-through text-sm">₹62,000</p>
                                            <p className="text-4xl font-bold text-[#ca9c4f]">₹49,600</p>
                                        </div>
                                        <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-sm">
                                            20% OFF
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">Advanced metal braces for faster, more comfortable treatment.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-[#ca9c4f] transition-all duration-300">
                                <div className="bg-[#ca9c4f] p-4 text-white flex justify-between items-center">
                                    <h4 className="font-bold text-xl">Ceramic Self-Ligating</h4>
                                    <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-gray-400 line-through text-sm">₹85,000</p>
                                            <p className="text-4xl font-bold text-[#ca9c4f]">₹68,000</p>
                                        </div>
                                        <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-sm">
                                            20% OFF
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">Aesthetic, tooth-colored braces that blend seamlessly with your smile.</p>
                                </div>
                            </div>
                        </div>

                        {/* Invisalign */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#ca9c4f] relative">
                            <div className="absolute top-0 right-0 bg-[#ca9c4f] text-white text-xs font-bold px-4 py-1 rounded-bl-xl z-10">
                                RECOMMENDED
                            </div>
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white text-center">
                                <h4 className="font-bold text-2xl mb-1">Invisalign® Clear Aligners</h4>
                                <p className="text-gray-300 text-sm">The world's most advanced clear aligner system</p>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {[
                                        { type: "Mild", original: 160000, offer: 144000 },
                                        { type: "Moderate", original: 225000, offer: 202500 },
                                        { type: "Severe", original: 295000, offer: 265500 },
                                    ].map((tier) => (
                                        <div key={tier.type} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                            <div>
                                                <span className="font-bold text-gray-800 block">{tier.type} Correction</span>
                                                <span className="text-xs text-[#ca9c4f] font-semibold">10% OFF</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-xs text-gray-400 line-through">₹{tier.original.toLocaleString()}</span>
                                                <span className="block font-bold text-xl text-gray-900">₹{tier.offer.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-100">
                        <div className="flex items-center gap-3">
                            <Info className="text-[#ca9c4f] w-6 h-6 flex-shrink-0" />
                            <p className="font-semibold text-gray-700">All Orthodontic treatments include:</p>
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-4">
                            {inclusions.map((item, idx) => (
                                <span key={idx} className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm text-sm font-medium text-gray-600">
                                    <Check className="w-4 h-4 text-[#ca9c4f]" /> {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Implants Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-[#ca9c4f] pl-4">
                            Dental Implants
                        </h3>
                        <span className="bg-[#ca9c4f] text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                            FLAT 20% OFF
                        </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Dentem", original: 38000, offer: 30400, origin: "Korean Technology" },
                            { name: "Osstem", original: 38000, offer: 30400, origin: "Premium Korean" },
                            { name: "Noble Biocare", original: 52000, offer: 41600, origin: "Swiss Premium", premium: true },
                        ].map((implant) => (
                            <div key={implant.name} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 ${implant.premium ? 'border-[#ca9c4f]' : 'border-[#ca9c4f]'} relative overflow-hidden group`}>
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Star className="w-16 h-16 text-gray-900" />
                                </div>
                                <h4 className="font-bold text-xl text-gray-800 mb-1">{implant.name}</h4>
                                <p className="text-sm text-gray-500 mb-4">{implant.origin}</p>

                                <div className="border-t border-gray-100 pt-4">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-sm text-gray-400 line-through">₹{implant.original.toLocaleString()}</p>
                                            <p className={`text-3xl font-bold ${implant.premium ? 'text-[#ca9c4f]' : 'text-[#ca9c4f]'}`}>
                                                ₹{implant.offer.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
