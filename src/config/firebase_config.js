import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var config = {
   /* apiKey: "AIzaSyAlRpGQL-iX0UOv2Wssir2bIIKaYpPG-iw",
    authDomain: "react-social-network-7e88b.firebaseapp.com",
    databaseURL: "https://react-social-network-7e88b.firebaseio.com",
    projectId: "react-social-network-7e88b",
    https://reactsocial-e12d2-default-rtdb.firebaseio.com/
    storageBucket: "react-social-network-7e88b.appspot.com",
    messagingSenderId: "906593123724"*/

apiKey: "AIzaSyAGyGzeEZNIgqpiknrgJTk-OA5jrBa32rY",
    authDomain: "reactsocial-e12d2.firebaseapp.com",
    databaseURL: "https://reactsocial-e12d2-default-rtdb.firebaseio.com",
    projectId: "reactsocial-e12d2",
    storageBucket: "reactsocial-e12d2.appspot.com",
    messagingSenderId: "258475460522",
    appId: "1:258475460522:web:98436916975261875b8dd3",
    measurementId: "G-ZBXDYYW4QF"




};

const app = firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export {app}
