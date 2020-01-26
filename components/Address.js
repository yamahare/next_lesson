import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import firebase from 'firebase';
import Lib from '../static/address_lib'
import Account from './Account'

function Address(props){
    // const [data, setData] = useState([]);
    // const [lastID, setLastID] = useState(-1);
    // const [inputMessageText, setInputMessageText] = useState('');
    // const [inputNameText, setInputNameText] = useState('');
    const dispatch = useDispatch();
    const userStore = useSelector(state => state);

    function logined(){
        getFireData();
    }

    function logouted(){
        Router.push('/address')
    }

    function getFireData(){
        debugger
        if(userStore.email == undefined || userStore.email == ''){ return; }
        let email = Lib.encodeEmail(userStore.email);

        let db = firebase.database();
        let ref = db.ref('address/');
        debugger
        ref.orderByKey()
           .equalTo(email)
           .on('value', (snapshot)=>{
               let d = Lib.deepcopy(snapshot.val());
               
                dispatch({
                    type: 'UPDATE_USER',
                    value: {
                        login: userStore.login,
                        username: userStore.username,
                        email: userStore.email,
                        data: d,
                        items: (function(){
                            debugger
                            getItem(d)
                        }())
                    }
                });
           })
    }

    function getItem(data){
        debugger
        if(data == undefined){ return; }
        let res = [];
        for(let i in data){
            for(let j in data[i]){
                let email = Lib.decodeEmail(j);
                let s = data[i][j]['name'];

                res.push(<li key={j} data-tag={email} onClick={go(null, email)}>
                   {data[i][j]['check'] == true ?
                    <b>◎</b> : ''}{s}({email}) 
                </li>)
            }
        }
    }

    function go(email){
        Router.push('/address_show?email='+email)
    }

    return (
        <div>
            <Account onLogined={logined} onLogouted={logouted} />
            <ul>
                {userStore.items == [] ? <li key="0">no items.</li> : userStore.items}
            </ul>
        </div>
    )

}

export default Address;

