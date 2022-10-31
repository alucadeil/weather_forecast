import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import SearchPopup from './searchPopup';

const SearchForm = props => {
  const { searchResult, isSearching, onSubmit, onSearchResultClick } = props;

  const inputRef = useRef();
  const buttonRef = useRef();

  const [searchValue, setSearchValue] = useState('');
  const { isVisible, handleSetVisibility } = useClickOutside([inputRef, buttonRef]);

  useEffect(() => {
    if (searchResult && searchValue) handleSetVisibility(true);
  }, [searchResult, searchValue]);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchValue.length <= 2) return;
    onSubmit && onSubmit(searchValue);
  };

  const handleInputChange = e => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <form onSubmit={handleSubmit} className={'flex rounded-lg border-[1px] relative'}>
      <div className={'p-2 w-[400px] border-r-[1px] overflow-hidden '}>
        <input
          ref={inputRef}
          className={'w-full outline-none'}
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search City"
        />
      </div>
      <div className={'flex rounded-r-lg rounded-br-lg overflow-hidden'}>
        <button
          ref={buttonRef}
          className={'text-white h-full px-2 bg-[rgba(72,72,74,.85)] hover:opacity-80'}>
          Search
        </button>
      </div>
      {isVisible && (
        <SearchPopup data={searchResult} isLoading={isSearching} onClick={onSearchResultClick} />
      )}
    </form>
  );
};

SearchForm.propTypes = {
  searchResult: PropTypes.array,
  isSearching: PropTypes.bool,
  onSubmit: PropTypes.func,
  onSearchResultClick: PropTypes.func
};

export default SearchForm;
