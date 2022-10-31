import { useState, useEffect } from 'react';

export const useClickOutside = refs => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSetVisibility = value => {
    setIsVisible(value);
  };

  useEffect(() => {
    const listener = event => {
      const isRefClicked = refs.some(ref => !ref.current || ref.current.contains(event.target));
      handleSetVisibility(isRefClicked);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [refs]);

  return { isVisible, handleSetVisibility };
};
