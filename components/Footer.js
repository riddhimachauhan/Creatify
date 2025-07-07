import React from "react";

const Footer = () => (
  <footer className="py-8 px-6 bg-white border-t mt-12 text-center text-gray-500">
    <div className="flex justify-center gap-4 mb-2">
      {/* Replace with your social icons/links */}
      <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
    </div>
    <div className="mb-2">
      <a href="#" className="mx-2">Privacy</a> | <a href="#" className="mx-2">Terms</a> | <a href="#" className="mx-2">Blog</a>
    </div>
    <div>© 2025 DesignHub. All rights reserved.</div>
  </footer>
);

export default Footer;
