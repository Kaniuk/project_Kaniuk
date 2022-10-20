import {createGlobalStyle} from 'styled-components';

const lightTheme = {
    body: '#FFE6E6'
};
const darkTheme = {
    body: '#400D51'
};
const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }
`;
export {
    lightTheme,
    darkTheme,
    GlobalStyles
};

