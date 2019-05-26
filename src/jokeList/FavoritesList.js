import { useState, useEffect, useRef } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import JokeRow from './JokeRow';

const FavoriteList = ({ jokes, fetchData, removeJoke }) => {

    const [timerActive, setTimer] = useState(false);

    useInterval(() => {
        fetchData(1);
    }, timerActive ? 5000 : null)

    return <div css={listStyle}>
        <h1>Favorite Jokes</h1>
        {
            jokes.length > 0
            ? jokes.map((joke, index) => (
                <JokeRow
                    key={index}
                    joke={joke}
                    removeJoke={removeJoke}
                />
            ))
            : <p>You don't seem to have any favorites yet!</p>
        }
        <div css={checkboxStyling}>
            <input id="timer" type="checkbox" checked={timerActive} onChange={(e) => setTimer(e.target.checked)} />
            <label htmlFor="timer">Add 1 random joke</label>
        </div>
    </div>
};

// all thanks to Gaearon's post on Overreacted

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}
  
const listStyle = css`
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    li {
        width: 100%;
    }
`;

const checkboxStyling = css`
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid var(--darkPurple);
`;

export default FavoriteList;