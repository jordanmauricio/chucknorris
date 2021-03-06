/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import JokeRow from './JokeRow';

const JokeList = ({ jokes, fetchData, addJoke }) => (
    <div css={listStyle}>
        <h1>Jokes!</h1>
        <ol>
            {jokes.map((joke, index) => (
                <JokeRow 
                key={index}
                joke={joke}
                addJoke={addJoke}
                />
            ))}
        </ol>
        <button type="button" onClick={(e) => fetchData()}>
            Get new jokes!
        </button>
    </div>
);

const listStyle = css`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`

export default JokeList;