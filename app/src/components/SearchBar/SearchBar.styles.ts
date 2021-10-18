import styled from 'styled-components';

export const Wrapper = styled.form`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: start;
  & div {
    background-color: ${(props) => props.theme.rest};
    border: 1px solid ${(props) => props.theme.box};
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 10px;
    padding-left: 10px;
    & input {
      width: 80%;
      height: 50%;
      background-color: ${(props) => props.theme.rest};
      color: ${(props) => props.theme.fontColor};
      border: none;
      margin-left: 10px;
      &:focus {
        border: 1px solid ${(props) => props.theme.fontColor};
        outline: none;
      }
    }
  }
`;
