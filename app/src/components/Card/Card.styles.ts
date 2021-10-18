import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.rest};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.box};
  & :hover{
    cursor: pointer;
  }
    & .img-container {
      width: 100%;
      height: 250px;
      margin: 0 auto;
      display: flex;
      justify-content:center;
      & img {
        min-width: 100%;
        height: inherit;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
      }
    }
    & .text-container {
      width: 80%;
      margin: 0 auto;
      color: ${props => props.theme.fontColor};
      & .len{
        padding: 5px 10px 8px;
        margin-left: 3px;
        border-radius: 10px;
        border: 1px solid ${props => props.theme.fontColor};

      }
    }
`;

