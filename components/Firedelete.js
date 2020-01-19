import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/storage';
import Router from 'next/router';

function Firedelete(props){
    const [ID, setID] = useState();

    function doChange(e){
        setID(e.target.value);
    }
    function doAction(e){
        deleteFireData();
        Router.push('/');
    }

    function deleteFireData(){
        let id = ID;
        let db = firebase.database();
        let ref = db.ref('sample/'+id);
        ref.remove();
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th>ID:</th>
                    <td><input type="text" placeholder="delete ID:" 
                            onChange={doChange} value={ID} />
                    </td>
                </tr>
                <tr><th></th>
                <td>
                    <button onClick={doAction}>削除</button>
                </td></tr>
            </tbody>
        </table>
    )

}

export default Firedelete;
