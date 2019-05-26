import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import JokeList from './JokeList';
import FavoriteList from './FavoritesList';

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

    const fetchJokes = async () => {
        const joke_ids = [];
        favorites.forEach(fav => joke_ids.push(fav.id));
        console.log('fetc:', joke_ids);
        // await fetch('http://localhost:9001/chuck')
        //     .then(res => res.json())
        //     .then(res => setJokes(res.jokes))
        //     .catch(err => console.error('Fetch error:', err));
    };

    const addJoke = ( joke ) => {
        if( favRef.indexOf(joke) === -1 ){
            favRef = favRef.concat(joke);
            return setFavorites(favRef)
        }
    }

    const removeJoke = ( joke ) => {
        // using filter to trigger re-render on newly created array
        if( favRef.indexOf(joke) >= 0 ){
            favRef = favRef.filter(fav => fav !== joke)
            return setFavorites(favRef)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(jokes === false){
        return <h1>Loading...</h1>;
    } else {
        return <div css={jokeColumns}>
            <JokeList
                jokes={jokes}
                fetchData={fetchData}
                addJoke={addJoke}
            />
            <FavoriteList
                jokes={favorites}
                fetchData={fetchJokes}
                removeJoke={removeJoke}
            />
        </div>
    }
}

const jokeColumns = css`
    display: grid;
    grid-template-columns: 55vw 35vw;
    grid-template-rows: 100%;
    justify-content: center;
`

export default Jokes;