import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={`relative ${className || ''}`}>
      <button
        className="text-[#474856] hover:text-[#023AA5]"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <SearchIcon fontSize='large'/>
      </button>
      {isSearchOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg focus:outline-none">
          <div className="py-0" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabIndex={-1}>
            <div className="px-4 py-2" role="menuitem">
              <input
                type="text"
                className="block w-full sm:text-sm text-[#474856]"
                placeholder="Search Integu..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
