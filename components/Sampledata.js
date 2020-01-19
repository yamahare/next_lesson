import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/storage';

function Sampledata(props){
    const [data, setData] = useState([]);

    function getFireData(){
        let db = firebase.database();
        let ref = db.ref('sample/');
        ref.orderByKey()
            .limitToFirst(10)
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

    if(data.length === 0){ getFireData(); }

    return (
        <table>
            <tbody>
                {getTableData()}
            </tbody>
        </table>
    )

}

export default Sampledata;