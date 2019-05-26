import React, { useState, useEffect } from 'react';
import JokeRow from './JokeRow';

const JokeList = () => {
    const [ jokes, setJokes ] = useState(false);

    if(jokes === false){
        return <h1>Loading...</h1>;
    } else {
        return <div>
            <button type="button">
                Get new jokes!
            </button>
            <ul>
                {jokes.map((joke, index) => {
                    return <JokeRow index={index} joke={joke.joke}></JokeRow>
                })}
            </ul>
        </div>
    }
}

export default JokeList;