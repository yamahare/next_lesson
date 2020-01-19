import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBPqbSuHiBoOxRn98vxia4NxRRbveeeFiQ",
    authDomain: "react-test-e96fe.firebaseapp.com",
    databaseURL: "https://react-test-e96fe.firebaseio.com",
    projectId: "react-test-e96fe",
    storageBucket: "react-test-e96fe.appspot.com",
    messagingSenderId: "568310761966",
    appId: "1:568310761966:web:aa5c7725ef9a50ad18a6ff",
    measurementId: "G-JHFTRJBYKT"
};

var fireapp;
try{
    firebase.initializeApp(firebaseConfig);
}catch(error){
    console.log(error.message);
}
export default fireapp;

const initial = {
}

//ダミー
function fireReducer(state=initial, action){
    switch(action.type){
        case 'TESTACTION':
            return state;
        default:
            return state;
    }
}

export function initStore(state = initial){
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}

// const initial = {
//     message: 'START',
//     data: [],
//     number: [],
//     result: 0
// }

// function calcReducer(state = initial, action){
//     switch(action.type){
//         case 'ENTER':
//             let data2 = state.data.slice();
//             let s = action.value;
//             data2.unshift(s);
//             let num = s.replace(/[^0-9]/g,"");
//             let number2 = state.number.slice();
//             number2.unshift(num);
//             let result = (state.result * 1) + (num * 1);
//             return {
//                 message: 'ENTER',
//                 data: data2,
//                 number: number2,
//                 result: result
//             };
//         case 'RESET':
//             return {
//                 message: 'RESET',
//                 data: [],
//                 number: [],
//                 result: 0
//             };
//         default:
//             return state;
//     }
// }

// function counterReducer (state = initial, action){
//     switch (action.type){
//         case 'INCREMENT':
//             return {
//                 message: 'INCREMENT',
//                 count: state.count + 1
//             };
//         case 'DECREMENT':
//             return {
//                 message: 'DECREMENT',
//                 count: state.count - 1
//             };
//         case 'RESET':
//             return {
//                 message: 'RESET',
//                 count: initial.count
//             };
//         default:
//             return state;
//     }
// }

// export function initStore(state = initial){
//     return createStore(calcReducer, state, applyMiddleware(thunkMiddleware))
// }