import React from 'react';

const JokeRow = ({joke, index}) => <li key={index}>{joke}</li>;

export default JokeRow;