import React from 'react';
import JokeRow from './JokeRow';

const JokeList = ({ jokes, fetchData }) => (
    <div>
        <h1>Jokes!</h1>
        <ol>
            {jokes.map((joke, index) => {
                return <JokeRow key={index} joke={joke}></JokeRow>
            })}
        </ol>
        <button type="button" onClick={(e) => fetchData()}>
            Get new jokes!
        </button>
    </div>
)

export default JokeList;