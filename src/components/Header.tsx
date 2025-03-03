"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import Search from './Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  {
    label: "Our Brands",
    menuItems: [
      {
        href: "#", label: "Brands", subItems: [
          { href: "#", label: "Skin Barrier Health / Atopic Dermatitis" },
          { href: "#", label: "Acne / Acne Prone Skin" },
          { href: "#", label: "Fungal Infectoin / Scalp Health" },
          { href: "#", label: "Ageing Skin" },
          { href: "#", label: "Sun Protection" },
          { href: "#", label: "Hyperhidrosis" },
          { href: "#", label: "Cleansing" },
        ]
      },
      {
        href: "#", label: "Innovative Ingredients", subItems: [
          { href: "#", label: "Spherulite" },
          { href: "#", label: "Redensyl" },
        ]
      },
      { href: "#", label: "Regulatory Compliance" },
      { href: "#", label: "Product Standards" },
    ]
  },
  {
    label: "Our Initiatives",
    menuItems: [
      { href: "#", label: "New Products" },
      { href: "#", label: "Integrated Distribution" },
      { href: "#", label: "Patient Resources with Practitioners / Medical Societies" },
      { href: "#", label: "PRIDE" },
      { href: "#", label: "DRIVE" },
      { href: "#", label: "INSTIGATTER" }
    ]
  },
  {
    label: "Our Story",
    menuItems: [
      { href: "#", label: "Who We Are and What We Do" },
      { href: "#", label: "Milestones" },
      { href: "#", label: "Growth" },
      { href: "#", label: "Structure and Leadership" },
    ]
  },
  {
    label: "Your Resources",
    menuItems: [
      {
        href: "#", label: "HealthCare Partners", subItems: [
          { href: "#", label: "Local & International Derm Meetings" },
          { href: "#", label: "Starter Dose Requests" },
          { href: "#", label: "Integu Special Offers" },
          { href: "#", label: "Contact Us For Anything" },
        ]
      },
      {
        href: "#", label: "Patients", subItems: [
          { href: "#", label: "Find a Dermatologist" },
          { href: "#", label: "Free EskeenSultation" },
          { href: "#", label: "Ask Us Anything About Skin" },
        ]
      },
      { href: "#", label: "Investors, Partners, Suppliers" },
    ]
  },
  {
    label: "Your Feedback"
  },
  {
    label: "Your Career"
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-50 bg-opacity-10 text-white fixed top-0 left-0 w-full py-4 z-50">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between"> {/* Increased padding for larger screens */}
        {/* Logo */}
        <Logo />
        {/* Desktop Menu */}
        <div className="hidden h-full lg:flex items-center space-x-6">
          <nav className="flex h-full items-center space-x-6">
          {navItems.map((navItem, index) => (
            <NavItem
              key={index}
              label={navItem.label}
              menuItems={navItem.menuItems}
            />
          ))}
        </nav>
      </div>


        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu} className="text-[#474856] hover:text-[#023AA5] focus:outline-none">
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Search Icon - Moved to be after menu button for mobile layout */}
        <Search className="hidden lg:block ml-4 md:ml-0" />
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white text-gray-800 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Search className="block lg:hidden text-right mx-3" />
        <nav className="flex flex-col p-4">
          {navItems.map((navItem, index) => (
            <NavItem
              key={index}
              label={navItem.label}
              menuItems={navItem.menuItems}
              className="mb-4"
              isMobile={true}
            />
          ))}
        </nav>
      </div>

    </header>
  );
};

export default Header;
