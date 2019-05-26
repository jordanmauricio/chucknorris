import React, { useState, useEffect } from 'react';
import JokeRow from './JokeRow';

const JokeList = () => {
    const [ jokes, setJokes ] = useState(false);

    const fetchData = async () => {
        await fetch('http://localhost:9001/chuck')
            .then(res => res.json())
            .then(res => setJokes(res.jokes))
            .catch(err => console.error('Fetch error:', err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    if(jokes === false){
        return <h1>Loading...</h1>;
    } else {
        return <div>
            <button type="button" onClick={(e) => fetchData()}>
                Get new jokes!
            </button>
            <h1>Jokes!</h1>
            <ol>
                {jokes.map((joke, index) => {
                    return <JokeRow key={index} joke={joke.joke}></JokeRow>
                })}
            </ol>
        </div>
    }
}

export default JokeList;