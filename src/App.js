import React from 'react';
import { Global, css } from '@emotion/core';
import Jokes from './jokeList/Jokes';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyle}/>
      <Jokes css={wrapper} />
    </div>
  );
}

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Roboto&display=swap');
  
  :root {
    --darkPurple: hsl(243, 22%, 35%);
    --darkBlue: hsl(200, 47%, 45%);
    --lightBlue: hsl(181, 59%, 54%);
    --aqua: hsl(161, 65%, 80%);
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: var(--darkBlue);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Kaushan Script', cursive;
    color: var(--darkPurple);
  }

  button {
    background-color: var(--aqua);
    color: var(--darkPurple);
    padding: 20px 40px;
    font-size: 21px;
    border: 1px solid var(--darkPurple);
    border-radius: 5px;
    cursor: pointer;
  }
`;

const wrapper = css`
  max-width: 1920px;
  margin: 0 30px;
  box-sizing: border-box;
`;

export default App;
