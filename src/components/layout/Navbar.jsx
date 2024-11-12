import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ isAuthenticated, isAdmin, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const userNavLinks = [
    { name: 'About Us', path: '/' },
    { name: 'Book', path: '/book' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Help', path: '/help' },
  ];

  const authLinks = isAuthenticated 
    ? [{ name: 'Profile', path: '/profile' }]
    : [
        { name: 'Register', path: '/register' },
        { name: 'Login', path: '/login' }
      ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary dark:text-white">
                Nimbus Airways
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {userNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            {authLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;