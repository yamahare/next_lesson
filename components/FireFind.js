import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/storage';

function FireFind(props){
    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState('');

    function doChange(e){
        setInputText(e.target.value);
    }
    function doAction(e){
        findFireData(inputText);
    }

    function findFireData(s){
        let db = firebase.database();
        let ref = db.ref('sample/');
        ref.orderByKey()
            .equalTo(s)
            .on('value', (snapshot)=>{
                setData(snapshot.val());
            })
    }

    function getTableData(){
        let result = [];
        if(data === null || data.length === 0){
            return [<tr key="0"><th>NO DATA.</th></tr>];
        }
        for(let i in data){
            result.push(<tr key={i}>
                <th>{data[i].id}</th>
                <th>{data[i].name}</th>
                <th>{data[i].message}</th>
            </tr>)
        }
        return result;
    }

    return (
        <div>
            <input type="text" onChange={doChange} value={inputText} />
            <button onClick={doAction}>Find</button>
            <table>
                <tbody>
                    {getTableData()}
                </tbody>
            </table>
        </div>
    )

}

export default FireFind;
