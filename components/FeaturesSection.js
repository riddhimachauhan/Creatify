import React from "react";
import { FaComments, FaCodeBranch, FaLock, FaPalette, FaUsers } from "react-icons/fa";

const features = [
  { icon: <FaComments size={30} />, title: "Feedback Dashboard", description: "Manage client feedback seamlessly with threaded comments." },
  { icon: <FaCodeBranch size={30} />, title: "Visual Version Control", description: "Track and rollback design versions like Git for designers." },
  { icon: <FaLock size={30} />, title: "Secure Payments & Contracts", description: "Milestone payments held in escrow with automatic contracts." },
  { icon: <FaPalette size={30} />, title: "Brand Guidelines", description: "Shared libraries for typography, colors, and components." },
  { icon: <FaUsers size={30} />, title: "Community Marketplace", description: "Find gigs, sell templates, and connect with designers." },
];

const FeaturesSection = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="text-blue-600 mb-4 mx-auto w-12 h-12 flex items-center justify-center">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
          <p className="text-gray-700 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;

