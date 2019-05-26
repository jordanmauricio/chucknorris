import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import JokeRow from './JokeRow';

const FavoriteList = ({ jokes, fetchData, removeJoke }) => (
    <div css={listStyle}>
        <h1>Favorite Jokes</h1>
        <ol>
            {jokes.map((joke, index) => (
                <JokeRow 
                    key={index} 
                    joke={joke}
                    removeJoke={removeJoke}
                />
            ))}
        </ol>
    </div>
);

const listStyle = css`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`

export default FavoriteList;