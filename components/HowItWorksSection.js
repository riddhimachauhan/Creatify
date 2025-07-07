import React from "react";

const steps = [
  { step: 1, title: "Join the Platform", description: "Sign up and create your designer profile." },
  { step: 2, title: "Share with Clients", description: "Invite clients to collaborate and manage projects." },
  { step: 3, title: "Relax", description: "Let the platform handle feedback, payments, and files." },
];

const HowItWorksSection = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((s, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow flex-1">
            <div className="text-blue-600 text-3xl font-bold mb-4">{s.step}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{s.title}</h3>
            <p className="text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

