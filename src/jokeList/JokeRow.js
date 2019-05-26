import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const JokeRow = ({ joke, addJoke, removeJoke }) => {
    if( addJoke ){
        return <li css={jokeRowStyle}>
            <p onClick={(e) => addJoke(joke)}>{joke.joke}</p>
        </li>
    } else {
        return <li css={jokeRowStyle}>
            <p>{joke.joke}</p>
            <button type="button" alt="remove joke" onClick={(e) => removeJoke(joke)}>
            </button>
        </li>
    }
};

// TODO(fix button height)
const jokeRowStyle = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    p {
        padding-right: 15px;
    }

    button {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        align-items: flex-end;
        padding: 10px;
        position: relative;

        &::after {
            content: '×';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

export default JokeRow;