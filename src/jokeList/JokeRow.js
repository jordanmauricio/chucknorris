/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const JokeRow = ({ joke, addJoke, removeJoke }) => {
    if( addJoke ){
        return <li css={[jokeRowStyle, addJokeRow]}>
            <p onClick={(e) => addJoke(joke)}>{joke.joke}</p>
        </li>
    } else {
        return <li css={jokeRowStyle}>
            <p>{joke.joke}</p>
            <button type="button" alt="remove joke" onClick={(e) => removeJoke(joke)}></button>
        </li>
    }
};

const jokeRowStyle = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

    p {
        padding: 5px 15px;
    }

    button {
        border-radius: 50%;
        width: 20px;
        height: 20px;
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

    :hover {
        background-color: #f5f6fa;
    }
`;

const addJokeRow = css`
    position: relative;
    cursor: pointer;

    :hover {
        &::before {
            content: '+';
            font-weight: 800;
            position: absolute;
        }
    }
`;

export default JokeRow;