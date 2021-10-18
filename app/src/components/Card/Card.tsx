import React from 'react';
import { useHistory } from 'react-router-dom';

import { data } from '../../views/Home/Home';

import { Wrapper } from './Card.styles';

interface cardProp {
  countryData: data;
}

function Card({ countryData }: cardProp): JSX.Element {
  const { name, capital, region, flag, population, lenguage } = countryData;
  const history = useHistory();
  const completeFlag = `http://localhost:3001/countries/${flag}`;

  const handleClick = () => {
    history.push(`/country/${name}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <div className="img-container">
        <img src={completeFlag} alt="flag" />
      </div>
      <div className="text-container">
        <h2>{name.replace(/_/g, ' ')}</h2>
        <p>
          Population:{' '}
          {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p>Region: {region} America</p>
        <p>Capital: {capital}</p>
        <p>
          Lenguage:{' '}
          {lenguage.map((leng, index) => {
            return (
              <span className="len" key={index}>
                {leng}
              </span>
            );
          })}
        </p>
      </div>
    </Wrapper>
  );
}

export default Card;

//Middle
