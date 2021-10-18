import { useState } from 'react';
import { useQuery } from 'react-query';

import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import DropDownMenu from '../../components/DropdownMenu';

import { Wrapper, Search, Region } from './Home.styles';

export type data = {
  id: number;
  name: string;
  capital: string;
  region: string;
  flag: string;
  population: number;
  lenguage: string[];
};

type Props = {
  isTheme: boolean;
};

function Home({ isTheme }: Props): JSX.Element {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('None');
  const { isLoading, error, data } = useQuery('apiData', () =>
    fetch(`http://localhost:3001/api`).then((res) => res.json())
  );

  if (isLoading) return <h3>Loading...</h3>;

  if (error instanceof Error) {
    return <h3>An error has occurred: + {error.message}</h3>;
  }

  const { data: api } = data;
  return (
    <>
      <Search>
        <SearchBar isTheme={isTheme} setSearch={setSearch} />
        <DropDownMenu isTheme={isTheme} region={region} setRegion={setRegion} />
      </Search>
      {region !== 'None' ? <Region>{region} America</Region> : null}
      <Wrapper>
        {api
          .filter((country: data) =>
            region !== 'None' ? region === country.region : country
          )
          .map((country: data) =>
            country.name.toLowerCase().includes(search.toLowerCase()) ? (
              <Card key={data.id} countryData={country} />
            ) : null
          )}
      </Wrapper>
    </>
  );
}

export default Home;
