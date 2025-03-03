"use client";

import React from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import Search from './Search';

const Header = () => {
  return (
    <header className="bg-gray-50 bg-opacity-10 text-white fixed top-0 left-0 w-full py-4 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem
            label="Our Brands"
            menuItems={[
              { href: "#", label: "Brands", subItems: [
                { href: "#", label: "Skin Barrier Health / Atopic Dermatitis" },
                { href: "#", label: "Acne / Acne Prone Skin" },
                { href: "#", label: "Fungal Infectoin / Scalp Health" },
                { href: "#", label: "Ageing Skin" },
                { href: "#", label: "Sun Protection" },
                { href: "#", label: "Hyperhidrosis" },
                { href: "#", label: "Cleansing" },
              ] },
              { href: "#", label: "Innovative Ingredients", subItems: [
                { href: "#", label: "Spherulite" },
                { href: "#", label: "Redensyl" },
              ] },
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
                { href: "#", label: "HealthCare Partners", subItems: [
                  { href: "#", label: "Local & International Derm Meetings" },
                  { href: "#", label: "Starter Dose Requests" },
                  { href: "#", label: "Integu Special Offers" },
                  { href: "#", label: "Contact Us For Anything" },
                ] },
                { href: "#", label: "Patients", subItems: [
                  { href: "#", label: "Find a Dermatologist" },
                  { href: "#", label: "Free EskeenSultation" },
                  { href: "#", label: "Ask Us Anything About Skin" },
                ] },
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

        {/* Search Icon */}
        <Search />
      </div>
    </header>
  );
};

export default Header;
