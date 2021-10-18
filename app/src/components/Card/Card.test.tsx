import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Card from './Card';

test('renders content', () => {
  const countryData = {
    id: 1,
    name: 'United_States',
    capital: 'Washington, D.C.',
    region: 'North',
    flag: 'EEUU.svg',
    population: 331379847,
    lenguage: ['English'],
  };

  const component = render(<Card countryData={countryData} />);

  // component.getByText('United States');
  // component.debug();
  const h2 = component.container.querySelector('h2');
  if (h2 !== null) {
    console.log(prettyDOM(h2));
  }
});

test('clicking the button calls event handler once', () => {
  const countryData = {
    id: 1,
    name: 'United_States',
    capital: 'Washington, D.C.',
    region: 'North',
    flag: 'EEUU.svg',
    population: 331379847,
    lenguage: ['English'],
  };

  const mockHandler = jest.fn();

  const component = render(<Card countryData={countryData} />);
});
