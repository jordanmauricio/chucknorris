/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import JokeRow from './JokeRow';

const FavoriteList = ({ jokes, fetchData, removeJoke }) => {

    const setTimer = (amount) => {
        setInterval(() => fetchData(amount), 5000)
    }

    return <div css={listStyle}>
        <h1>Favorite Jokes</h1>
        {
            jokes.length > 0
            ? jokes.map((joke, index) => (
                <JokeRow
                    key={index}
                    joke={joke}
                    removeJOke={joke}
                />
            ))
            : <p>You don't seem to have any favorites yet!</p>
        }
        <button onClick={(e) => setTimer(1)}>Add 1 random joke</button>
    </div>
};

const listStyle = css`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

export default FavoriteList;