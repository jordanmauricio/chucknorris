import { useState, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import JokeList from './JokeList';
import FavoriteList from './FavoritesList';

import store from 'store';

const Jokes = () => {
    const stored_ids = store.get('joke_ids') ? store.get('joke_ids') : [];
    const [ jokes, setJokes ] = useState(false);
    const [ favorites, setFavorites ] = useState([]);
    const [ joke_ids, setJokeIds] = useState(stored_ids);
    
    const hookCheck = [joke_ids.join(',')];
    let favRef = favorites;

    const fetchData = async () => {
        await fetch('http://localhost:9001/chuck')
            .then(res => res.json())
            .then(res => setJokes(res.jokes))
            .catch(err => console.error('Fetch error:', err));
    };

    const fetchJokes = async (joke_ids) => {
        if( joke_ids.length > 0 ){
            await fetch(`http://localhost:9001/specific-jokes?jokes=${joke_ids}`)
                .then(res => res.json())
                .then(res => setFavorites(res))
                .catch(err => console.error('Fetch error:', err));
        }
    };

    const addJoke = ( joke ) => {
        const exists = favorites.some(({id}) => id === joke.id);
        if( !exists && favorites.length <= 9){
            favRef = favRef.concat(joke);

            const ids = extractIds(favRef);
            store.set('joke_ids', ids);
            setJokeIds(ids);
            return setFavorites(favRef);
        }
    }

    const removeJoke = ( joke ) => {
        // using filter to trigger re-render on newly created array
        if( favRef.indexOf(joke) >= 0 ){
            favRef = favRef.filter(fav => fav !== joke)
            
            const ids = extractIds(favRef);
            store.set('joke_ids', ids);
            setJokeIds(ids);
            return setFavorites(favRef);
        }
    }

    const extractIds = ( joke_arr ) => {
        return joke_arr.map(joke => joke.id );
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchJokes(joke_ids);
    }, hookCheck);

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
    grid-template-columns: 55% 35%;
    grid-template-rows: 100%;
    justify-content: center;
`

export default Jokes;