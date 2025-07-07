import React from "react";

const HeroSection = () => (
  <section className="bg-white py-20 px-6 text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Empowering Designers To Focus On Creativity.
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        A unified platform to manage feedback, payments, and brand consistency — all in one place.
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
        Join the Waitlist
      </button>
    </div>
    {/* Abstract shapes for designer vibe */}
    <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
    <div className="absolute top-20 right-0 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
  </section>
);

export default HeroSection;

