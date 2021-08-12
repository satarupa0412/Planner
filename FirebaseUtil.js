import firebase from 'firebase/app';
import "firebase/database";
import React, { useState } from "react";
import { View } from 'react-native';

export default function FirebaseUtil({ data }) {

  const [ts, setTs] = useState(new Date().getMilliseconds())

  const firebaseConfig = {
    apiKey: "AIzaSyAd-qI_6NLC4JxNa_IYqpLEpQJAe3RnBJQ",
    authDomain: "rn-planner.firebaseapp.com",
    databaseURL: "https://rn-planner-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rn-planner",
    storageBucket: "rn-planner.appspot.com",
    messagingSenderId: "1017401746409",
    appId: "1:1017401746409:web:8b19b477ce3d5c9847a178"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  firebase.database().ref('/data/' + ts)
    .set({
      note: data,
      time: new Date().toISOString()
    })
    .then(() => console.log('Data set.'))

  // firebase.database().ref('users/123')
  // .on('value', (snapshot) => {
  //   console.log("New high score: " + snapshot.val().name);
  // });

  return (<View></View>)
}