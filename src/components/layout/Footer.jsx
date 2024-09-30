import React from "react";
import logo2 from "@/assets/pp.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white ">
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
          <div className="flex items-center">
            <a
              href="/"
              className="text-gray-950 flex-shrink-0 font-bold text-xl mb-10"
            >
              <img src={logo2} className="h-12 w-auto" alt="PowerPeak" />
            </a>
          </div>
            <p className="mb-4">Your journey to fitness starts here.</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-orange-500"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-orange-500"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-orange-500"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/classes" className="hover:text-orange-500">
                  Classes
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-orange-500">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/membership" className="hover:text-orange-500">
                  Membership
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                123 Fitness Street, Gym City, ST 12345
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                (123) 456-7890
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                info@citymachi.club
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} PowerPeak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
