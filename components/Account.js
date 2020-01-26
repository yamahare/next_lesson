import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';

function Account(props){
    // const [data, setData] = useState([]);
    // const [lastID, setLastID] = useState(-1);
    // const [inputMessageText, setInputMessageText] = useState('');
    // const [inputNameText, setInputNameText] = useState('');
    const dispatch = useDispatch();
    const userStore = useSelector(state => state);

    function login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result)=>{
                dispatch({
                    type: 'UPDATE_USER',
                    value: {
                        login: true,
                        username: result.user.displayName,
                        email: result.user.email,
                        data: userStore.data,
                        items: userStore.items
                    }
                });
                debugger
                props.onLogined();
            })
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
        props.onLogouted();
    }

    function login_check(){
            if(userStore.login == false){
            login();
        }else{
            logout();
        }
    }

    return (
        <div>
            <p className="login">
                <span className="account" onClick={login_check}>LOGINED: {userStore.username}</span>
            </p>
        </div>
    )

}

export default Account;

