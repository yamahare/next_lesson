import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
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
    const store = useStore()

    function logined(){
        getFireData();
    }

    function logouted(){
        Router.push('/address')
    }

    function getFireData(){
        if(store.getState().email == undefined || store.getState().email == ''){ return; }
        let email = Lib.encodeEmail(store.getState().email);

        let db = firebase.database();
        let ref = db.ref('address/');
        ref.orderByKey()
           .equalTo(email)
           .on('value', (snapshot)=>{
               let d = Lib.deepcopy(snapshot.val());
               dispatch({
                    type: 'UPDATE_USER',
                    value: {
                        login: store.getState().login,
                        username: store.getState().username,
                        email: store.getState().email,
                        data: d,
                        items: getItem(d)
                    }
                });
           })
    }

    function getItem(data){
        if(data == undefined){ return; }
        let res = [];
        for(let i in data){
            for(let j in data[i]){
                let email = Lib.decodeEmail(j);
                let s = data[i][j]['name'];

                res.push(<li key={j} data-tag={email} onClick={()=>go(email)}>
                   {data[i][j]['check'] == true ?
                    <b>◎</b> : ''}{s}({email}) 
                </li>);
            }
            break;
        }
        return res
    }

    function go(email){
        Router.push('/address_show?email='+email)
    }

    async function login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider)
            .then((result)=>{ return result });
            //     dispatch({
            //         type: 'UPDATE_USER',
            //         value: {
            //             login: true,
            //             username: result.user.displayName,
            //             email: result.user.email,
            //             data: userStore.data,
            //             items: userStore.items
            //         }
            //     });
            //     debugger
            //     console.log(userStore.username)
            //     console.log(userStore)
            //     logined();
            // })
        console.log(result);
        console.log(store.getState())
        const data = await dispatch({
                        type: 'UPDATE_USER',
                        value: {
                            login: true,
                            username: result.user.displayName,
                            email: result.user.email,
                            data: userStore.data,
                            items: userStore.items
                        }
                    });
        console.log(store.getState())
        console.log(data)
        console.log(userStore.username)
        console.log(userStore)
        logined();
        console.log('------------------')
        console.log(userStore)
    }

    function logout(){
        console.log('logout');
        firebase.auth().signOut();
        dispatch({
            type: 'UPDATE_USER',
            value: {
                login: false,
                username: '(click here!)',
                email: '',
                data: [],
                items: []
            }
        });
        logouted();
    }

    console.log(userStore)
    function login_check(){
        if(userStore.login == false){
            login();
        }else{
            logout();
        }
    }

    return (
        <div>
            {/* <Account onLogined={logined} onLogouted={logouted} /> */}
            <p className="login">
                <span className="account" onClick={login_check}>LOGINED: {userStore.username}</span>
            </p>
            <ul>
                {userStore.items == [] ? <li key="0">no items.</li> : userStore.items}
            </ul>
        </div>
    )

}

export default Address;

