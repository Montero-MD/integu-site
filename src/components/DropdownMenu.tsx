"use client";

import React from 'react';
import Link from 'next/link';

interface DropdownMenuProps {
  isOpen: boolean;
  onMouseLeave: () => void;
  menuItems: { href: string; label: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onMouseLeave, menuItems }) => {
  return (
    <div className={`absolute left-0 mt-0 w-48 bg-white shadow-lg focus:outline-none ${isOpen ? 'block' : 'hidden'}`} onMouseLeave={onMouseLeave}>
      <div className="py-0" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabIndex={-1}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center justify-between px-4 py-2 text-sm text-[#474856] hover:bg-[#023AA5] hover:text-white"
            role="menuitem"
          >
            {item.label}
            <svg className="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.757 14.586l.707.707L11.414 10l-4.95-4.95-1.414 1.414L10 12.828z"/></svg>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
