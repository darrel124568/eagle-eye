import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Feather, Menu, X, Heart, Compass, Info, Home, Radar, Book } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/explore', label: 'Explore', icon: Compass },
    { to: '/favorites', label: 'Favorites', icon: Heart },
    { to: '/notes', label: 'Notes', icon: Book },
    { to: '/about', label: 'About', icon: Info }    
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${
      isActive
        ? 'bg-white/16 text-white'
        : 'text-blue-100 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-white/10 bg-[#082b50]/95 px-4 text-white shadow-lg shadow-blue-950/10 backdrop-blur md:px-8">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <NavLink to="/" className="hidden items-center gap-2 font-semibold tracking-tight md:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400 text-[#082b50]"><Feather className="h-4 w-4" /></span>
          Eagle Eye
        </NavLink>
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-2">
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
            className="p-2 rounded-md text-blue-100 hover:bg-white/10 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      
      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="absolute left-0 top-16 z-50 flex w-full flex-col space-y-2 border-b border-white/10 bg-[#082b50] p-4 text-white shadow-lg md:hidden">
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
      <div className="flex items-center space-x-2">
      <Link to="/local-radar" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20" aria-label="Local Radar">
            <Radar className="h-4 w-4 text-sky-200" />
      </Link>
      <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20" onClick={() => alert('User features coming soon!')} aria-label="User profile">
            <Feather className="h-4 w-4 text-sky-200" />
      </button>
      </div>
      </div>
    </nav>
  );
}
