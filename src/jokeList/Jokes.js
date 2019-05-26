import React, { useState, useEffect } from 'react';
import JokeList from './JokeList';

const Jokes = () => {
    const [ jokes, setJokes ] = useState(false);
    const [ favorites, setFavorites ] = useState([]);
    let favRef = favorites;

    const fetchData = async () => {
        await fetch('http://localhost:9001/chuck')
            .then(res => res.json())
            .then(res => setJokes(res.jokes))
            .catch(err => console.error('Fetch error:', err));
    };

    const addJoke = ( joke ) => {
        if( favRef.indexOf(joke) === -1 ){
            favRef = favRef.concat(joke);
            return setFavorites(favRef)
        }
    }

    const removeJoke = ( joke ) => {
        return favRef.splice(favRef.indexOf(joke), 1)
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(favorites);

    if(jokes === false){
        return <h1>Loading...</h1>;
    } else {
        return <JokeList
            jokes={jokes}
            fetchData={fetchData}
            addJoke={addJoke}
            removeJoke={removeJoke}
        />
    }
}

export default Jokes;