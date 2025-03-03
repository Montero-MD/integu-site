import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative hidden md:block">
      <button
        className="text-[#474856] hover:text-[#023AA5]"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        {/* Search Icon Placeholder - Replace with actual icon later */}
        <SearchIcon/>
      </button>
      {isSearchOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-0" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabIndex={-1}>
            <div className="px-4 py-2" role="menuitem">
              <input
                type="text"
                className="shadow-sm focus:ring-[#023AA5] focus:border-[#023AA5] block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
