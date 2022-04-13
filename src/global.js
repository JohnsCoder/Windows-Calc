import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  color: #FFF;
  font-family: 'inter';
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF456;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root{
  --background: #797979;
  --green-button :#33845D;
  --black-button:#111111;
  --gray-button:#333333;
  --word: #FFFFFF;
}
`;
