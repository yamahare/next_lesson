import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter(){
    const dispatch = useDispatch();
    const counter = useSelector(state => state);

    return (
        <div>
            <p>{counter.message}</p>
            <p>{counter.count} </p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>カウントアップ</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>カウントダウン</button>
            <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
        </div>
    )
}

export default Counter;