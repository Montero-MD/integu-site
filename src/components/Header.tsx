"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import Search from './Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

        <div className="hidden md:flex items-center space-x-6 md:flex">
          <nav className="flex items-center space-x-6">
            <NavItem
              label="Our Brands"
              menuItems={[
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
              ]}
            />
            <NavItem
              label="Our Initiatives"
              menuItems={[
                { href: "#", label: "New Products" },
                { href: "#", label: "Integrated Distribution" },
                { href: "#", label: "Patient Resources with Practitioners / Medical Societies" },
                { href: "#", label: "PRIDE" },
                { href: "#", label: "DRIVE" },
                { href: "#", label: "INSTIGATTER" }
              ]}
            />
            <NavItem
              label="Our Story"
              menuItems={[
                { href: "#", label: "Who We Are and What We Do" },
                { href: "#", label: "Milestones" },
                { href: "#", label: "Growth" },
                { href: "#", label: "Structure and Leadership" },
              ]}
            />
            <NavItem
              label="Your Resources"
              menuItems={[
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
              ]}
            />
            <NavItem
              label="Your Feedback"
            />
            <NavItem
              label="Your Career"
            />
          </nav>
        </div>


        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#474856] hover:text-[#023AA5] focus:outline-none">
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Search Icon - Moved to be after menu button for mobile layout */}
        <Search className="ml-4 md:ml-0" />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white text-gray-800 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col p-4">
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
              { href: "#", label: "New Products" },
              { href: "#", label: "Integrated Distribution" },
              { href: "#", label: "Patient Resources with Practitioners / Medical Societies" },
              { href: "#", label: "PRIDE" },
              { href: "#", label: "DRIVE" },
              { href: "#", label: "INSTIGATTER" }
            ]}
          />
          <NavItem
            label="Our Story"
            menuItems={[
              { href: "#", label: "Who We Are and What We Do" },
              { href: "#", label: "Milestones" },
              { href: "#", label: "Growth" },
              { href: "#", label: "Structure and Leadership" },
            ]}
          />
          <NavItem
            label="Your Resources"
            menuItems={[
              { href: "#", label: "HealthCare Partners" },
              { href: "#", label: "Patients" },
              { href: "#", label: "Investors, Partners, Suppliers" },
            ]}
          />
          <NavItem
            label="Your Feedback"
          />
          <NavItem
            label="Your Career"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
