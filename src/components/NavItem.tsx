import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  menuItems?: {
    href: string;
    label: string;
    subItems?: { href: string; label: string }[];
  }[];
  className?: string;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, menuItems, className, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Desktop: track hover for sub-items
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState<number | null>(null);
  // Mobile: track click toggle for sub-items
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setActiveMenuItemIndex(null);
    setOpenSubIndex(null);
  };

  return (
    <div
      className={`relative group h-full ${className || ''}`}
      // For desktop, close dropdown when the mouse leaves the whole container.
      onMouseLeave={!isMobile ? () => { setIsOpen(false); setActiveMenuItemIndex(null); } : undefined}
    >
      <button
        className={`w-full h-full flex items-center justify-between text-sm whitespace-nowrap ${
          isOpen ? 'text-[#023AA5]' : 'text-[#474856] hover:text-[#023AA5]'
        }`}
        // On desktop, open on hover; on mobile, toggle on click.
        onMouseEnter={!isMobile ? () => setIsOpen(true) : undefined}
        onClick={isMobile ? toggleOpen : undefined}
      >
        <span>{label}</span>
        <AnimatePresence mode="wait">
          {menuItems ? (
            isOpen ? (
              <motion.div
                key="main-expand-less"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ExpandLessIcon />
              </motion.div>
            ) : (
              <motion.div
                key="main-expand-more"
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
        // For desktop, position the main dropdown absolutely below the nav item;
        // For mobile, use static positioning.
        <div
          className={`${isMobile ? 'static' : 'absolute left-0 top-full'} bg-white shadow-lg z-10`}
          onMouseLeave={!isMobile ? () => setIsOpen(false) : undefined}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                // For desktop, set activeMenuItemIndex on hover.
                onMouseEnter={!isMobile ? () => setActiveMenuItemIndex(index) : undefined}
                onMouseLeave={!isMobile ? () => setActiveMenuItemIndex(null) : undefined}
              >
                {item.subItems ? (
                  <>
                    {/* Toggle for items with sub-items */}
                    <div
                      className={`flex items-center justify-between w-full px-4 py-2 text-sm whitespace-nowrap cursor-pointer ${
                        isMobile
                          ? openSubIndex === index
                            ? 'text-white bg-[#023AA5] bg-opacity-10'
                            : 'text-[#474856] hover:bg-[#023AA5] hover:text-white'
                          : activeMenuItemIndex === index
                          ? 'text-white bg-[#023AA5] bg-opacity-10'
                          : 'text-[#474856] hover:bg-[#023AA5] hover:text-white'
                      }`}
                      onClick={isMobile ? () => setOpenSubIndex(openSubIndex === index ? null : index) : undefined}
                    >
                      <span>{item.label}</span>
                      <AnimatePresence mode="wait">
                        {(isMobile ? openSubIndex === index : activeMenuItemIndex === index) ? (
                          <motion.div
                            key="sub-expand-less"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ExpandLessIcon style={{ fontSize: '16px' }} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="sub-expand-more"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ExpandMoreIcon style={{ fontSize: '16px' }} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <AnimatePresence>
                      {((isMobile && openSubIndex === index) ||
                        (!isMobile && activeMenuItemIndex === index)) && (
                        <motion.div
                          key="subitems"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`${isMobile ? 'static' : 'absolute left-full top-0'} bg-white shadow-lg`}
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-[#474856] hover:bg-[#023AA5] hover:text-white whitespace-nowrap"
                                role="menuitem"
                                onClick={isMobile ? () => setIsOpen(false) : undefined}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-[#474856] hover:bg-[#023AA5] hover:text-white whitespace-nowrap"
                    role="menuitem"
                    onClick={isMobile ? () => setIsOpen(false) : undefined}
                  >
                    {item.label}
                  </Link>
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
