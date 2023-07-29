import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}

:root {
    --color--brand1: #4529E6;
    --color--brand2: #5126EA;
    --color--brand3: #B0A6F0;
    --color--brand4: #d8e3ff;
    
    --color-sucess: #3FE864;
    --color-negative: #E83F5B;
    
    --gray-scale-1: #121214;
    --gray-scale-2: #212529;
    --gray-scale-3: #343B41;
    --gray-scale-4: #868E96;
    --gray-scale-5: #F8F9FA;
    
    --black-opacity: rgba(0, 0, 0, 0.5);
    
   font-size: 60%;
}

@media(min-width: 700px){
    :root{
        font-size: 62.5%;
    }
  }

  ::-webkit-scrollbar {
    background-color: var(--color--grey-8);
   
    height: 10px;
    width: 10px;
   
    border: solid 1px var(--color--grey-2);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--color--brand1);
   
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color--brand2);
   
    border-radius: 4px;
  }

  button {
    cursor: pointer;
  }

  input {
    height: 4rem;

    padding-left: 1.6rem;
    letter-spacing: 1px;

    background-color: var(--gray-scale-5);
    color: var(--gray-scale-1);

    border-radius: 2.4rem;
    border: none;
  }

body {
    background-color: var(--gray-scale-5);
}
`;

export default GlobalStyle;
