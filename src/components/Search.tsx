import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={`relative ${className || ''}`}>
      {/* Search Icon Button */}
      <button
        className="text-[#474856] hover:text-[#023AA5]"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <SearchIcon fontSize="large" />
      </button>

      {/* AnimatePresence handles mount/unmount animations */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            // Animation settings
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            
            // Positioning: to the right of the icon, centered vertically
            className="
              absolute
              top-1/2
              right-10
              -translate-y-1/2
              ml-2
              w-54
              bg-white
              rounded-md
              shadow-lg
              focus:outline-none
              border-2
              border-[#023AA5]
            "
          >
            <div
              className="py-0"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu-button"
              tabIndex={-1}
            >
              <div className="px-4 py-2" role="menuitem">
                <input
                  type="text"
                  className="block w-full sm:text-sm text-[#474856]"
                  placeholder="Search Integu..."
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
