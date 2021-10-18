import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 40px;
    background-color: ${props => props.theme.rest};
    border: 1px solid ${props => props.theme.box};
    & img{
        height: 30%;
        padding-top:2px;
        margin-right: 10px;
    }
    & span{
        color: ${props => props.theme.fontColor};
        font-size: 1.1rem;
    }
`;