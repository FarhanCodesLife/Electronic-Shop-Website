import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react'; // Icons from Lucide

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">ElectroShop</h2>
            <p className="text-sm">
              Your trusted source for the latest electronics, gadgets, and home appliances.
            </p>
            <p className="mt-4">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@electroshop.com
              </span>
              <span className="flex items-center gap-2 mt-2">
                <Phone className="w-4 h-4" />
                +92 344 259 8379
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-orange-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/products" className="hover:text-orange-500 transition-colors">Products</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-orange-500 transition-colors">Blog</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li>
                <a href="/shipping" className="hover:text-orange-500 transition-colors">Shipping & Delivery</a>
              </li>
              <li>
                <a href="/returns" className="hover:text-orange-500 transition-colors">Returns & Refunds</a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-orange-500 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="/support" className="hover:text-orange-500 transition-colors">Support Center</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Copywright */}
          <p className="text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} ElectroShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
