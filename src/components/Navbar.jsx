import React, { useState } from "react";
import logo1 from "@/assets/pp2.png";
import {
  Menu,
  X,
  Home,
  Calendar,
  Dumbbell,
  CreditCard,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Classes", href: "/classes", icon: Dumbbell },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Membership", href: "/membership", icon: CreditCard },
    // { name: "Join us", href: "/profile", icon: User},
  ];

  return (
    <nav className="bg-orange-600 text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="text-gray-950 flex-shrink-0 font-bold text-xl"
            >
              <img src={logo1} className="h-10 w-auto" alt="PowerPeak" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary transition duration-150 ease-in-out"
                >
                  <item.icon className="inline-block w-5 h-5 mr-1" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center ">
            <Button
              className="hover:text-orange-600 hover:bg-slate-900 text-black bg-slate-50 text-md font-normal"
              size="sm"
              href="/profile"
            >
              Join Us
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary transition duration-150 ease-in-out"
                onClick={toggleMenu}
              >
                <item.icon className="inline-block w-5 h-5 mr-2" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
