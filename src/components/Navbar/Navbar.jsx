import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Feather, Menu, X, Heart, Compass, Info, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/explore', label: 'Explore', icon: Compass },
    { to: '/favorites', label: 'Favorites', icon: Heart },
    { to: '/about', label: 'About', icon: Info },
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${
      isActive
        ? 'bg-green-800 text-white'
        : 'text-green-100 hover:bg-green-500/20 hover:text-white'
    }`;

  return (
    <nav className="bg-green-400 text-white sticky top-0 z-50 shadow-md">
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                <Icon className="h-4 w-4" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-green-100 hover:text-white hover:bg-green-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      
      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-green-900 border-t border-green-800">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                <Icon className="h-5 w-5" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}