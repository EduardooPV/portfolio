import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;

  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px) {
    font-size: 87.5% // 14px
  }
}
  
:target {
  scroll-margin-top: 4rem;
}

body, button, textarea, input {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

body {
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

::-webkit-scrollbar-track {
  background: rgba(50, 50, 50, 0.8);  
}
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: #F89D24; 
  border-radius: 10px;
}

:focus {
  border-radius: 0.25rem;
  border: none;
  outline: 2px solid  #F89D24;
  outline-offset: 4px;
}
`;
