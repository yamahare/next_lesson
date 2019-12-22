import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Calc(){
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const calcStore = useSelector(state => state);

    const style = {
        fontSize: "12px",
        padding: "5px 10px"
    }

    function onChange(e){
        setInput(e.target.value);
    }

    function doAction(){
        dispatch({ type: "ENTER", value: input });
        setInput('');
        return;
    }

    function reset(){
        setInput('');
        return dispatch({ type: "RESET" });
    }

    function onKeyPress(e){
        if(event.keyCode == 13){
            doAction(e);
        }
    }

    let result = [];
    let n = calcStore.data.length;
    for(let i = 0; i < n; i++){
        result.push(<tr key={i}>
            <th>{calcStore.data[i]}</th>
            <td>{calcStore.number[i]}</td>
        </tr>)
    }

    return (
        <div>
            <p>TOTAL: {calcStore.result}</p>
            <input type="text" style={style} size="40" value={input} onChange={onChange} onKeyPress={onKeyPress} />
            <button style={style} onClick={doAction}>Enter</button>
            <button onClick={reset}>RESET</button>
            <hr />
            <table>
                <tbody>{result}</tbody>
            </table>
            <p>{calcStore.message}</p>
        </div>
    )
}

export default Calc;