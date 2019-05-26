import React from 'react';
import { Global, css } from '@emotion/core';
import JokeList from './jokeList/JokeList';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyle}/>
      <JokeList />
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
`;

export default App;
