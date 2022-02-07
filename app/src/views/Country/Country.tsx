import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import BackBtn from '../../components/BackBtn';
import { data as DataType } from '../Home/Home';

import { Wrapper } from './Country.styles';

type CountryParams = {
  countryName: string;
};
type Props = {
  isTheme: boolean;
};

function Country({ isTheme }: Props): JSX.Element {
  const { countryName } = useParams<CountryParams>();
  const { isLoading, error, data } = useQuery('apiData', () =>
    fetch('/api').then((res) => res.json())
  );

  if (isLoading) return <h3>Loading...</h3>;

  if (error instanceof Error) {
    return <h3>An error has occurred: + {error.message}</h3>;
  }
  const { data: api } = data;
  const { name, capital, region, population, flag, lenguage } = api.find(
    (country: DataType) => country.name === countryName
  );
  const completeFlag = `/countries/${flag}`;

  return (
    <Wrapper>
      <div className="btn">
        <BackBtn isTheme={isTheme} />
      </div>
      <div className="card-header">
        <img alt="flag" src={completeFlag} />
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <div className="container">
          <div>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
          <div>
            <p>
              Languages: <span className="len">{lenguage}</span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Country;

// otros , currencies , domain ,
