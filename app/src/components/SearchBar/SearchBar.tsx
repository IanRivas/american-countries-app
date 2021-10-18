import React from 'react';
import lupaDark from '../../assets/lupa-dark.svg';
import lupaLight from '../../assets/lupa-light.svg';

import { Wrapper } from './SearchBar.styles';

type Props = {
  isTheme: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ isTheme, setSearch }: Props): JSX.Element {
  return (
    <Wrapper>
      <div>
        {isTheme ? (
          <img alt="lupa logo" src={lupaLight} />
        ) : (
          <img alt="lupa logo" src={lupaDark} />
        )}
        <input
          autoFocus
          placeholder="Search for a Country..."
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </Wrapper>
  );
}

export default SearchBar;
