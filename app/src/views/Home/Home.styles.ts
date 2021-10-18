import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 85%;
  margin: 0px auto;
  padding-bottom: 50px;
  display: grid;
  grid-auto-rows: 32rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: 80px;
  background-color: ${(props) => props.theme.body};
`;

export const Search = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 100px;
  width: 85%;
  margin: 10px auto;
`;

export const Region = styled.h2`
  width: 85%;
  margin: 10px auto;
  color: ${(props) => props.theme.fontColor};
`;

// Wrapper.defaultProps = {
//   theme: {
//     body: '#E5E5E5',
//   }
// }
