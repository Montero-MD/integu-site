"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from '@mui/icons-material';

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
            {item.label} <ChevronRight />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
