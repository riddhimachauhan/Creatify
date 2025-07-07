import React from "react";

const testimonials = [
  { name: "Alice Johnson", quote: "This platform transformed how I manage client feedback and payments!", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Mark Thompson", quote: "Finally, a tool that understands designers and protects our work.", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Sophia Lee", quote: "The version control feature saved me so much time and confusion.", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
];

const TestimonialsSection = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Trusted by Designers Worldwide</h2>
      <div className="flex overflow-x-auto space-x-6">
        {testimonials.map((t, index) => (
          <div key={index} className="min-w-[300px] bg-gray-50 p-6 rounded-lg shadow">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 italic mb-2">"{t.quote}"</p>
            <p className="font-semibold text-gray-900">- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

