import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/storage';
import Router from 'next/router';

function Fireadd(props){
    const [data, setData] = useState([]);
    const [lastID, setLastID] = useState(-1);
    const [inputMessageText, setInputMessageText] = useState('');
    const [inputNameText, setInputNameText] = useState('');

    function doChangeName(e){
        setInputNameText(e.target.value);
    }
    function doChangeMessage(e){
        setInputMessageText(e.target.value);
    }
    function doAction(e){
        addFireData();
        Router.push('/');
    }

    function getLastID(){
        let db = firebase.database();
        let ref = db.ref('sample/');
        ref.orderByKey()
           .limitToLast(1)
           .on('value', (snapshot)=>{
               let res = snapshot.val();
               for(let i in res){
                   setLastID(i);
               }
               return;
           })
    }

    function addFireData(){
        if(lastID == -1){
            return;
        }
        let id = lastID * 1 + 1;
        let db = firebase.database();
        let ref = db.ref('sample/'+id);
        ref.set({
            id: id,
            message: inputMessageText,
            name: inputNameText
        })
    }

    if(lastID === -1){ getLastID(); }

    return (
        <div>
            {(lastID==-1) ? 
            <p>please wait...</p>
            :
            <table>
                <tbody>
                    <tr>
                        <th>name</th>
                        <td><input type="text" placeholder="your name." 
                             onChange={doChangeName} value={inputNameText} />
                        </td>
                    </tr>
                    <tr>
                        <th>message</th>
                        <td><input type="text" placeholder="type message."
                             onChange={doChangeMessage} value={inputMessageText} />
                        </td>
                    </tr>
                    <tr><th></th>
                    <td>
                        <button onClick={doAction}>追加</button>
                    </td></tr>
                </tbody>
            </table>
            }
        </div>
    )

}

export default Fireadd;
