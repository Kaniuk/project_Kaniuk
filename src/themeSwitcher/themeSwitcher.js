import {createGlobalStyle} from 'styled-components';

const lightTheme = {
    body: '#FFE6E6',
};
const darkTheme = {
    body: '#400D51',
    a: '#190979',
};
const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.a};
  }
`;
export {
    lightTheme,
    darkTheme,
    GlobalStyles
};

