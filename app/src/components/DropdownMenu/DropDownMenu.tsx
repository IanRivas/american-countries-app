import { useState, useEffect, useRef } from 'react';
import { Dropdown } from './DDMenu.styles';

import palomaDark from '../../assets/paloma-dark.svg';
import palomaLight from '../../assets/paloma-light.svg';

type props = {
  isTheme: boolean;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
};

function DropDownMenu({ isTheme, region, setRegion }: props) {
  const refUl = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (visible && refUl.current && !refUl.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [visible]);

  return (
    <Dropdown>
      <button onClick={() => setVisible((e) => !e)}>
        Filter by Region{' '}
        {isTheme ? (
          <img
            className={visible ? 'visiblePaloma' : 'noVisiblePaloma'}
            alt="lupa logo"
            src={palomaLight}
          />
        ) : (
          <img
            className={visible ? 'visiblePaloma' : 'noVisiblePaloma'}
            alt="lupa logo"
            src={palomaDark}
          />
        )}
      </button>
      <ul className={visible ? 'visible' : 'no-visible'} ref={refUl}>
        <li>
          <button
            onClick={() => setRegion((e) => (e !== 'North' ? 'North' : 'None'))}
            className={region === 'North' ? 'under' : 'none'}
          >
            North America
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              setRegion((e) => (e !== 'Center' ? 'Center' : 'None'))
            }
            className={region === 'Center' ? 'under' : 'none'}
          >
            Center America
          </button>
        </li>
        <li>
          <button
            onClick={() => setRegion((e) => (e !== 'South' ? 'South' : 'None'))}
            className={region === 'South' ? 'under' : 'none'}
          >
            South America
          </button>
        </li>
      </ul>
    </Dropdown>
  );
}

export default DropDownMenu;
