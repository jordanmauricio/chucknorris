import React, { useState, useEffect } from 'react';
import JokeList from './JokeList';

const Jokes = () => {
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
        return <JokeList jokes={jokes} fetchData={fetchData} />
    }
}

export default Jokes;