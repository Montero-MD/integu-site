import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion, AnimatePresence } from 'framer-motion';

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
      {menuItems && (
        <DropdownMenu isOpen={isOpen} onMouseLeave={() => setIsOpen(false)} menuItems={menuItems} />
      )}
    </div>
  );
};

export default NavItem;
