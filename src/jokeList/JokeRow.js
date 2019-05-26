import React from 'react';

const JokeRow = ({ joke, addJoke, removeJoke }) => (
    <li>
        <p onClick={(e) => addJoke(joke)}>{joke.id} - {joke.joke}</p>
        <button type="button" onClick={(e) => removeJoke(joke)}>
            Remove - {joke.id}
        </button>
    </li>
);

export default JokeRow;