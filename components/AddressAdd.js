import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import firebase from 'firebase';
import Lib from '../static/address_lib'
import Account from './Account'

function AddressAdd(props){
    const [message, setMessage] = useState('データを入力してください');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [memo, setMemo] = useState('');
    const dispatch = useDispatch();
    const userStore = useSelector(state => state);

    function logined(){
        console.log('logined')
    }

    function logouted(){
        Router.push('/address')
    }

    function onChangeName(e){
        setName(e.target.value);
    }

    function onChangeEmail(e){
        setEmail(e.target.value);
    }

    function onChangeTel(e){
        setTel(e.target.value);
    }

    function onChangeMemo(e){
        setMemo(e.target.value);
    }

    function doAction(e){
        let key = email;
        let data = {
            name: name,
            tel: tel,
            memo: memo
        }
        let db = firebase.database();
        let ref = db.ref('address/'+Lib.encodeEmail(userStore.email)+'/'+Lib.encodeEmail(email));
        console.log(ref);
        ref.set(data);
        setMessage('登録しました');
        setName('');
        setEmail('');
        setTel('');
        setMemo('');

    }

    return (
        <div>
            <Account onLogined={logined} onLogouted={logouted} />
            <p>{message}</p>
            {userStore.login
            ?
            <table>
                <tbody>
                    <tr>
                        <th>name:</th>
                        <td><input type="text" size="30" value={name} onChange={onChangeName}></input></td>
                    </tr>
                    <tr>
                        <th>email:</th>
                        <td><input type="text" size="30" value={email} onChange={onChangeEmail}></input></td>
                    </tr>
                    <tr>
                        <th>tel:</th>
                        <td><input type="text" size="30" value={tel} onChange={onChangeTel}></input></td>
                    </tr>
                    <tr>
                        <th>memo:</th>
                        <td><input type="text" size="30" value={memo} onChange={onChangeMemo}></input></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td><button onClick={doAction}>Add</button></td>
                    </tr>
                </tbody>
            </table>
            :
            <p>please login...</p>
        }
        </div>
    )

}

export default AddressAdd;

