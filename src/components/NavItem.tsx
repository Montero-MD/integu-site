import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';

interface NavItemProps {
  label: string;
  menuItems?: { href: string; label: string }[];
}

const NavItem: React.FC<NavItemProps> = ({ label, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseLeave={() => setIsOpen(false)}>
      <button
        className="text-[#474856] hover:text-[#023AA5] flex items-center"
        onMouseEnter={() => setIsOpen(true)}
      >
        {label} <svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </button>
      {menuItems && (
        <DropdownMenu isOpen={isOpen} onMouseLeave={() => setIsOpen(false)} menuItems={menuItems} />
      )}
    </div>
  );
};

export default NavItem;
