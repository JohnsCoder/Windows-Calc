import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  color: #FFF;
  margin: 0;
  padding: 0;
}
body {
  background-color: #F5F5F5;
  font-family: 'inter';
} 

#root {
  display: grid;
  grid-template-rows: 44% 1fr;
  
  max-width: 386px;
  margin: 10vh auto;

  background: var(--background);
}
:root{
  --background: #252525;
  --green-button :#33845D;
  --black-button:#090909;
  --gray-button:#181818;
  --word: #FFFFFF;
}
`;
