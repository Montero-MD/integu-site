"use client";

import React from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import Search from './Search';

const Header = () => {
  return (
    <header className="bg-gray-50 bg-opacity-10 text-white fixed top-0 left-0 w-full py-4 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem
            label="Our Brands"
            menuItems={[
              { href: "#", label: "Brands" },
              { href: "#", label: "Innovative Ingredients" },
              { href: "#", label: "Regulatory Compliance" },
              { href: "#", label: "Product Standards" },
            ]}
          />
          <NavItem
            label="Our Initiatives"
            menuItems={[
              { href: "#", label: "Item 1" },
              { href: "#", label: "Item 2" },
              { href: "#", label: "Item 3" },
            ]}
          />
          <NavItem
            label="Our Story"
            menuItems={[
              { href: "#", label: "Item 1" },
              { href: "#", label: "Item 2" },
              { href: "#", label: "Item 3" },
            ]}
          />
          <NavItem
            label="Your Career"
            menuItems={[
              { href: "#", label: "Item 1" },
              { href: "#", label: "Item 2" },
              { href: "#", label: "Item 3" },
            ]}
          />
          <NavItem
            label="Your Feedback"
            menuItems={[
              { href: "#", label: "Item 1" },
              { href: "#", label: "Item 2" },
              { href: "#", label: "Item 3" },
            ]}
          />
          <NavItem
            label="Your Resources"
            menuItems={[
              { href: "#", label: "Item 1" },
              { href: "#", label: "Item 2" },
              { href: "#", label: "Item 3" },
            ]}
          />
        </nav>

        {/* Search Icon */}
        <Search />
      </div>
    </header>
  );
};

export default Header;
