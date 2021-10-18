import React from 'react'

import flechaDark from '../../assets/flecha-dark.svg';
import flechaLight from '../../assets/flecha-light.svg';

import {LinkStyled} from './BackBtn.styles';

type Props = {
    isTheme: boolean;
};

function BackBtn({isTheme}:Props): JSX.Element {
    return (
        <LinkStyled to="/">
            {isTheme? <img alt="flecha-logo" src={flechaLight} /> : <img alt="flecha-logo" src={flechaDark} />}
            <span>Back</span>
        </LinkStyled>
    )
}

export default BackBtn
