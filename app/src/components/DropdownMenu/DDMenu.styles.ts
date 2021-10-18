import styled from 'styled-components';

export const Dropdown = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  & > button {
    background-color: ${(props) => props.theme.rest};
    color: ${(props) => props.theme.fontColor};
    width: 170px;
    height: 50%;
    text-align: left;
    padding: 0 0 0 15px;
    border: 1px solid ${(props) => props.theme.box};
    & img {
      padding: 0 20px;
    }
    & .visiblePaloma {
      transform: rotate(180deg);
      transition: transform 500ms ease-in-out;
    }
    & .noVisiblePaloma {
      transform: rotate(0);
      transition: transform 500ms ease-in-out;
    }
  }
  & .visible {
    width: 170px;
    margin: 0;
    display: block;
    position: absolute;
    right: 0;
    top: calc(80% + 0.25rem);
    background-color: ${(props) => props.theme.rest};
    padding: 0.75rem 0;
    border-radius: 0.25rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    transition: opacity 400ms ease-in-out, transform 400ms ease-in-out;
    & li {
      list-style: none;
      & button {
        background-color: ${(props) => props.theme.rest};
        color: ${(props) => props.theme.fontColor};
        padding: 10px 0 10px 20px;
        display: block;
        width: 170px;
        height: inherit;
        text-align: left;
        border: none;
        &:hover {
          border: 1px solid ${(props) => props.theme.fontColor};
        }
      }
      & .under {
        text-decoration: underline;
      }
    }
  }
  & .no-visible {
    opacity: 0;
    position: absolute;
    transform: translateY(-20px);
    pointer-events: none;
  }
`;
