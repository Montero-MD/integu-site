import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  menuItems?: { href: string; label: string; subItems?: { href: string; label: string }[] }[];
}

const NavItem: React.FC<NavItemProps> = ({ label, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState<number | null>(null);

  return (
    <div className="relative group" onMouseLeave={() => { setIsOpen(false); setActiveMenuItemIndex(null); }}>
      <button
        className="text-[#474856] hover:text-[#023AA5] flex items-center"
        onMouseEnter={() => setIsOpen(true)}
      >
        {label}
        <AnimatePresence mode="wait">
          {menuItems ? (
            isOpen ? (
              <motion.div
                key="expand-less"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ExpandLessIcon />
              </motion.div>
            ) : (
              <motion.div
                key="expand-more"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ExpandMoreIcon />
              </motion.div>
            )
          ) : (
            <motion.div
              key="chevron-right"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRightIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      {menuItems && isOpen && (
        <div className="absolute left-0 mt-0 bg-white shadow-lg group-hover:block z-10" onMouseLeave={() => { setIsOpen(false); setActiveMenuItemIndex(null); }}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveMenuItemIndex(index)}
                onMouseLeave={() => setActiveMenuItemIndex(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-2 text-sm text-[#474856] hover:bg-[#023AA5] hover:text-white whitespace-nowrap"
                  role="menuitem"
                >
                  {item.subItems ? (
                    <>
                      {item.label}
                      <ChevronRightIcon style={{ fontSize: '16px' }} />
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
                {item.subItems && activeMenuItemIndex === index && (
                  <div className="absolute left-full top-0 bg-white shadow-lg ml-0" 
                  role="menu" aria-orientation="vertical" aria-labelledby={`submenu-button-${index}`}>
                    <div className="py-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#474856] hover:bg-[#023AA5] hover:text-white whitespace-nowrap"
                          role="menuitem"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
