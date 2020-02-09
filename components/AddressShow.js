import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import firebase from 'firebase';
import Lib from '../static/address_lib'
import Account from './Account'
import { useStore } from 'react-redux/lib/hooks/useStore';

function AddressShow(props){
    const [message, setMessage] = useState(Router.query.email+'のデータ');
    const [email, setEmail] = useState(Router.query.email);
    const [address, setAddress] = useState(null);
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const userStore = useSelector(state => state);

    function logined(){
        console.log('logined')
    }

    function logouted(){
        Router.push('/address')
    }

    function getAddress(email){
        let db = firebase.database();

        let ref0 = db.ref('address/'+Lib.encodeEmail(userStore.email)+'/'+Lib.encodeEmail(email)+'/check');
        ref0.set(false);

        let ref = db.ref('address/'+Lib.encodeEmail(userStore.email))
        ref.orderByKey()
           .equalTo(Lib.encodeEmail(email))
           .on('value',(snapshot)=>{
                for(let i in snapshot.val()){
                    let d = Lib.deepcopy(snapshot.val()[i]);
                    setAddress(d);
                    break
                }
        })
    }

    function doChange(e){
        setInput(e.target.value)
    }

    function doAction(e){
        let from = Lib.encodeEmail(userStore.email)
        let to = Lib.encodeEmail(email)
        let db = firebase.database();
        let d = new Date().getTime();
        let ref = db.ref('address/'+from+'/'+to+'/messages/'+d);
        ref.set('to:'+input);

        let ref2 = db.ref('address/'+to+'/'+from+'/messages/'+d);
        ref2.set('from:'+input);

        let ref3 = db.ref('address/'+to+'/'+from+'/check/');
        ref3.set(true);

        setInput('');
    }

    if(address == null){
        getAddress(Router.query.email)
    }
    let items = [];
    if(address!=null){
        for(let n in address.messages){
            items.unshift(<li key={n}>
                {address.messages[n]}
            </li>)
        }
    }

    return (
        <div>
            <Account onLogined={logined} onLogouted={logouted} />
            <p>{message}</p>
            {address != null
            ?
            <table>
                <tbody>
                    <tr>
                        <th>name:</th>
                        <td>{address.name}</td>
                    </tr>
                    <tr>
                        <th>email:</th>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <th>tel:</th>
                        <td>{address.tel}</td>
                    </tr>
                    <tr>
                        <th>memo:</th>
                        <td>{address.memo}</td>
                    </tr>
                </tbody>
            </table>
            :
            <p>no address</p>
            }
            <hr></hr>
            <fieldset>
                <p>Message:</p>
                <input type='text' size='40' value={input} onChange={doChange} />
                <button onClick={doAction}>send</button>
            </fieldset>
            {address != null && address.messages != null
            ?
            <div>
                <p>{address.name}さんとのメッセージ</p>
                <ul>{items}</ul>
            </div>
            :
            <p>メッセージはありません</p>
            }
        </div>
    )

}

export default AddressShow;

